<div align="center">
  <br />
    <a href="https://youtu.be/B91wc5dCEBA" target="_blank">
      <img src="https://res.cloudinary.com/dhuydj1lg/image/upload/v1735123285/Group_3-svg_su06qq.svg" alt="Project Banner">
    </a>
  <br />
<br/>

  <div>
    <img src="https://img.shields.io/badge/-Mongoose-black?style=for-the-badge&logoColor=white&logo=mongoose&color=E50000" alt="Mongoose">
    <img src="https://img.shields.io/badge/-Express-black?style=for-the-badge&logoColor=white&logo=express&color=000000" alt="Express">
    <img src="https://img.shields.io/badge/-Node.js-black?style=for-the-badge&logoColor=white&logo=node.js&color=339933" alt="Node.js">
    <img src="https://img.shields.io/badge/-MongoDB-black?style=for-the-badge&logoColor=white&logo=mongodb&color=47A248" alt="MongoDB">
    <img src="https://img.shields.io/badge/-JWT-black?style=for-the-badge&logoColor=white&logo=json-web-tokens&color=FF4F87" alt="JWT">
  </div>

<br />
<br />
<a href="https://tofound.netlify.app" align="start">
    <img width=200" align="start" src="https://res.cloudinary.com/dhuydj1lg/image/upload/v1735124251/Folder_1_jzj86m.svg" alt="To Found">
</a>
    <br />
    <br />
   <div align="center">
</div>
</div>


## <a>🚨 Introduction</a>

This a server for to found project . To Found is a platform where people can post found and lost items. Anyone can search for an item that has been posted, and if someone finds a posted item, they can contact the original poster. <a href="https://tofound.netlify.app">To Found</a>


## ✨ Features

1. All apis protected
2. Code Readable And Strutered
3. User Verification Using JWT
4. Mongoose Schema Models
5. CRUD Operation

## 📦 Main Dependencies

1. cookie-parser (^1.4.7)
2. cors (^2.8.5)
3. dotenv (^16.4.7)
4. express (^4.21.2)
5. jsonwebtoken (^9.0.2)
6. mongoose (^8.9.2)


## Project Diagram

```
root
├── controllers
│   ├── auth.controller.js
│   └── post.controller.js
├── db
│   └── dbConnect.js
├── middlewares
│   ├── VerifyOrigin.js
│   └── VerifyUser.js
├── models
│   ├── post.model.js
│   ├── recover.model.js
│   └── subscribe.model.js
├── node_modules
├── routes
│   └── main.routes.js
├── .env
├── .env.local
├── .gitignore
├── app.server.js
├── package.json
├── package-lock.json
└── README.md
```


## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/programming-hero-web-course2/b10-a10-server-side-StackMastery
cd b10-a10-server-side-StackMastery
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Configure**

Rename the .env.example file to .env and fill all env

```bash
PORT=YOUR_SERVER_PORT
MONGO_DB_URI=YOUR_MONGO_DB_CONNECTION_STRING
JWT_SECRET=YOUR_JWT_SECRET
CORS_ORIGIN=http://localhost:5173
```


**Running the Project**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

