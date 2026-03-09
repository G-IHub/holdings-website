import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '../../../lib/supabase';

interface Participant {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  stateCity: string;
  organization: string;
  currentStatus: string;
  payment: string;
  created_at?: string;
}

// POST: Add new participant
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    console.log('Received body:', body);

    // Validate required fields
    if (!body.firstName || !body.lastName || !body.email) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Check for duplicate email
    const { data: existing, error: checkError } = await supabase
      .from('participants')
      .select('id')
      .eq('email', body.email)
      .single();

    if (checkError && checkError.code !== 'PGRST116') { // PGRST116 is "not found" which is OK
      console.error('Email check error:', checkError);
      return NextResponse.json(
        { error: 'Database error during email check' },
        { status: 500 }
      );
    }

    if (existing) {
      return NextResponse.json(
        { error: 'Email already registered' },
        { status: 409 }
      );
    }

    const newParticipant = {
      firstName: body.firstName,
      lastName: body.lastName,
      email: body.email,
      phone: body.phone || null,
      country: body.country || null,
      stateCity: body.stateCity || null,
      organization: body.organization || null,
      currentStatus: body.currentStatus || null,
      payment: body.payment || null,
    };

    console.log('Inserting participant:', newParticipant);

    const { data, error } = await supabase
      .from('participants')
      .insert([newParticipant])
      .select()
      .single();

    if (error) {
      console.error('Supabase insert error:', error);
      return NextResponse.json(
        { error: 'Failed to save participant', details: error.message },
        { status: 500 }
      );
    }

    console.log('Successfully inserted:', data);
    return NextResponse.json(data, { status: 201 });
  } catch (error) {
    console.error('Unexpected error in POST:', error);
    return NextResponse.json(
      { error: 'Internal server error', details: error.message },
      { status: 500 }
    );
  }
}

// GET: Retrieve all participants
export async function GET() {
  try {
    console.log('Fetching participants...');
    const { data, error } = await supabase
      .from('participants')
      .select('*')
      .order('id', { ascending: false });

    if (error) {
      console.error('Supabase GET error:', error);
      return NextResponse.json(
        { error: 'Failed to fetch participants', details: error.message },
        { status: 500 }
      );
    }

    console.log('Fetched participants:', data?.length || 0);
    return NextResponse.json(data || []);
  } catch (error) {
    console.error('Unexpected error in GET:', error);
    return NextResponse.json(
      { error: 'Internal server error', details: error.message },
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

    const { error } = await supabase
      .from('participants')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json(
        { error: 'Failed to delete participant' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error in DELETE:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
