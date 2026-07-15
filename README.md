# 🌐 MediaVerse

MediaVerse is a modern media search web application built with React that allows users to search, explore, and save photos, videos, and GIFs in one place.

## 🔗 Live Demo

🚀 **Live Website:**  https://mediaverse-nine.vercel.app/

## 🚀 Features

- 🔍 Search photos, videos, and GIFs
- 📷 Explore high-quality photos
- 🎥 Search and browse videos
- 🎞️ Discover GIFs
- ❤️ Save media to a personal collection
- 💾 Collection data stored using Local Storage
- ⚡ Fast and responsive user interface
- 📱 Responsive design

## 🛠️ Tech Stack

- React.js
- Vite
- Redux Toolkit
- React Redux
- React Router DOM
- Tailwind CSS
- Axios
- React Toastify

## 🌍 APIs Used

MediaVerse uses the following APIs:

- Unsplash API — Photo search
- Pexels API — Video search


## 📁 Project Structure

```text
MediaVerse/
├── public/
├── src/
│   ├── api/
│   │   └── MediaApi.js
│   ├── assets/
│   ├── components/
│   │   ├── CollectionCard.jsx
│   │   ├── NavBar.jsx
│   │   ├── ResultCard.jsx
│   │   ├── ResultGrid.jsx
│   │   ├── SearchBar.jsx
│   │   └── Tabs.jsx
│   ├── pages/
│   │   ├── CollectionPage.jsx
│   │   └── Home.jsx
│   ├── redux/
│   │   ├── features/
│   │   │   ├── collectionSlice.js
│   │   │   └── searchSlice.js
│   │   └── store.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .env.example
├── .gitignore
├── package.json
└── vite.config.js
