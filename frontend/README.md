# MERN Quiz App

🚀 **Live Demo:** [MERN Quiz App](https://mern-quiz-app1.netlify.app/)

This is a **MERN-based Quiz App** that allows users to take quizzes, track their scores, and view their past attempts. The application consists of a **React frontend**, an **Express and MongoDB backend**, and is deployed on **Netlify** and backend server on **render**.

---

## 📌 Features

✅ Fetches quiz questions dynamically from the backend  
✅ Multiple-choice and text-based answer support  
✅ Timer functionality (30 seconds per question)  
✅ Tracks previous attempts using **localStorage**  
✅ Displays real-time score updates after quiz submission  
✅ Backend with **Express.js** and **MongoDB** for quiz storage

---

## 🛠 Tech Stack

### **Frontend**

- **React.js** (v19.0.0)
- **React Router** (for navigation)
- **CSS** (for styling)

### **Backend**

- **Node.js** (CommonJS modules)
- **Express.js** (for API handling)
- **MongoDB** (for data storage)
- **Mongoose** (for MongoDB object modeling)
- **Cors & dotenv** (for environment and cross-origin handling)

---

## 📂 Project Structure

### **Frontend** (`frontend/`)

- `src/components/Quiz.js` → Main quiz component
- `src/api/quizService.js` → Fetches quiz data from the backend
- `public/` → Contains static assets
- `src/index.js` → Entry point for React app

### **Backend** (`backend/`)

- `server.js` → Main server file
- `routes/quizRoutes.js` → Handles quiz-related API routes
- `models/Quiz.js` → Mongoose schema for quiz data
- `config/db.js` → MongoDB connection file

---

## 🔧 Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-repo/mern-quiz-app.git
cd mern-quiz-app
npm run dev
```

### 2️⃣ Setup the Backend

```bash
cd backend
npm install
```

Create a `.env` file in the **backend/** directory and add:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

Then, start the backend server:

```bash
npm run dev
```

### 3️⃣ Setup the Frontend

```bash
cd ../frontend
npm install
npm start
```

---

## 📡 API Endpoints

| Method | Endpoint       | Description               |
| ------ | -------------- | ------------------------- |
| GET    | `/api/quizzes` | Fetch all quizzes         |
| POST   | `/api/quizzes` | Create a new quiz (Admin) |

---

## 🎮 How to Play

1. Open the app and start the quiz.
2. Answer each question before the **30-second timer** runs out.
3. Click "Next" to move to the next question.
4. Submit the quiz to see your **final score**.
5. View previous attempts stored in **localStorage**.

---

## 🛠 Deployment

### **Frontend Deployment (Netlify)**

### **Backend Deployment (Render)**

---

## 💡 Future Improvements

- ✅ **User Authentication** (Login & Signup)
- ✅ **Leaderboard System**
- ✅ **More Quiz Categories**

---

## 👨‍💻 Author

Developed by **Roshan Nayak**  
🚀 Feel free to contribute to this project!
