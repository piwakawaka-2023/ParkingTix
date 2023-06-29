export interface DisputeObj {
    id: number
    created_at: Date
    user_id: number
    infringement: number
    registration: string
    date_issued: Date
    time_issued: string
    location: string
    amount: number
    status: string
  }

  export interface New {
    user_id: number
    infringement: number
    registration: string
    date_issued: Date
    time_issued: string
    location: string
    amount: number
    status: string
  }

  export interface Update {
    user_id?: number
    infringement?: number
    registration?: string
    date_issued?: Date
    time_issued?: string
    location?: string
    amount?: number
    status?: string
  }