# 🪙 ProjectCrypto
**Status:** In Progress

A full-stack crypto price viewer with smart caching, multi-currency conversion, and Supabase-powered historical tracking. Built with React, Tailwind CSS, Node/Express (or Vercel Functions), and deployed on Vercel.

---

## 🚀 Overview

**ProjectCrypto** fetches live cryptocurrency prices from the Coinlayer API, caches them daily in Supabase, and displays them in a responsive React UI. It supports dynamic conversion to multiple fiat currencies (e.g. PHP, EUR, JPY) using manually stored exchange rates. The app is designed to be API-efficient, scalable, and ideal for learning full-stack workflows.

---

## 🧱 Tech Stack

| Layer        | Technology        | Purpose |
|--------------|-------------------|---------|
| **Frontend** | React             | Component-based UI |
| **Styling**  | Tailwind CSS      | Fast, responsive design |
| **Backend**  | Node + Express or Vercel Functions | REST API logic |
| **Database** | Supabase          | Cloud storage for crypto prices and exchange rates |
| **Deployment** | Vercel          | Free hosting for frontend + backend |

---

## 🧠 Core Features

- 🔄 **Daily crypto price caching** (100+ coins)
- 📅 **2-month historical retention** for graphing and lookup
- 💱 **Manual multi-currency conversion** (USD → PHP, EUR, etc.)
- ⚡ **Dynamic frontend rendering** with React + Tailwind
- ☁️ **Supabase integration** for scalable data storage
- 🌐 **Vercel deployment** for fast, global access

---

## 🧩 Data Strategy

### 🔹 Crypto Prices
- Fetched once per day via `/live` endpoint
- Stored in Supabase with `symbol`, `price`, and `date`
- Retained for 60 days for historical access and graphing
- Deleted via cleanup script or cron job
