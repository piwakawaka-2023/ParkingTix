export interface UserObj {
  id: number
  name: string
  created_at: number
  profile_image: string | null
  email: string
}

export interface New {
  name: string
  profile_image?: string
  email: string
}

export interface Update {
  id: number
  name?: string
  profile_image?: string
  email?: string
}

