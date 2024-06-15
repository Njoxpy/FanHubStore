# Sports Center Store

Welcome to the Sports Center Store project! This web application allows users to create, manage, and view products related to their favorite sports club.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Contributing](#contributing)

## Features

- View all products in the store
- Display detailed information about a specific product
- Add new products to the store
- Edit product details such as price and quantity
- Delete products from the store

## Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Njoxpy/FanHubStore
   ```

## Technologies Used

- HTML, CSS, JavaScript, Goalang(Backend API - Yet to be implemented)

## Project Structure

```txt
funStoreHub/
│
├── public/
│   ├── index.html
│   └── favicon.ico
│
├── src/
│   ├── assets/
│   │   ├── images/
│   │   └── styles/
│   │       └── global.css
│   │
│   ├── components/
│   │   ├── common/
│   │   │   ├── Button.js
│   │   │   └── Input.js
│   │   ├── layout/
│   │   │   ├── Header.js
│   │   │   ├── Footer.js
│   │   │   └── Sidebar.js
│   │   ├── product/
│   │   │   ├── ProductCard.js
│   │   │   ├── ProductList.js
│   │   │   └── ProductDetails.js
│   │   ├── user/
│   │   │   ├── UserProfile.js
│   │   │   ├── LoginForm.js
│   │   │   └── RegistrationForm.js
│   │   └── admin/
│   │       ├── AdminDashboard.js
│   │       ├── CreateProduct.js
│   │       ├── EditProduct.js
│   │       └── DeleteProductConfirmation.js
│   │
│   ├── pages/
│   │   ├── HomePage.js
│   │   ├── ProductListingPage.js
│   │   ├── ProductDetailsPage.js
│   │   ├── CartPage.js
│   │   ├── CheckoutPage.js
│   │   ├── OrderConfirmationPage.js
│   │   ├── ContactUsPage.js
│   │   ├── AboutUsPage.js
│   │   ├── LoginPage.js
│   │   ├── RegistrationPage.js
│   │   ├── ProfilePage.js
│   │   └── NotFoundPage.js
│   │
│   ├── routes/
│   │   └── AppRoutes.js
│   │
│   ├── context/
│   │   ├── AuthContext.js
│   │   └── ProductContext.js
│   │
│   ├── services/
│   │   ├── api.js
│   │   └── authService.js
│   │
│   ├── utils/
│   │   └── helpers.js
│   │
│   ├── App.js
│   ├── index.js
│   └── reportWebVitals.js
│
├── .gitignore
├── package.json
├── README.md
└── yarn.lock / package-lock.json
```

- `README.md`: Project documentation

## Contributing
