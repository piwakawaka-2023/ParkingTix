export interface UserObj {
  id: number
  f_name: string
  l_name: string
  created_at: number
  profile_image: string | null
  email: string
}

export interface New {
  f_name: string
  l_name: string
  profile_image?: string
  email: string
}

export interface Update {
  id: number
  f_name?: string
  l_name?: string
  profile_image?: string
  email?: string
}

