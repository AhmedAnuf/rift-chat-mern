# Rift.Chat

# Overview

Rift.Chat is the ultimate communication hub for project teams. Designed for seamless collaboration, Rift.Chat keeps your team connected through real-time messaging, typing indicators, and smart notifications. Whether you’re brainstorming, sharing updates, or tracking progress, Rift.Chat ensures smooth and efficient communication—keeping everyone on the same page.

# Features

## Core Functionalities

-	Real-Time Messaging: Instantly send and receive messages across teams and projects.

-	Typing Indicators: Know when someone is actively typing in a conversation.

-	Smart Notifications: Get alerts for new messages, mentions, and updates.

-	Group Chats: Create project-specific channels for focused communication.

-	Direct Messages: One-on-one communication with team members.

-	User Presence: See who’s online, offline, or away.

-	Responsive UI: Works smoothly across devices for convenient team collaboration.

## Authentication and Security

- JWT-based Authentication: Secure login system using JSON Web Tokens.

- Role-Based Access Control: Control over admin and standard user permissions.

- Protected Routes: Only authenticated users can access the chat interface.

# Technology Stack

## 🚀 Frontend

![React](https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=white&style=for-the-badge)
![TailwindCSS](https://img.shields.io/badge/-TailwindCSS-38B2AC?logo=tailwind-css&logoColor=white&style=for-the-badge)
![Axios](https://img.shields.io/badge/-Axios-5A29E4?logo=axios&logoColor=white&style=for-the-badge)
![Context API](https://img.shields.io/badge/-Context%20API-764ABC?logo=react&logoColor=white&style=for-the-badge)

> Built with **React** for component-based architecture, **Tailwind CSS** for rapid UI development, **Axios** for HTTP requests, and **Context API** for state management.


## 🛠️ Backend

![Node.js](https://img.shields.io/badge/-Node.js-339933?logo=node.js&logoColor=white&style=for-the-badge)
![Express.js](https://img.shields.io/badge/-Express.js-000000?logo=express&logoColor=white&style=for-the-badge)

> Powered by **Node.js** and **Express.js**, delivering a robust RESTful API and real-time functionality.


## 💾 Database

![MongoDB](https://img.shields.io/badge/-MongoDB-47A248?logo=mongodb&logoColor=white&style=for-the-badge)
![Mongoose](https://img.shields.io/badge/-Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white)

> Uses **MongoDB** for NoSQL document storage and **Mongoose** for elegant data modeling.



## ⚡ Real-Time Communication

![Socket.IO](https://img.shields.io/badge/-Socket.IO-010101?logo=socket.io&logoColor=white&style=for-the-badge)

> Real-time messaging enabled via **Socket.IO** for instant communication.


## 🔐 Authentication

![JWT](https://img.shields.io/badge/-JWT-000000?logo=jsonwebtokens&logoColor=white&style=for-the-badge)
![bcrypt](https://img.shields.io/badge/-bcrypt-00599C?style=for-the-badge&logo=security&logoColor=white)

> Secured with **JWT** for token-based authentication and **bcrypt** for password hashing.


## 🌐 Hosting & Dev Tools

![Netlify](https://img.shields.io/badge/-Netlify-00C7B7?logo=netlify&logoColor=white&style=for-the-badge)
![Render](https://img.shields.io/badge/-Render-46E3B7?logo=render&logoColor=white&style=for-the-badge)
![Git](https://img.shields.io/badge/-Git-F05032?logo=git&logoColor=white&style=for-the-badge)
![Postman](https://img.shields.io/badge/-Postman-FF6C37?logo=postman&logoColor=white&style=for-the-badge)

> **Frontend** deployed on **Netlify**, **Backend** on **Render**, developed with **Git** and tested using **Postman**.

---

# ⚙️ Installation

To run the app locally, follow these steps:

### Clone the repository:
```bash
git clone https://github.com/yourusername/rift-chat.git
cd rift-chat
```

### Setup Frontend:
```bash
cd client
npm install
npm run dev
```

### Setup Backend:
```bash
cd server
npm install
npm run start
```

> Make sure to configure your `.env` file in the `server/` directory with the following:

```ini
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret
CLIENT_URL=http://localhost:5173
```


---

> 💬 *Rift.Chat – Seamless communication for modern teams.*
