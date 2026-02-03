# Hotel Booking System 🏨

A modern, responsive hotel booking application built with React, Vite, and Firebase. Features real Gmail authentication, room booking, and a beautiful UI.

## 🚀 Quick Start

**The app can run immediately with mock authentication!** No Firebase setup required for development.

For production use with real Gmail authentication, follow the Firebase setup instructions below.

## Features

- 🏨 Browse and book hotels in Nepal
- 🔐 Real Gmail authentication with Firebase
- 🛏️ Multiple room types (Deluxe, Luxury Suite)
- 💳 Secure payment processing
- 📱 Responsive design with Tailwind CSS
- 🗺️ Interactive maps
- ⭐ Guest reviews and ratings

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Firebase Configuration

This app uses Firebase Authentication for real Gmail login. Follow these steps:

1. **Create a Firebase Project**
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Create a new project

2. **Enable Authentication**
   - Go to Authentication > Sign-in method
   - Enable "Google" as a sign-in provider
   - Configure OAuth consent screen if prompted

3. **Get Firebase Config**
   - Go to Project Settings > General > Your apps
   - Click "Add app" and select Web app (</>)
   - Copy the config values

4. **Environment Variables**
   - Copy `.env.example` to `.env`
   - Fill in your Firebase config values:

```env
VITE_FIREBASE_API_KEY=your_api_key_here
VITE_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

### 3. Run the Application

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

## Authentication

The app supports:
- **Email/Password registration and login**
- **Google Sign-in** (real Gmail authentication)
- **Automatic session persistence**

## Tech Stack

- **Frontend**: React 19, Vite
- **Styling**: Tailwind CSS
- **Authentication**: Firebase Auth
- **Icons**: Lucide React
- **Routing**: React Router DOM

## Project Structure

```
src/
├── components/     # Reusable UI components
├── context/        # React context providers
├── data/          # Mock data and types
├── pages/         # Page components
├── utils/         # Helper functions
└── firebase.js    # Firebase configuration
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
