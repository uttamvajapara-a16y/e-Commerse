const dotenv = require('dotenv') ;
dotenv.config() ;

const express = require('express') ;
const path = require('path') ;
const fs = require('fs') ;
const cors = require('cors') ;
const connectDB = require('./config/db') ;

connectDB() ;

const app = express() ;
app.use(cors(
    {
        origin:["http://localhost:5173" , "http://127.0.0.1:5173" , process.env.FRONTEND_URL],
        credentials:true
    }
)) ;
app.use(express.json()) ;
app.use(express.urlencoded({extended:true})) ;

app.use('/api/auth', require('./routes/authRoutes')) ;
app.use('/api/products', require('./routes/productRoutes'));
app.use('/api/orders', require('./routes/orderRoutes'));
app.use('/api/payment', require('./routes/paymentRoutes'));
app.use('/api/analytics', require('./routes/analyticsRoutes'));

if (process.env.NODE_ENV === 'production') {
  const possibleFrontendPaths = [
    path.join(__dirname, '../frontend/build'),
    path.join(__dirname, '../frontend/dist')
  ];

  const frontendStaticPath = possibleFrontendPaths.find((candidatePath) => fs.existsSync(candidatePath));

  if (frontendStaticPath) {
    app.use(express.static(frontendStaticPath));

    app.get('*', (req, res) => {
      res.sendFile(path.join(frontendStaticPath, 'index.html'));
    });
  } else {
    app.get('*', (req, res) => {
      res.status(404).send('Frontend build not found. Please run the frontend build step.');
    });
  }
} else {
  app.get('/', (req, res) => {
    res.send('ShopNest API is running in Development mode...');
  });
}

const PORT = process.env.PORT || 5000 ;
app.listen(PORT, ()=> console.log(`server is running on port ${PORT}`)) ;