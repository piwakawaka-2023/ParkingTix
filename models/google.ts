export interface Email {
  firstName: string,
  lastName: string,
  email: string,
  recipient: string,
  message: Text,
  infringementNo: string
}

export interface ReplyEmail extends Email {
  thread_id: string
}