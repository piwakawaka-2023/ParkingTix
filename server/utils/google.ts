const {google} = require('googleapis');
// import { Email } from "../../models/google";

const oauth2Client = new google.auth.OAuth2(
  "607422315781-dlrhdddnoefbe9o5h6725p57oj951o24.apps.googleusercontent.com",
  "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",
  "http://localhost:5173/auth"
);

export function getAuthURL() {
 return oauth2Client.generateAuthUrl({
  // 'online' (default) or 'offline' (gets refresh_token)
  access_type: 'offline',
  /** Pass in the scopes array defined above.
    * Alternatively, if only one scope is needed, you can pass a scope URL as a string */
  scope: ['https://www.googleapis.com/auth/gmail.send'],
  // Enable incremental authorization. Recommended as a best practice.
  include_granted_scopes: true
})
}

export async function getToken(code) {
  let {tokens} = await oauth2Client.getToken(code)
  oauth2Client.setCredentials(tokens)

  return tokens.refresh_token ? tokens.refresh_token : ''

  console.log(tokens)
  // console.log(await getMail())
  // console.log('ONE',await getMessageContent('18909c5cd7bdf8c8'))
  // console.log('ONE',await getMessageContent('18908fb1eaa720a7'))
}

export async function sendMail(email: Email) {
  const subject = `Ticket Number ${email.infringementNo} Dispute`;
  const utf8Subject = `=?utf-8?B?${Buffer.from(subject).toString('base64')}?=`;
  const messageParts = [
    `From: ${email.firstName} ${email.lastName} <${email.email}>`,
    `To: Oscar McGoldrick <${email.recipient}>`,
    'Content-Type: text/html; charset=utf-8',
    'MIME-Version: 1.0',
    `Subject: ${utf8Subject}`,
    '',
    `${email.message}`
  ];
  const message = messageParts.join('\n');

  // The decodedBodyds to be base64url encoded.
  const encodedMessage = Buffer.from(message)
    .toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');

  // send an email via the gmail api
    const gmail = google.gmail({version: 'v1', auth: oauth2Client})
    const response = await gmail.users.messages.send({
    userId: 'me',
    requestBody: {
      raw: encodedMessage,
    },
  })
  return response.data.threadId
}

export async function getMail() {
  const gmail = google.gmail({ version: 'v1', auth: oauth2Client });
  const res = await gmail.users.messages.list({
    userId: 'me',
    labelIds: ['INBOX'],
    maxResults: 50, // You can modify this value to retrieve more or fewer messages
  });

  const messages = res.data.messages;

  return messages
}

export async function getMessageContent(messageId: string) {
  const gmail = google.gmail({ version: 'v1', auth: oauth2Client });
  const res = await gmail.users.messages.get({
    userId: 'me',
    id: messageId,
  });

  const message = res.data
  const partsArr = message.payload.parts
  
  const textBody = findTextBody(partsArr[0])

  return textBody;
}

export function findTextBody(payload) {
  if (payload.mimeType === 'text/plain') {
    return payload.body.data ? decodeBase64(payload.body.data) : '';
  }

  if (payload.mimeType === 'multipart/alternative' && payload.parts) {
    for (const part of payload.parts) {
      const body = findTextBody(part);
      if (body !== '') {
        return body
      }
    }
  }
  return ''
}

export function decodeBase64(encodedString) {
  const decodedString = Buffer.from(encodedString, 'base64').toString('utf-8');
  return decodedString;
}

export async function getProfile() {
      const gmail = google.gmail({version: 'v1', auth: oauth2Client})
    const profile = await gmail.users.getProfile({
      userId: 'me'
    })
    return profile
}

export async function getMessagesByThread(threadId: string) {
  const gmail = google.gmail({version: 'v1', auth: oauth2Client})
  const messages = await gmail.users.messages.list({
    userId: 'me',
    q: `threadId: ${threadId}`
  })

  return messages.data.messages
}