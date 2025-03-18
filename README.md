# Redux Cart Web Application

A modern e-commerce shopping cart application built with React, Redux Toolkit, and Vite, demonstrating the effective use of Redux state management with multiple slices.

## Features

-  **Product Management**

   -  Display products with details (name, price, image, description)
   -  Filter products by category
   -  Sort products by price and name
   -  Search functionality

-  **Shopping Cart**

   -  Add/Remove items
   -  Adjust quantities
   -  Calculate subtotal, tax, and total
   -  Persist cart data in localStorage

-  **User Authentication**
   -  User registration and login
   -  Protected routes for checkout
   -  User profile management

## Tech Stack

-  React 18
-  Redux Toolkit (for state management)
-  React Router v6 (for routing)
-  Vite (for build tooling)
-  Tailwind CSS (for styling)

## Redux Slices

The application demonstrates the use of multiple Redux slices for better state management:

1. **Cart Slice** (`/src/store/slices/cartSlice.js`)

   -  Manages shopping cart state
   -  Handles add/remove/update cart items
   -  Calculates totals

2. **Product Slice** (`/src/store/slices/productSlice.js`)

   -  Manages product catalog
   -  Handles product filtering and sorting
   -  Manages product loading states

3. **Auth Slice** (`/src/store/slices/authSlice.js`)
   -  Manages user authentication state
   -  Handles login/logout
   -  Stores user information

## Getting Started

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd redux-cart
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open http://localhost:5173 in your browser

## Project Structure

```
redux-cart/
├── src/
│   ├── components/         # Reusable UI components
│   ├── pages/             # Page components
│   ├── store/
│   │   ├── slices/        # Redux slices
│   │   └── store.js       # Redux store configuration
│   ├── hooks/             # Custom hooks
│   ├── utils/             # Utility functions
│   └── App.jsx           # Main application component
├── public/                # Static assets
└── index.html            # Entry point
```

## Key Concepts Demonstrated

-  Redux Toolkit configuration and setup
-  Creating and managing multiple slices
-  Async thunks for API calls
-  Selector optimization
-  State persistence
-  Action creators and reducers
-  Redux middleware usage

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
