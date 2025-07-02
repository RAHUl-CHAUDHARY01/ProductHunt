Here's a complete and clean `README.md` for your **Next.js + MySQL (without Prisma)** project using **TypeScript** and **App Router**.

You can place this at the root of your project as `README.md`:

---

```md
# 🚀 Next.js + MySQL (TypeScript) Full-Stack Starter

This is a full-stack boilerplate using **Next.js (App Router)**, **TypeScript**, and **MySQL (with `mysql2`)** without Prisma. It includes:

- RESTful API with raw SQL
- Simple user creation and listing
- Environment variable configuration
- Fully typed using TypeScript

---

## 📦 Tech Stack

- **Next.js (App Router)**
- **TypeScript**
- **MySQL**
- **mysql2** (for direct DB access)
- **ESLint** + **TailwindCSS** (optional)

---

## 📁 Project Structure

```bash

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
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
````

---

### 2. Install Dependencies

```bash
npm install
```

---

### 3. Setup the Database

1. Make sure **MySQL is running** on your system.
2. Create a database manually, e.g., `mydatabase`.
3. Run the provided SQL schema:

```bash
mysql -u root -p mydatabase < sql/init.sql
```

This creates the `users` table.

---

### 4. Configure Environment Variables

Create a `.env` file at the root:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=mydatabase
```

> 💡 Make sure to replace with your local MySQL credentials.

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

## 👨‍💻 Example Table Schema (Already in `sql/init.sql`)

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