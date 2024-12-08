const mysql = require('mysql2');
require('dotenv').config()
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});



// Connect to the database
db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err, usr);
    return;
  }
  else{
  console.log('Connected to the database Successfully.');
  }
});

module.exports= db