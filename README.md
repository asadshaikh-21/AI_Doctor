# 🚀 React + Vite Starter Template

This project is a minimal setup to get **React** working with **Vite**, featuring Hot Module Replacement (HMR) and basic ESLint configuration.

---

## 📌 Features

* ⚡ Fast development with Vite
* 🔥 Hot Module Replacement (HMR)
* 🧹 Pre-configured ESLint rules
* 📦 Lightweight and minimal setup

---

## 🛠️ Tech Stack

* React
* Vite
* JavaScript (ES6+)
* ESLint

---

## 📂 Project Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

---

### 2️⃣ Install dependencies

```bash
npm install
```

---

### 3️⃣ Run development server

```bash
npm run dev
```

App will run at:

```
http://localhost:5173/
```

---

## 📦 Build for Production

```bash
npm run build
```

---

## 🔍 Preview Production Build

```bash
npm run preview
```

---

## ⚙️ Available Plugins

This project supports two official Vite React plugins:

* `@vitejs/plugin-react` (uses Oxc)
* `@vitejs/plugin-react-swc` (uses SWC)

---

## ⚡ React Compiler

The React Compiler is not enabled by default due to performance considerations.

To enable it, refer to the official React documentation.

---

## 🧹 ESLint Configuration

Basic ESLint rules are included.

For production-grade apps, it is recommended to:

* Use TypeScript
* Enable type-aware linting

You can check the TypeScript template for integration details.

---

## 🌱 Environment Variables

Create a `.env` file in the root directory:

```
VITE_API_BASE_URL=http://localhost:5000
```

⚠️ Do not commit `.env` files. Use `.env.example` for reference.

---

## 📁 Recommended Structure

```
src/
 ├── components/
 ├── pages/
 ├── assets/
 ├── App.jsx
 └── main.jsx
```

---

## 🤝 Contributing

Contributions are welcome! Feel free to fork this repo and submit a pull request.

---

## 📄 License

This project is licensed under the MIT License.

---

## ⭐ Acknowledgements

* React
* Vite
