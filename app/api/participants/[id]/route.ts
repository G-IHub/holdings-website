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

    const { error } = await supabase
      .from('participants')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Supabase delete error:', error);
      return NextResponse.json(
        { error: 'Failed to delete participant', details: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error in DELETE:', error);
    return NextResponse.json(
      { error: 'Internal server error', details: error.message },
      { status: 500 }
    );
  }
}
