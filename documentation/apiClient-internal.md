# Internal Api Functions

## API (Client - Server)

#### USERS
| Method | API Function Name | Endpoint | Protected | Usage | Response |
| --- | --- | --- | --- | --- | --- |
| Get | fetchAllUsers | /api/v1/users | No | Get a list of all users from the DB | Objects (object = User) |
| Get | fetchUser | /api/v1/users/:id | No | Get information of a single user from the DB | Objects (object = User) |
| Delete | deleteUser | /api/v1/users/:id | No | Delete a user from the DB | id |
| Post | postUser | /api/v1/users | No | Add a user to database | Objects (object = User) |
| Patch | patchUser | /api/v1/users/:id | No | Update user information send status | status(200) |

#### DISPUTES
| Method | API Function Name | Endpoint | Protected | Usage | Response |
| --- | --- | --- | --- | --- | --- |
| Get | fetchDisputes | /api/v1/disputes/:user_id | No | Get a list of disputes by user id from the DB | An array of Objects (object = DisputeObj[]) |
| Delete | deleteDispute | /api/v1/disputes/:id | No | Delete dispute from the DB | Status 200 |
| Post | postDispute | /api/v1/disputes | No | Add a dispute to database | Objects (object = Dispute) |
| Patch | updateDispute | /api/v1/disputes/:id | No | Update dispute in database, especially for status | Objects (object = Dispute) |
| Get | fetchDisputeUserDetails | /api/v1/disputes/details/:dispute_id | No | Get a single dispute from the db, containing the users' name | An array of Objects (object = DisputeUserDetails) |

### Emails:
| Method | API Function Name | Endpoint | Protected | Usage | Response |
| --- | --- | --- | --- | --- | --- |
| Get | fetchEmailsByUserId | /api/v1/emails/:user_id | No | Get emails by user id from DB | (object = email[]) |
| Post | postEmail | /api/v1/emails | No | Add an email to database | Objects (object = email) |
