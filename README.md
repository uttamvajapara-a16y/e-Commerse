# E-Shopping — E-Commerce Web App

A full stack e-commerce website where users can browse and buy products, and admins can manage products, stock, and view sales reports. Built using the MERN stack.

🔗 **Live Demo:** [e-commerse-jr45.onrender.com](e-commerse-jr45.onrender.com)
🔗 **GitHub:** [@uttamvajapara-a16y](https://github.com/uttamvajapara-a16y)

---

## 📌 What This Project Does

This is a two-sided platform:

- **Users** can register, log in, browse products, place orders, and check their order status.
- **Admins** can add, edit, and delete products, manage stock, and view sales reports (total revenue, monthly revenue, total users, total sales).

Payments are handled through **Razorpay**, so users can actually pay online for their orders

## ✨ Features

### For Users
- Register and login (secured with JWT)
- Browse all available products
- Place an order and pay online using Razorpay
- View their order list and check order status (e.g. placed, shipped, delivered)

### For Admin
- Add new products, edit existing ones, or delete them
- Manage stock quantity for each product
- View total revenue and total sales
- View total number of registered users
- View month-wise revenue breakdown (which month earned how much)

> Only admins can add/edit/delete products — normal users can only view and buy them.
> Seed admin access : Email: admin@eshopping.com | password: password123

## 🛠️ Tech Stack

- **Frontend:** React.js, JavaScript, CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JWT (JSON Web Token)
- **Payments:** Razorpay

## 🔑 How Authentication Works (Simple Explanation)

When a user logs in, the backend checks their email/password and, if correct, creates a **JWT token** and sends it back. This token is stored on the frontend and sent with every future request, so the backend knows who's making the request without asking for the password again.

There are **two types of access**:
- **User token** → can browse products, place orders, see their own orders
- **Admin token** → can additionally add/edit/delete products and view revenue/sales reports

The backend checks the role inside the token before allowing admin-only actions, so a normal user can't access admin routes even if they try to call the API directly.

## 💳 How Payment Works (Simple Explanation)

1. User adds products and proceeds to checkout
2. Backend creates a Razorpay order and sends order details to the frontend
3. Razorpay's payment popup opens, where the user pays using card/UPI/etc.
4. After successful payment, Razorpay sends a confirmation back to the backend
5. Backend verifies the payment and updates the order status (and reduces product stock)

## 📁 Project Structure (Example)

```
e-shopping/
├──server/                # Node + Express backend
│   ├── confige/          # database and photo storage
│   ├── controllers/      # functions for api handling
│   ├── middlewares/      # JWT auth check, admin role check
│   ├── models/           # User, Product, Order schemas
│   ├── routes/           # auth, product, order, admin routes
│   ├── index.js          # entry point
│   └── seed.js           # initial data
├── client/                     # React frontend
│   ├── src/
│   │   ├── components/         # Navbar, ProductCard, OrderCard, etc.
│   │   ├── pages/              # Home, Login, Register, Cart, Admin Dashboard
│   │   └── App.js
```

## 👤 Author

**Uttam Vajapara**
- GitHub: [@uttamvajapara-a16y](https://github.com/uttamvajapara-a16y)

## 📄 License

This project is open source and available for learning purposes.
