# OOTDify

![OOTDify](./public/images/ootdify-app.png)

**OOTDify** is a modern AI-powered fashion app that helps you organize your wardrobe, get personalized outfit recommendations, analyze your body type, and chat with your own stylist bot. Designed for GenZ and trend-conscious users, OOTDify makes fashion effortless, fun, and uniquely yours.

## The Problem: Fashion Fatigue for GenZ & Trend-Conscious People

![frustrated-girl](./public/images/frustrated-girl.png)

For GenZ and trend-conscious individuals, fashion is a form of self-expression. But staying stylish comes with its own set of challenges:

- **Decision Fatigue:** Too much time is wasted every day deciding what to wear, especially when trying to match the latest trends or create new looks.
- **Underused Wardrobe:** Many clothes are bought for a vibe or occasion but end up rarely worn, buried in the closet and forgotten.
- **Overwhelming Choices:** With fast fashion and endless options, it’s hard to keep track of what you own and how to style it.
- **Lack of Personalization:** Most apps and advice don’t consider your unique body type, preferences, or the actual clothes you own.

## How OOTDify Solves This

![solution](./public/images/upload-clothes-img.png)

OOTDify is designed to make fashion effortless, fun, and personal:

- **Smart Digital Wardrobe:** Upload and organize all your clothes, so you always know what you have and never forget a piece.
- **AI-Powered Recommendations:** Get daily outfit ideas tailored to your wardrobe, body type, and the latest trends—no more indecision.
- **Body Type Analyzer:** Discover your body shape and get style tips that actually work for you.
- **Virtual Try-On:** Preview outfits before wearing them, reducing regret and boosting confidence.
- **Personal Stylist Chatbot:** Ask for advice, get instant answers, and stay ahead of trends with your own AI stylist.
- **Community & Brands:** Discover new styles, brands, and connect with others who share your fashion passion.


OOTDify is your personal AI-powered fashion stylist and digital wardrobe. It helps users organize their clothes, get daily outfit recommendations, analyze their body type for personalized style tips, and interact with an AI stylist chatbot. Built with Next.js, Prisma, and a modern UI, OOTDify brings the future of fashion to your fingertips.

## Features

### 1. Digital Wardrobe
- Upload photos of your clothes to create a smart, digital closet.
- View, filter, and organize your wardrobe by category (tops, bottoms, outerwear, shoes, accessories).
- Add new items easily and see all your clothes in one place.

### 2. AI-Powered Outfit Recommendations
- Get daily outfit suggestions based on your wardrobe, weather, occasion, and body type.
- See recommended fits with images and simple descriptions.
- Save and shuffle outfit combinations.

### 3. Body Type Analyzer
- Enter your measurements to discover your body type (Hourglass, Pear, Rectangle, etc.).
- Receive personalized clothing recommendations and styling tips tailored to your body shape.

### 4. Virtual Try-On (Beta)
- Preview how outfits might look before getting dressed (experimental feature).

### 5. AI Stylist Chatbot
- Chat with your personal stylist bot for advice on trends, what to wear, and fashion tips.
- Supports markdown, images, and interactive conversation.

### 6. Community & Brands
- Discover trending categories, featured brands, and new arrivals.
- Join the Ootify community to share and explore styles.

### 7. Authentication & User Profiles
- Secure login with Google via NextAuth.
- Personalized experience based on user preferences and wardrobe.

## Tech Stack

- **Frontend:** Next.js, React, Tailwind CSS, Radix UI, Lucide Icons
- **Backend:** Next.js API routes, Express (for AI/chatbot), Prisma ORM, PostgreSQL
- **AI:** Google GenAI, custom recommendation logic
- **Image Uploads:** Cloudinary
- **Authentication:** NextAuth.js

## Folder Structure

- `src/app/` — Main app pages (dashboard, wardrobe, upload, recommendations, chatbot, body-type analyzer)
- `src/components/` — Reusable UI and feature components
- `src/context/` — User context and state management
- `prisma/` — Database schema and migrations
- `public/` — Static assets and images
- `test-outfits/` — Sample outfit images for testing

## Getting Started

1. **Install dependencies:**
	```bash
	npm install
	```
2. **Set up environment variables:**
	- Create a `.env` file with your database and API keys (see `prisma/schema.prisma` for DB setup).
3. **Run database migrations:**
	```bash
	npx prisma migrate dev
	```
4. **Start the development server:**
	```bash
	npm run dev
	```

## API Endpoints

- `/api/add-clothes` — Upload new clothing items
- `/api/recommend-clothes` — Get outfit recommendations
- `/api/ai-chat-bot` — Chatbot endpoint
- `/api/view-clothes` — View wardrobe items
- `/api/preferences` — Save user preferences
- `/api/auth/[...nextauth]` — Authentication
