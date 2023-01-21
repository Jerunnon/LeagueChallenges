import { createClient } from '@supabase/supabase-js'

export const supabase = createClient('https://exsjlxnmbspxtssipmlr.supabase.co', 
'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV4c2pseG5tYnNweHRzc2lwbWxyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzIyMzMzMjIsImV4cCI6MTk4NzgwOTMyMn0.FVdF6HJinrbYSCwXkmYxXLns3QYx7CmxlhRn9oa0ye4')