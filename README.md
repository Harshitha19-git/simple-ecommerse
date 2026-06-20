# 🛒 Simple E-Commerce Project 💻

A **Full Stack E-Commerce Web Application** built as part of the **CodeAlpha Internship 🚀** using Node.js, Express.js, MongoDB, HTML, CSS, and JavaScript.

This project demonstrates authentication, REST API development, and full frontend-backend integration.

---

## 🌐 Live Links

| Service | URL |
|--------|-----|
| 🎨 Frontend | http://127.0.0.1:5500 |
| ⚙️ Backend API | http://localhost:5000 |
| 🗄️ Database | MongoDB Atlas |

🌍 Note: This project runs locally using Live Server and Node.js backend.

---

## ✨ Features

### 🔐 Authentication System
-  User Registration (Username, Email, Password)
-  User Login System
-  Session stored using LocalStorage
-  Backend validation using Express API

### 🗄️ Database Features
-  MongoDB Atlas cloud database
-  Mongoose schema-based structure
-  User data stored securely in collections

### ⚙️ Backend Features
-  REST API using Express.js
-  Routes for register & login
-  JSON body parsing middleware
-  CORS enabled for frontend communication
-  Environment variables using `.env`

### 🎨 Frontend Features
-  Responsive UI using HTML & CSS
-  Separate Login & Register pages
-  JavaScript form handling
-  Fetch API integration
-  Auto redirect after login/register
-  Success & error alerts

### 🔗 Full Stack Flow
Frontend → Express API → MongoDB → Response → UI Update

---
-  ## 🛠️ Tech Stack

### 🎨 Frontend
| Technology | Purpose |
|------------|--------|
| HTML | Structure of web pages |
| CSS | Styling and UI design |
| JavaScript | Handles user interactions and frontend logic |
| Fetch API | Communicates with backend APIs |

---

### ⚙️ Backend
| Technology | Purpose |
|------------|--------|
| Node.js | Runtime environment for server-side JavaScript |
| Express.js | Handles server, routes, and API creation |
| CORS | Allows communication between frontend and backend |
| dotenv | Manages environment variables |

---

### 🗄️ Database
| Technology | Purpose |
|------------|--------|
| MongoDB | Stores user data in collections |
| Mongoose | Defines schema and interacts with MongoDB |
---

## 📂 Project Structure

```
simple-ecommerse/
│
├── public/
│   ├── login.html
│   ├── register.html
│   ├── js/
│   │   ├── login.js
│   │   └── register.js
│   └── css/
│       └── style.css
│
├── models/
│   └── User.js
│
├── routes/
│   ├── userRoutes.js
│   ├── productRoutes.js
│   └── orderRoutes.js
│
├── server.js
├── .env
├── .gitignore
└── package.json
```

## ⚡ Setup Guide (Run Locally)

### 🧾 Requirements
- Node.js (v18+)
- MongoDB Atlas or local MongoDB
- VS Code
- Live Server extension

---

### 1️⃣ Clone the Project
git clone https://github.com/Harshitha19-git/simple-ecommerse.git  
cd simple-ecommerse  

---

### 2️⃣ Install Dependencies
npm install  

---

### 3️⃣ Environment Variables

Create a `.env` file in root and add:

PORT=5000  
MONGO_URI=mongodb+srv://<your-username>:<your-password>@cluster0.mongodb.net/ecommerse  
JWT_SECRET=your_secret_key  

---

### 4️⃣ Start Backend
node server.js  

Backend runs at:  
http://localhost:5000  

---

### 5️⃣ Run Frontend

Open login.html or register.html using Live Server  

Frontend runs at:  
http://127.0.0.1:5500  

---

## 🔐 API Endpoints

### ➤ Register User
POST `/api/users/register`

Request:
{
  "username": "John",
  "email": "john@example.com",
  "password": "123456"
}

Response:
{
  "_id": "user_id",
  "username": "John",
  "email": "john@example.com"
}

---

### ➤ Login User
POST `/api/users/login`

Request:
{
  "email": "john@example.com",
  "password": "123456"
}

Response:
{
  "success": true,
  "user": {
    "_id": "user_id",
    "username": "John",
    "email": "john@example.com"
  }
}

---

## ⚙️ Environment Variables

PORT=5000  
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/ecommerse  
JWT_SECRET=your_secret_key  

---

## 🌐 Run Project

- 🌍 Frontend → Live Server (127.0.0.1:5500)  
- 🖥️ Backend → http://localhost:5000  

---

## 📌 Notes

- ❌ `.env` is ignored using `.gitignore`
- ❌ `node_modules` is not uploaded
- 🍃 MongoDB Atlas used as database
- 🔗 Fully working authentication system
- ⚡ Frontend + Backend fully connected

---

## 👨‍💻 Developer

👤 Chepuri Harshitha  
🏢 CodeAlpha Internship  
🚀 Full Stack Developer Project  

---

## ⭐ Result

✔ Authentication System  
✔ REST API Development  
✔ MongoDB Integration  
✔ Full Stack Connection  
✔ Real-world Internship Project  

---
⭐ If you found this project helpful, please consider giving it a star!
