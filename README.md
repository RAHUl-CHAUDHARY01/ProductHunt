
---

```md
# 🚀 Next.js + MySQL (TypeScript) Full-Stack Starter

This is a full-stack boilerplate using Next.js (App Router), TypeScript, and MySQL (with `mysql2`). It includes:

- RESTful API with raw SQL
- Simple user creation and listing
- Environment variable configuration
- Fully typed using TypeScript

---

## 📦 Tech Stack

- Next.js (App Router)
- TypeScript
- MySQL
- mysql2 (for direct DB access)
- ESLint + TailwindCSS (optional)

---

## 📁 Project Structure


my-app/
├── app/
│   ├── api/users/route.ts       → API endpoints (GET, POST)
│   └── page.tsx                 → Home page (with form)
├── lib/db.ts                    → MySQL connection utility
├── types/user.ts                → User type interface
├── sql/init.sql                 → SQL script to create tables
├── .env                         → DB credentials (ignored by git)
├── README.md

````

---

## ⚙️ Getting Started

### 1. Clone the Repository

```bash
git clone git@github.com:RAHUl-CHAUDHARY01/ProductHunt.git
cd ProductHunt
````

---

### 2. Install Dependencies

```bash
npm install
```

---

### 3. Setup the Database

1. Make sure MySQL is running on your system.
2. Create a database manually, e.g., `mydatabase`.
3. Run the provided SQL schema:

```bash
mysql -u root -p mydatabase < ./commands.sql
```

This creates the `users` table.

---

### 5. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🧪 Features

### ✅ GET `/api/users`

* Returns all users from the database.

### ✅ POST `/api/users`

* Accepts JSON `{ name, email }`
* Inserts new user into the `users` table.

---

## 👨‍💻 Example Table Schema (Already in `./commands.sql`)

```sql
CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

## 📝 Notes

* ESLint warns against using `any`. We're using proper types like `ResultSetHeader` from `mysql2`.
* Designed for **development only** – not production-optimized.
* Make sure your MySQL service is running and accessible.

---