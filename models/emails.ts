export interface EmailObj {
  id: number
  created_at: number
  dispute_id: number
  user_id: number
  content: string
}

export interface New {
  dispute_id: number
  user_id: number
  content: string
}
