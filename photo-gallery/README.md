# 📸 Photo Gallery

A modern, responsive photo gallery built with **React + Vite** and **Tailwind CSS**.  
Fetches 100 photos from [JSONPlaceholder](https://jsonplaceholder.typicode.com/photos) and offers search, album filtering, dark mode, and a details modal.

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?logo=tailwindcss&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green)

---

## ✨ Features

- 🖼️ Fetches and displays first **100 photos** via native `fetch()` API
- 🔍 **Search** photos by title
- 📁 **Filter** photos by album
- 🌙 **Dark Mode** with persistent class strategy
- 👁️ **View Details** modal (ESC to close)
- 📱 Fully **responsive** grid layout
- ⚡ Lazy-loaded images with smooth animations
- 🎨 Gradient navbar, hero header, and multi-column footer

---

## 🛠️ Tech Stack

| Tech | Purpose |
|------|---------|
| **React 18** | UI library |
| **Vite** | Build tool & dev server |
| **Tailwind CSS 3** | Styling |
| **Fetch API** | Data fetching (no Axios) |

---

## 🚀 Getting Started

### Prerequisites
- Node.js `>= 18`
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/photo-gallery.git
cd photo-gallery

# Install dependencies
npm install

# Start the dev server
npm run dev