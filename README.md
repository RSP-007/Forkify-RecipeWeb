# 🍽️ Forkify

A modern recipe search web application built with **JavaScript (ES6+)**, following the **MVC architecture**. Users can search for recipes, view cooking instructions, adjust servings, bookmark favorite recipes, and upload their own recipes.

> Built as part of Jonas Schmedtmann's Complete JavaScript Course.

---

## 🚀 Features

- 🔍 Search over 1,000,000+ recipes
- 📖 View detailed recipe information
- 👨‍🍳 Step-by-step cooking instructions
- ➕ Upload your own recipes
- ❤️ Bookmark favorite recipes
- 🍽️ Increase or decrease servings
- 📄 Pagination for search results
- ⚡ Fast loading with Parcel bundler
- 📱 Fully responsive design

---

## 🛠️ Tech Stack

### Frontend

- HTML5
- SCSS
- JavaScript (ES6+)

### Tools

- Parcel
- Babel
- npm

### API

- Forkify API

---

## 📂 Project Structure

```
starter/
│
├── dist/
├── src/
│   ├── img/
│   ├── js/
│   │   ├── views/
│   │   ├── config.js
│   │   ├── controller.js
│   │   ├── helper.js
│   │   └── model.js
│   └── sass/
│
├── index.html
├── package.json
└── README.md
```

---

## ⚙️ Installation

Clone the repository

```bash
git clone https://github.com/your-username/forkify.git
```

Navigate into the project

```bash
cd forkify
```

Install dependencies

```bash
npm install
```

Start the development server

```bash
npm run start
```

Build for production

```bash
npm run build
```

---

## 🧩 Application Features

### Search Recipes

Search recipes using keywords like:

- Pizza
- Burger
- Pasta
- Chicken
- Cake

### Recipe Details

Each recipe displays:

- Cooking time
- Servings
- Ingredients
- Publisher
- Source link

### Servings

Users can increase or decrease servings and ingredient quantities update automatically.

### Bookmarks

Recipes can be bookmarked and remain available after refreshing the page using Local Storage.

### Upload Recipes

Users can upload their own recipes, which are immediately available in the application.

---

## 🏗️ Architecture

The application follows the **MVC (Model-View-Controller)** pattern.

### Model

Responsible for:

- Fetching API data
- Managing application state
- Bookmarks
- Search results

### View

Responsible for:

- Rendering UI
- Updating DOM
- Handling user interactions

### Controller

Responsible for:

- Connecting Model and Views
- Handling application logic
- Event management

---

## 📦 Dependencies

- parcel
- regenerator-runtime
- core-js
- @parcel/transformer-sass

---

## 📸 Screenshots

Add screenshots here after deployment.

Example:

```
screenshots/
├── home.png
├── search.png
└── upload.png
```

---

## 🌐 Deployment

The project can be deployed on:

- Netlify
- Vercel
- GitHub Pages

---

## 📚 What I Learned

Through this project I learned:

- Modern JavaScript (ES6+)
- Asynchronous JavaScript
- Fetch API
- Promises
- Async/Await
- MVC Architecture
- Object-Oriented Programming
- Modular JavaScript
- Parcel Bundler
- Local Storage
- Error Handling
- Responsive Web Design

---

## 🙏 Acknowledgements

- Jonas Schmedtmann — Complete JavaScript Course
- Forkify API

---

## 📄 License

This project is for educational purposes.
