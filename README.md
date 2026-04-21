<img width="1366" height="644" alt="image" src="https://github.com/user-attachments/assets/a3ade7c9-51f9-45aa-bc9c-394066929746" />

🍔 Foodlie – MERN Food Delivery Website

Foodlie is a full-stack food delivery web application built using the MERN stack. It allows users to explore restaurants, order food online, and track their orders with a seamless and responsive user experience.

🚀 Features
🛒 Browse restaurants and food items
🔍 Search and filter meals
🧾 Add to cart & manage orders
💳 Secure online payment integration
👤 User authentication (JWT-based login/signup)
📦 Order tracking system
🛠️ Admin dashboard for managing users, food items & orders
⚡ Responsive UI for mobile and desktop
🛠️ Tech Stack

Frontend:

React.js
Redux (or Context API)
HTML5, CSS3, JavaScript

Backend:

Node.js
Express.js

Database:

MongoDB

Other Tools:

JWT
Stripe / Razorpay
📂 Project Structure
Foodlie/
│── client/                # React frontend
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── redux/
│   │   └── App.js
│
│── server/                # Node + Express backend
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── server.js
│
│── .env
│── package.json
⚙️ Installation & Setup
1️⃣ Clone the repository
git clone https://github.com/your-username/foodlie.git
cd foodlie
2️⃣ Install dependencies

Frontend:

cd client
npm install

Backend:

cd server
npm install
3️⃣ Setup Environment Variables

Create a .env file in the server folder:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
STRIPE_KEY=your_payment_key
4️⃣ Run the application

Backend:

cd server
npm run server

Frontend:

cd client
npm start
🌐 Open in Browser
http://localhost:3000
🔐 Authentication Flow
Users register/login
Passwords are hashed using bcrypt
JWT tokens are generated and stored
Protected routes require authentication
📸 Screenshots
🏠 Home Page
🍽️ Food Listings
🛒 Cart Page
💳 Checkout
🛠️ Admin Dashboard

url :- https://ais-pre-dcbfx6q2wmqfbxkmcltcsv-669348230654.asia-southeast1.run.app/

(Add images here)

📌 Future Enhancements
📍 Live order tracking with maps
🤖 AI-based food recommendations
📱 Progressive Web App (PWA) support
🌍 Multi-language support
🔔 Push notifications
🤝 Contributing

Pull requests are welcome. For major changes, open an issue first to discuss what you’d like to change.

📄 License

This project is licensed under the MIT License.

👨‍💻 Author

Aditya Kumar

