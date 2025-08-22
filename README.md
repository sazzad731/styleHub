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



Install Dependencies
npm install




3. Environment Variables

Create a .env.local file in the root directory and add:

NEXTAUTH_SECRET=your_secret_key
NEXTAUTH_URL=http://localhost:3000
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

# MongoDB URI (if using database)
DB_URI=mongodb+srv://your-db-url
MONGODB_DB=your-db-name



3. Environment Variables

Create a .env.local file in the root directory and add:

NEXTAUTH_SECRET=your_secret_key
NEXTAUTH_URL=http://localhost:3000
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

# MongoDB URI (if using database)
DB_URI=mongodb+srv://your-db-url
MONGODB_DB=your-db-name

4. Run the Development Server
npm run dev


Visit: http://localhost:3000

5. Build & Start for Production
npm run build
npm run start

🛤️ Route Summary
Route	Auth Required	Description
/	❌	Landing page with 4 sections (Navbar, Hero, Highlights, Footer)
/login	❌	Login page using NextAuth (Google/Credentials)
/products	❌	Product list page with name, description, price, and details button
/products/[id]	❌	Product details page
/dashboard/add-product	✅	Protected route with form to add new product




## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
