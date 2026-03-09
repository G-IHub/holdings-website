"use client";

import Image from "next/image";
import { useState } from "react";
import ContactSVG from "../../assets/gmic/sportsman-fitness.jpg";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    stateCity: "",
    organization: "",
    currentStatus: "",
    payment: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      const response = await fetch("/api/participants", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit form");
      }

      setSuccess(true);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        country: "",
        stateCity: "",
        organization: "",
        currentStatus: "",
        payment: "",
      });

      // Redirect to WhatsApp after 3 seconds
      setTimeout(() => {
        window.location.href = 'https://chat.whatsapp.com/HZp6BRBzbr3DGER8K7EBm8?mode=gi_t';
      }, 3000);
    } catch (err: any) {
      setError(err.message || "An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="md:py-16 p-4 lg:px-20 flex min-h-screen w-full justify-center items-center relative">
      <div className="absolute inset-0 -z-10 bg-black hidden md:block">
        <Image
          src={ContactSVG}
          alt="Hero background"
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>
      <div className="shadow-xl md:shadow-md max-w-3xl p-10 md:py-20 md:px-25 rounded-xl bg-white">
        {/* Success Message */}
        {success && (
          <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
            ✓ Registration successful! Redirecting to WhatsApp...
          </div>
        )}

        {/* Error Message */}
        {error && (
          <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
            ✗ {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Name info */}
          <div className="grid grid-cols-1 md:grid-cols-2 items-end gap-6">
            <div>
              <label
                htmlFor="firstName"
                className="text-sm font-medium text-gray-900"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full border-b border-gray-300 outline-none py-2 placeholder:text-sm placeholder:text-gray-400 focus:border-purple-600"
                placeholder="e.g John"
              />
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="text-sm font-medium text-gray-900"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-full border-b border-gray-300 outline-none py-2 placeholder:text-sm placeholder:text-gray-400 focus:border-purple-600"
                placeholder="e.g Dowry"
              />
            </div>
          </div>

          {/* Email and phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 items-end gap-6">
            <div>
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-900"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border-b border-gray-300 outline-none py-2 placeholder:text-sm placeholder:text-gray-400 focus:border-purple-600"
                placeholder="e.g John@example.com"
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="text-sm font-medium text-gray-900"
              >
                Phone Number (WhatsApp preferred)
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full border-b border-gray-300 outline-none py-2 placeholder:text-sm placeholder:text-gray-400 focus:border-purple-600"
                placeholder="+234"
              />
            </div>
          </div>

          {/* Residence */}
          <div className="grid grid-cols-1 md:grid-cols-2 items-end gap-6">
            <div>
              <label
                htmlFor="country"
                className="text-sm font-medium text-gray-900"
              >
                Country of Residence
              </label>
              <input
                type="text"
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                required
                className="w-full border-b border-gray-300 outline-none py-2 placeholder:text-sm placeholder:text-gray-400 focus:border-purple-600"
                placeholder="e.g Nigeria"
              />
            </div>
            <div>
              <label
                htmlFor="stateCity"
                className="text-sm font-medium text-gray-900"
              >
                State or City
              </label>
              <input
                type="text"
                id="stateCity"
                name="stateCity"
                value={formData.stateCity}
                onChange={handleChange}
                className="w-full border-b border-gray-300 outline-none py-2 placeholder:text-sm placeholder:text-gray-400 focus:border-purple-600"
                placeholder="Oyo state"
              />
            </div>
          </div>

          {/* Organization */}
          <div className="grid grid-cols-1 md:grid-cols-2 items-end gap-6">
            <div>
              <label
                htmlFor="currentStatus"
                className="text-sm font-medium text-gray-900"
              >
                Current Status
              </label>
              <select
                id="currentStatus"
                name="currentStatus"
                value={formData.currentStatus}
                onChange={handleChange}
                className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-purple-600 w-full border-b border-gray-300 outline-none placeholder:text-sm placeholder:text-gray-400 focus:border-purple-600"
              >
                <option value="">Select Status</option>
                <option value="Undergraduate Student">Undergraduate Student</option>
                <option value="Graduate Student (MSc/PhD)">Graduate Student (MSc/PhD)</option>
                <option value="Early-career Researcher">Early-career Researcher</option>
                <option value="Clinician">Clinician</option>
                <option value="Laboratory Scientist">Laboratory Scientist</option>
                <option value="Public Health Professional">Public Health Professional</option>
                <option value="Other">Otherg</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="organization"
                className="text-sm font-medium text-gray-900"
              >
                Institution / Organization Name
              </label>
              <input
                type="text"
                id="organization"
                name="organization"
                value={formData.organization}
                onChange={handleChange}
                className="w-full border-b border-gray-300 outline-none py-2 placeholder:text-sm placeholder:text-gray-400 focus:border-purple-600"
                placeholder="e.g Your Organization"
              />
            </div>
          </div>

          {/* Payment */}
          <div className="grid grid-cols-1">
            <label className="text-sm font-medium text-gray-900 mb-2">
              Do you agree to make the Registration fee of N5000 ($5)?
            </label>
            <div className="flex gap-6">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="payment"
                  value="yes"
                  checked={formData.payment === "yes"}
                  onChange={handleChange}
                  required
                  className="mr-2"
                />
                Yes
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="payment"
                  value="no"
                  checked={formData.payment === "no"}
                  onChange={handleChange}
                  required
                  className="mr-2"
                />
                No
              </label>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-6">
            <button
              type="submit"
              disabled={loading}
              className="bg-purple-600 rounded-full px-4 py-2 w-full md:w-auto flex justify-center items-center text-white cursor-pointer hover:bg-purple-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
            {/* <div className="text-xs text-gray-500">
              By pressing the submit button, I agree to Genomac Innovation
              contacting me by email and/or phone to share opportunities
              exclusively available to Select or Enterprise customes. I also
              understand that any information I&apos;ve shared in this form is
              subject to Designership Privacy Policy.
            </div> */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
