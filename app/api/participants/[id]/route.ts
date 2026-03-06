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

function readParticipants(): Participant[] {
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

function writeParticipants(data: Participant[]): void {
  try {
    const dataDir = path.dirname(DATA_FILE);
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
  } catch (error) {
    console.error('Error writing participants:', error);
    throw error;
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

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
