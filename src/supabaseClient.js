import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://tljvqcrkdvtnxiodgzvb.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRsanZxY3JrZHZ0bnhpb2RnenZiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY4Njg5MDUsImV4cCI6MjA3MjQ0NDkwNX0.aSaBMH_9Wef21ekwyt6V_FjHJX4NKx5KLOXrbXq2Nxs'
export const supabase = createClient(supabaseUrl, supabaseKey)