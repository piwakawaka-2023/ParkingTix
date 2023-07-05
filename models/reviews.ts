export interface ReviewObj {
  id: number
  f_name: string
  rating: number
  review: string
}

export interface New {
  f_name: string
  rating: number
  review: string
}

export interface Update {
  f_name?: string
  rating?: number
  review?: string
}
