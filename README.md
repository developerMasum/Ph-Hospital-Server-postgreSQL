
# Project Title

PH Health-Care Hospital


## Tech Stack

**Server:** PostgreSQL,Prisma,Web RTC, Node, Express,

## DEMO

[Live Link](https://linktodocumentation)


## Postman Documentation

[Postman](https://documenter.getpostman.com/view/31710966/2sA3BoYr6v)



## Screenshots

[ER Diagram](https://i.ibb.co/7XCdg3g/PH-Health-Care-ERD-2-page-0001.jpg)


## Features

### Admin
- Manage doctor accounts.
- Schedule and monitor appointments.
- Access appointment history and doctor profiles.

### Doctor
- View upcoming appointments.
- Set appointment slots.
- Generate and send prescriptions via email.

### Patient
- Register and manage accounts.
- Book appointments.
- Access medical records and prescriptions.
- Pay fees securely and receive email confirmations.
- Rate and review doctors.

### System Features
- Real-time video consultations via WebRTC.
- Secure authentication and authorization.
- Seamless appointment scheduling.
- Comprehensive patient profiles and records.
- Secure payment integration.
- Automated email notifications.





## Run Locally

Clone the project

```bash
  git clone https://github.com/developerMasum/Ph-Hospital-Server-postgreSQL
```


Go to the project directory

```bash
  cd Ph-Hospital-Server-postgreSQL
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

Use Seed for SUPER-Admin

```bash
  npm run seed
```

## Environment Variables

To run this project, you'll need to set up the following environment variables in your `.env` file:

- `NODE_ENV`
- `PORT`
- `DATABASE_URL`
- `JWT_SECRET`
- `EXPIRES_IN`
- `REFRESH_TOKEN_SECRET`
- `REFRESH_TOKEN_EXPIRES_IN`
- `ACCESS_TOKEN_SECRET`
- `RESET_PASSWORD_TOKEN_SECRET`
- `RESET_PASSWORD_EXPIRES_IN`
- `RESET_PASSWORD_LINK`
- `EMAIL`
- `EMAIL_APP_PASSWORD`
- `STORE_ID`
- `STORE_PASS`
- `SUCCESS_URL`
- `CANCEL_URL`
- `FAILED_URL`
- `SSL_PAYMENT_API`
- `SSL_VALIDATION_API`
