# 🏋️ Workout Buddy

**Workout Buddy** is a full-stack **MERN** application designed to help users track their fitness routines. It allows users to log workouts, monitor progress, and securely manage their data through a clean, responsive interface.

---

## 🚀 Features

* **User Authentication**: Secure login and signup using **JSON Web Tokens (JWT)**
* **CRUD Functionality**: Create, Read, Update, and Delete workout entries
* **Global State Management**: Uses **React Context API** to keep UI and database in sync
* **Secure Backend**: Password hashing with **bcrypt** and protected API routes
* **Responsive UI**: Modern design using **Google Material Symbols** and custom CSS

---

## 🛠️ Tech Stack

### Frontend

* React.js

### Backend

* Node.js
* Express.js

### Database

* MongoDB (via Mongoose)

### Authentication

* JWT (JSON Web Tokens)

### Utilities

* date-fns (Date handling)

---

## 📁 Project Structure

```
WorkoutBuddy/
├── backend/            # Express server & API logic
│   ├── controllers/    # Request handlers
│   ├── models/         # Mongoose schemas
│   ├── routes/         # API endpoint definitions
│   └── server.js       # Main entry point
├── frontend/           # React application
│   ├── src/
│   │   ├── components/ # UI parts (Navbar, WorkoutDetails, etc.)
│   │   ├── context/    # Auth and Workout Contexts
│   │   ├── hooks/      # Custom logic hooks
│   │   └── pages/      # Home, Login, Signup pages
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/comradevijay/WorkoutBuddy.git
cd WorkoutBuddy
```

---

### 2️⃣ Backend Configuration

Navigate to the backend folder:

```bash
cd backend
npm install
```

Create a `.env` file in the `backend` folder and add the following:

```env
PORT=4000
MONGO_URI=your_mongodb_connection_string
SECRET=your_jwt_secret_key
```

Start the backend server:

```bash
npm run dev
```

---

### 3️⃣ Frontend Configuration

Open a new terminal and navigate to the frontend folder:

```bash
cd frontend
npm install
```

Start the React application:

```bash
npm start
```

---

## 📡 API Endpoints

| Method | Endpoint            | Description                     |
| ------ | ------------------- | ------------------------------- |
| POST   | `/api/user/signup`  | Register a new user             |
| POST   | `/api/user/login`   | Authenticate user & get token   |
| GET    | `/api/workouts`     | Fetch all workouts for the user |
| POST   | `/api/workouts`     | Add a new workout               |
| DELETE | `/api/workouts/:id` | Remove a specific workout       |

---

✅ **Workout Buddy** provides a secure, scalable, and user-friendly platform for fitness tracking using modern full-stack web technologies.
