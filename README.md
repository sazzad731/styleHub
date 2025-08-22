# 🛒 Next.js 15 Product Management App

A simple full-stack application built with **Next.js 15 (App Router)** and **NextAuth.js**.  
The app allows users to browse products, view product details, and manage products (add new ones) with authentication.

---

## 🚀 Features
- Landing page with **Navbar, Hero, Product Highlights, Footer**  
- Authentication using **NextAuth.js** (Google or Credentials login)  
- **Public pages**: Landing, Product list, Product details  
- **Protected page**: Add Product (only for logged-in users)  
- Products stored and fetched from a mock backend / MongoDB  
- Responsive UI built with **Tailwind CSS + DaisyUI**  
- Optional: Theme toggle (light/dark), loading spinner, and toast messages  

---

## 📂 Project Setup & Installation  

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/scic11-a10-job-task.git
cd scic11-a10-job-task




3. Environment Variables

##Create a .env.local file in the root directory and add:

NEXTAUTH_SECRET=your_secret_key
NEXTAUTH_URL=http://localhost:3000
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

# MongoDB URI (if using database)
DB_URI=mongodb+srv://your-db-url
MONGODB_DB=your-db-name



3. Environment Variables

## Create a .env.local file in the root directory and add:

NEXTAUTH_SECRET=your_secret_key
NEXTAUTH_URL=http://localhost:3000
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

# MongoDB URI (if using database)
DB_URI=mongodb+srv://your-db-url
MONGODB_DB=your-db-name