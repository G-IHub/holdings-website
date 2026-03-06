import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

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

const DATA_FILE = path.join(process.cwd(), 'data', 'participants.json');

// Ensure data directory exists
function ensureDataDirectory() {
  const dataDir = path.join(process.cwd(), 'data');
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
}

// Read participants from file
function readParticipants(): Participant[] {
  ensureDataDirectory();
  try {
    if (fs.existsSync(DATA_FILE)) {
      const data = fs.readFileSync(DATA_FILE, 'utf-8');
      return JSON.parse(data);
    }
  } catch (error) {
    console.error('Error reading participants:', error);
  }
  return [];
}

// Write participants to file
function writeParticipants(data: Participant[]): void {
  ensureDataDirectory();
  try {
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
  } catch (error) {
    console.error('Error writing participants:', error);
    throw error;
  }
}

// POST: Add new participant
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate required fields
    if (!body.firstName || !body.lastName || !body.email) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const participants = readParticipants();

    // Check for duplicate email
    if (participants.some((p) => p.email === body.email)) {
      return NextResponse.json(
        { error: 'Email already registered' },
        { status: 409 }
      );
    }

    const newParticipant = {
      id: Date.now().toString(),
      firstName: body.firstName,
      lastName: body.lastName,
      email: body.email,
      phone: body.phone,
      country: body.country,
      stateCity: body.stateCity,
      organization: body.organization,
      registeredAt: new Date().toISOString(),
    };

    participants.push(newParticipant);
    writeParticipants(participants);

    return NextResponse.json(newParticipant, { status: 201 });
  } catch (error) {
    console.error('Error in POST:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// GET: Retrieve all participants
export async function GET() {
  try {
    const participants = readParticipants();
    return NextResponse.json(participants);
  } catch (error) {
    console.error('Error in GET:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// DELETE: Remove a participant
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json(
        { error: 'Participant ID required' },
        { status: 400 }
      );
    }

    const participants = readParticipants();
    const filtered = participants.filter((p) => p.id !== id);

    if (filtered.length === participants.length) {
      return NextResponse.json(
        { error: 'Participant not found' },
        { status: 404 }
      );
    }

    writeParticipants(filtered);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error in DELETE:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
