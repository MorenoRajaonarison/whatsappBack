
# Whatsapp clone backend

Using the MERN stack, our back-end server handles authentication, data persistence, and ensures real-time communication with socket.io, incorporating some key features from the actual WhatsApp.


## Description

Crafted with **Express.js**, the API acts as a bridge for all client-server interactions, delivering peak performance. Leans on **JSON Web Tokens** (JWT) for user authentication, and employs "refresh tokens" to securely extend sessions.

Users can exchange messages in real-time, be it one-on-one or in groups, and  manages the sending of images, videos, and other files, ensuring a rich and diverse communication. Additionally, files are uploaded to **Cloudinary** for efficient and reliable storage.

With the implementation of **socket.io**, every interaction is relayed in real-time to all relevant users.


## Features

- Sign in, Sign Up, Logout
- Send/receive a message (text, image, video, file) in real-time
- Online status indicator
- Search User
- Call video (coming soon)


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`CLIENT` *Frontend URL*

`PORT` / *Server port*

`ENV` / *prod or dev*

`ACCESS_TOKEN_SECRET` / *Random key*

`REFRESH_TOKEN_SECRET` / *Random key to refresh access_token*

`DEFAULT_STATUS` / *Random text for user status*

`DEFAULT_USER_PROFILE_IMG` = https://res.cloudinary.com/dkd5jblv5/image/upload/v1675976806/Default_ProfilePicture_gjngnb.png

`DEFAULT_GRP_PROFILE_IMG`= https://res.cloudinary.com/dmhcnhtng/image/upload/v1687012951/1221bc0bdd2354b42b293317ff2adbcf_icon_og8gcn.png



## Run Locally

Clone the project

```bash
  git clone https://link-to-project
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```


## Tech Stack

**Client:** React, Redux, TailwindCSS

**Server:** Node, Express, Socket.io


## Authors

- [@Rajaonarison](https://www.github.com/octokatherine)

