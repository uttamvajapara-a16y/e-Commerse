const dotenv = require('dotenv') ;
dotenv.config() ;

const express = require('express') ;
const path = require('path') ;
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

app.use(express.static(path.join(__dirname, '../frontend/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../frontend/dist/index.html'));
});

const PORT = process.env.PORT || 5000 ;
app.listen(PORT, ()=> console.log(`server is running on port ${PORT}`)) ;