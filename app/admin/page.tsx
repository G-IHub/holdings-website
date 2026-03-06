'use client';

import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { HiOutlineTrash } from 'react-icons/hi';

interface Participant {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  stateCity: string;
  organization: string;
  registeredAt: string;
}

export default function AdminPage() {
  const [participants, setParticipants] = useState<Participant[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<'name' | 'date' | 'email'>('date');

  useEffect(() => {
    fetchParticipants();
  }, []);

  const fetchParticipants = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/participants');
      if (!response.ok) throw new Error('Failed to fetch participants');
      const data = await response.json();
      setParticipants(data);
      setError('');
    } catch (err) {
      setError('Failed to load participants data');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this participant?')) return;

    try {
      const response = await fetch(`/api/participants/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || `Failed to delete: ${response.status}`);
      }

      setParticipants(participants.filter((p) => p.id !== id));
      alert('Participant deleted successfully');
    } catch (err: any) {
      console.error('Delete error:', err);
      alert(`Failed to delete participant: ${err.message}`);
    }
  };

  const handleExportCSV = () => {
    if (participants.length === 0) {
      alert('No data to export');
      return;
    }

    const headers = ['First Name', 'Last Name', 'Email', 'Phone', 'Country', 'State/City', 'Organization', 'Registered At'];
    const rows = filteredParticipants.map((p) => [
      p.firstName,
      p.lastName,
      p.email,
      p.phone,
      p.country,
      p.stateCity,
      p.organization,
      new Date(p.registeredAt).toLocaleDateString(),
    ]);

    const csv = [headers, ...rows].map((row) => row.map((cell) => `"${cell}"`).join(',')).join('\n');

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `participants-${new Date().toISOString().split('T')[0]}.csv`;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  };

  const filteredParticipants = participants
    .filter((p) =>
      searchTerm === '' ||
      p.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.organization.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === 'name') {
        return `${a.firstName} ${a.lastName}`.localeCompare(`${b.firstName} ${b.lastName}`);
      } else if (sortBy === 'email') {
        return a.email.localeCompare(b.email);
      } else {
        return new Date(b.registeredAt).getTime() - new Date(a.registeredAt).getTime();
      }
    });

  return (
    <main>
      <Navbar />
      <div className="min-h-screen bg-gray-50 py-12 px-4 md:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8 mt-12 md:mt-24">
            <h1 className="text-4xl font-bold text-[#021C3A] mb-2">GMIC Participants</h1>
            <p className="text-gray-600">Manage and view all registered participants for GMIC 2026</p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="text-2xl font-bold text-purple-600">{participants.length}</div>
              <div className="text-gray-600 text-sm">Total Participants</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="text-2xl font-bold text-blue-600">{new Set(participants.map((p) => p.country)).size}</div>
              <div className="text-gray-600 text-sm">Countries</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="text-2xl font-bold text-green-600">{new Set(participants.map((p) => p.organization)).size}</div>
              <div className="text-gray-600 text-sm">Organizations</div>
            </div>
          </div>

          {/* Controls */}
          <div className="bg-white p-6 rounded-lg shadow mb-6">
            <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
              <div className="w-full md:w-1/3">
                <input
                  type="text"
                  placeholder="Search by name, email, or organization..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
              </div>
              <div className="flex gap-4 w-full md:w-auto">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                >
                  <option value="date">Sort by Date</option>
                  <option value="name">Sort by Name</option>
                  <option value="email">Sort by Email</option>
                </select>
                <button
                  onClick={handleExportCSV}
                  className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
                >
                  Export CSV
                </button>
              </div>
            </div>
          </div>

          {/* Error State */}
          {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">{error}</div>}

          {/* Loading State */}
          {loading && <div className="text-center py-12">Loading participants...</div>}

          {/* Table */}
          {!loading && filteredParticipants.length > 0 && (
            <div className="overflow-x-auto bg-white rounded-lg shadow">
              <table className="w-full">
                <thead className="bg-gray-100 border-b">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Name</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Email</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Phone</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Country</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Organization</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Registered</th>
                    <th className="px-6 py-3 text-center text-sm font-semibold text-gray-900">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {filteredParticipants.map((participant) => (
                    <tr key={participant.id} className="hover:bg-gray-50 transition">
                      <td className="px-6 py-4 text-sm text-gray-900">
                        {participant.firstName} {participant.lastName}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">{participant.email}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{participant.phone || '-'}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{participant.country || '-'}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{participant.organization || '-'}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        {new Date(participant.registeredAt).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 text-center">
                        <button
                          onClick={() => handleDelete(participant.id)}
                          className="text-red-600 hover:text-red-800 transition"
                          title="Delete participant"
                        >
                          <HiOutlineTrash size={20} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Empty State */}
          {!loading && filteredParticipants.length === 0 && (
            <div className="bg-white p-12 rounded-lg shadow text-center">
              <p className="text-gray-600">
                {participants.length === 0 ? 'No participants registered yet' : 'No participants match your search'}
              </p>
            </div>
          )}

          {/* Results Info */}
          {!loading && participants.length > 0 && (
            <div className="mt-4 text-sm text-gray-600">
              Showing {filteredParticipants.length} of {participants.length} participants
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
