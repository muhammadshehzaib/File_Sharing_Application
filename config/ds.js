require('dotenv').config();
const mongoose = require('mongoose');
mongoose.set("strictQuery", false);

function connectDB() {
    // Database connection 
    mongoose.connect(process.env.MONGO_CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true });
    const connection = mongoose.connection;
    connection.once('open', () => {
        console.log('Database connected');
    }).on('error', function (err) {
        console.log(err);
      });
}

// mIAY0a6u1ByJsWWZ

module.exports = connectDB;