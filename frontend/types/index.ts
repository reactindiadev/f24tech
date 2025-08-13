export interface Project {
  id: number
  title: string
  description: string
  long_description?: string
  client?: string
  category: string
  duration?: string
  team_size?: string
  image_url?: string
  challenge?: string
  solution?: string
  status: 'draft' | 'published' | 'archived'
  created_at: string
  updated_at: string
  features?: string[]
  technologies?: string[]
  tags?: string[]
  results?: string[]
  testimonial?: {
    testimonial_text: string
    author_name: string
    author_role: string
  }
}

export interface Contact {
  id: number
  name: string
  email: string
  company?: string
  phone?: string
  service_interest?: string
  budget_range?: string
  message: string
  status: 'new' | 'contacted' | 'qualified' | 'closed'
  created_at: string
}

export interface Stats {
  totalProjects: number
  totalContacts: number
  totalNewsletter: number
  recentViews: number
}