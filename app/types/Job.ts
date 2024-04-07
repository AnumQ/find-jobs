export type Job = {
  company_name: string;
  company_num_employees?: number | null;
  date_posted: string; // Date string in ISO 8601 format
  employment_type: string;
  id: string;
  keywords: string[];
  location?: string | null;
  logo: string;
  remote: boolean;
  role: string;
  source: string;
  text: string;
  url?: string;
};
