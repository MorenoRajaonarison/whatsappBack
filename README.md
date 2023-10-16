# Whatsapp clone backend

Using the MERN stack, our back-end server handles authentication, data persistence, and ensures real-time communication with socket.io, incorporating some key features from the actual WhatsApp.However, this repo is not a perfect replica of the WhatsApp web application.

## Description

Crafted with **Express.js**, the API acts as a bridge for all client-server interactions, delivering peak performance. Leans on **JSON Web Tokens** (JWT) for user authentication, and employs "refresh tokens" to securely extend sessions.

Users can exchange messages in real-time, be it one-on-one or in groups, and manages the sending of images, videos, and other files, ensuring a rich and diverse communication. Additionally, files are uploaded to **Cloudinary** for efficient and reliable storage.

With the implementation of **socket.io**, every interaction is relayed in real-time to all relevant users.

## Features

- Sign in, Sign Up, Logout
- Send/receive a message (text, image, video, file) in real-time
- Online status, typing indicator
- Search User

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`CLIENT` _Frontend URL_

`PORT` / _Server port_

`ENV` / _prod or dev_

`ACCESS_TOKEN_SECRET` / _Random key_

`REFRESH_TOKEN_SECRET` / _Random key to refresh access_token_

`DEFAULT_STATUS` / _Random text for user status_

`DEFAULT_USER_PROFILE_IMG` = https://res.cloudinary.com/dkd5jblv5/image/upload/v1675976806/Default_ProfilePicture_gjngnb.png

`DEFAULT_GRP_PROFILE_IMG`= https://res.cloudinary.com/dmhcnhtng/image/upload/v1687012951/1221bc0bdd2354b42b293317ff2adbcf_icon_og8gcn.png

## Run Locally

Clone the project

```bash
  git clone https://github.com/MorenoRajaonarison/whatsappBack.git
```

Go to the project directory

```bash
  cd whatsappBack
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

## Tech Stack

**Client:** React, Redux, TailwindCSS

**Server:** Node, Express, Socket.io

## Authors

- [@Rajaonarison](https://www.github.com/octokatherine)
