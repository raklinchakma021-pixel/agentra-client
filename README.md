# 🤖 Agentra AI – Full Stack Agentic AI Platform

Agentra AI is a modern Full Stack Agentic AI web application built with **Next.js, Express.js, TypeScript, MongoDB, and Groq AI**. The platform combines AI-powered content generation, an AI Knowledge Hub, analytics, and secure authentication into a production-ready application.

Designed with scalability, responsiveness, and clean architecture in mind, Agentra AI demonstrates modern full-stack development practices together with practical AI integration.

---

## 🌐 Live Demo

**Frontend:** https://agentra-client.vercel.app/


---

## 📂 GitHub Repositories

### Frontend
(https://github.com/raklinchakma021-pixel/agentra-client)

### Backend
https://github.com/raklinchakma021-pixel/agentra-server)

---

# ✨ Features

## 🏠 Landing Page

- Modern responsive design
- Sticky navigation
- Interactive Hero Section
- Features Section
- AI Workflow Section
- Statistics Dashboard
- Testimonials
- FAQ
- Newsletter
- Call To Action
- Professional Footer

---

## 🔐 Authentication

- Email & Password Login
- User Registration
- Google Authentication
- JWT Protected Routes
- Demo Login
- Secure Session Management

---

## 🤖 AI Features

### AI Content Generator

Generate high-quality AI content using structured prompts.

Features

- Multiple prompt templates
- Adjustable output length
- Regenerate response
- Copy generated text
- Download generated content
- AI generation history

---

### AI Knowledge Hub

Browse curated AI learning resources.

Features

- Search
- Filter by category
- Sort articles
- Pagination
- Details page
- Related articles

---

## 📚 Knowledge Management

Authenticated users can

- Add Articles
- Manage Articles
- Delete Articles
- View Details

---

## 📊 Analytics Dashboard

Visual statistics using charts.

Includes

- Total Articles
- AI Generations
- Active Users
- Monthly Activity
- Category Distribution

Built using:

- Recharts

---

## 🔎 Explore Page

Supports

- Search
- Category Filter
- Level Filter
- Sorting
- Pagination
- Responsive Grid
- Skeleton Loading

---

## 📄 Details Page

Each article includes

- Featured Image
- Full Description
- Specifications
- Ratings
- Reviews
- Related Articles

---

## 📱 Responsive Design

Fully optimized for

- Desktop
- Tablet
- Mobile

---

# 🛠 Tech Stack

## Frontend

- Next.js
- React
- TypeScript
- Tailwind CSS
- DaisyUI
- TanStack Query
- Axios
- React Hook Form
- React Hot Toast
- Lucide React
- Recharts

---

## Backend

- Node.js
- Express.js
- TypeScript
- MongoDB
- Mongoose
- JWT Authentication
- Better Auth
- Zod Validation

---

## AI

- Groq API
- Llama 3 Model

---

# 📁 Project Structure

## Frontend

```
src/
│
├── app/
├── components/
├── hooks/
├── services/
├── lib/
├── types/
├── providers/
└── utils/
```

---

## Backend

```
src/
│
├── config/
├── middlewares/
├── modules/
│   ├── ai/
│   ├── auth/
│   ├── analytics/
│   ├── items/
│   └── users/
├── utils/
├── app.ts
└── server.ts
```

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/yourusername/agentra-client.git

git clone https://github.com/yourusername/agentra-server.git
```

---

## Frontend Setup

```bash
cd agentra-client

npm install

npm run dev
```

---

## Backend Setup

```bash
cd agentra-server

npm install

npm run dev
```

---

# 🔑 Environment Variables

## Frontend (.env.local)

```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api

NEXT_PUBLIC_GOOGLE_CLIENT_ID=YOUR_GOOGLE_CLIENT_ID
```

---

## Backend (.env)

```env
PORT=5000

NODE_ENV=development

MONGODB_URI=YOUR_MONGODB_URI

JWT_SECRET=YOUR_SECRET_KEY

GROQ_API_KEY=YOUR_GROQ_API_KEY

BETTER_AUTH_SECRET=YOUR_BETTER_AUTH_SECRET

BETTER_AUTH_URL=http://localhost:5000
```

---

# 🚀 API Endpoints

## Authentication

```
POST   /api/auth/register

POST   /api/auth/login

GET    /api/auth/me
```

---

## AI

```
POST   /api/ai/generate

POST   /api/ai/regenerate

GET    /api/ai/history

DELETE /api/ai/history/:id
```

---

## Knowledge

```
GET    /api/items

GET    /api/items/:id

POST   /api/items

DELETE /api/items/:id
```

---

## Analytics

```
GET /api/analytics
```

---

# 📈 Application Workflow

```
User Login
      │
      ▼
Dashboard
      │
      ├───────────────┐
      ▼               ▼

AI Generator      Knowledge Hub
      │               │
      ▼               ▼
Generate AI      Browse Articles
      │               │
      ▼               ▼
History       Details / Manage
      │
      ▼
Analytics
```

---

# 🔒 Security

- JWT Authentication
- Protected Routes
- Password Hashing
- Input Validation
- Environment Variables
- Secure API Design
- Error Handling

---

# 🎯 Assignment Requirements Covered

- Full Stack Application
- TypeScript
- Responsive Design
- Authentication
- Protected Routes
- CRUD Operations
- AI Integration
- Analytics Dashboard
- Search
- Filter
- Pagination
- Sorting
- Loading Skeleton
- Details Page
- Landing Page
- About Page
- Contact Page
- Production Ready Architecture

---

# 📸 Screenshots

## Home

Add screenshot here

---

## AI Generator

Add screenshot here

---

## Knowledge Hub

Add screenshot here

---

## Dashboard

Add screenshot here

---

# 🔮 Future Improvements

- AI Chat Assistant
- Streaming AI Responses
- AI Recommendation Engine
- AI Document Analysis
- AI Image Understanding
- Dark Mode
- Bookmark System
- User Profiles
- Notifications
- Admin Dashboard

---

# 👨‍💻 Author

**Raklin Chakma**

📧 Email: raklinchakma021@gmail.com

📱 Phone: +8801609981948

GitHub: https://github.com/raklinchakma021-pixel

LinkedIn: https://linkedin.com/in/your-linkedin

---

# 📜 License

This project is created for educational purposes and full-stack AI development practice.

---

## ⭐ If you like this project, don't forget to give it a star on GitHub!
