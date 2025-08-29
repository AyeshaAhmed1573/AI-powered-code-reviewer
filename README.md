# 🤖 AI-Powered Code Reviewer

A modern, full-stack web application that leverages Google's Gemini AI to provide intelligent code reviews. Built with React frontend and Node.js backend, this tool helps developers improve code quality through AI-powered analysis and suggestions.

## ✨ Features

- **AI-Powered Code Analysis**: Uses Google Gemini 2.5 Flash model for intelligent code review
- **Real-time Code Editor**: Syntax-highlighted code editor with support for multiple languages
- **Instant Feedback**: Get comprehensive code reviews in seconds
- **Modern UI**: Clean, responsive interface built with Tailwind CSS
- **Markdown Support**: Rich formatting for review results
- **Cross-platform**: Works on any device with a modern web browser

## 🚀 Tech Stack

### Frontend
- **React 19** - Modern React with latest features
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Prism.js** - Syntax highlighting
- **Axios** - HTTP client for API calls
- **React Markdown** - Markdown rendering

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **Google Gemini AI** - AI-powered code analysis
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

## 📋 Prerequisites

Before running this project, make sure you have:

- **Node.js** (v18 or higher)
- **npm** or **yarn** package manager
- **Google Gemini API Key** - Get one from [Google AI Studio](https://makersuite.google.com/app/apikey)

## 🛠️ Installation

### 1. Clone the Repository
```bash
git clone <your-repository-url>
cd ai-powered-code-reviewer
```

### 2. Backend Setup
```bash
cd backend
npm install
```

Create a `.env` file in the backend directory:
```env
GEMINI_API_KEY=your_google_gemini_api_key_here
```

### 3. Frontend Setup
```bash
cd ../frontend
npm install
```

## 🚀 Running the Application

### Start the Backend Server
```bash
cd backend
npm start
```
The backend will run on `http://localhost:3000`

### Start the Frontend Development Server
```bash
cd frontend
npm run dev
```
The frontend will run on `http://localhost:5173`

## 💻 Usage

1. **Open the Application**: Navigate to `http://localhost:5173` in your browser
2. **Write or Paste Code**: Use the code editor on the left side to input your code
3. **Get AI Review**: Click the "Review" button to analyze your code
4. **Review Results**: View the AI-generated feedback on the right panel

## 🔧 API Endpoints

- `POST /ai/get_response` - Submit code for AI review
  - Request body: `{ "code": "your_code_here" }`
  - Returns: AI-generated code review in markdown format

## 🎯 How It Works

1. **Code Input**: Users write or paste code in the syntax-highlighted editor
2. **AI Processing**: Code is sent to Google Gemini AI with specialized prompts for code review
3. **Analysis**: AI analyzes the code for:
   - Code quality and best practices
   - Performance optimizations
   - Security vulnerabilities
   - Maintainability improvements
   - Modern coding patterns
4. **Results**: Comprehensive review is returned and displayed in markdown format

## 🎨 Customization

### AI Review Prompts
Modify the system instruction in `backend/services/Ai.services.js` to customize the AI's review behavior and focus areas.

### UI Styling
The frontend uses Tailwind CSS for styling. Modify `frontend/src/App.css` and Tailwind classes for custom styling.

## 📁 Project Structure

```
ai-powered-code-reviewer/
├── frontend/                 # React frontend application
│   ├── src/
│   │   ├── App.jsx         # Main application component
│   │   ├── App.css         # Application styles
│   │   └── main.jsx        # Application entry point
│   ├── package.json        # Frontend dependencies
│   └── vite.config.js      # Vite configuration
├── backend/                 # Node.js backend application
│   ├── controllers/        # Request handlers
│   ├── routers/           # API route definitions
│   ├── services/          # Business logic and AI integration
│   ├── app.js            # Express application setup
│   ├── server.js         # Server entry point
│   └── package.json      # Backend dependencies
└── README.md              # This file
```

