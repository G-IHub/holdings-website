// Test Supabase connection
// Run this in browser console or as a test script

import { supabase } from './lib/supabase.js';

async function testConnection() {
  try {
    // Test connection by trying to select from participants table
    const { data, error } = await supabase
      .from('participants')
      .select('*')
      .limit(1);

    if (error) {
      console.error('Supabase connection error:', error);
      return false;
    }

    console.log('Supabase connected successfully!', data);
    return true;
  } catch (err) {
    console.error('Connection test failed:', err);
    return false;
  }
}

testConnection();