import mysql from 'mysql2';

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Mynewmac",
  database: "Myshop"
});

db.connect(function(err) {
    if (err) {
      return console.error('error: ' + err.message);
    }else {
      console.log('connected');
    }

    const createProducts ="CREATE TABLE IF NOT EXISTS products(_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL, name varchar(255) NOT NULL, categories varchar(255) NOT NULL, image TEXT(500) NOT NULL,price INT NOT NULL, count_in_stock INT NOT NULL, brand INT(255) NOT NULL, rating INT NOT NULL, num_reviews INT NOT NULL, description varchar (500))";

    db.query(createProducts, function(err, results, fields) {
        if (err) {
          console.log(err.message);
        }
      });
    
});

db.connect(function(err) {
    if (err) {
      return console.error('error: ' + err.message);
    }
  
    const users ="CREATE TABLE IF NOT EXISTS users1 (_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL, name varchar(255) NOT NULL, email varchar(255) NOT NULL, password varchar(45))";
  
    db.query(users, function(err, results, fields) {
      if (err) {
        console.log(err.message);
      }
    });
  
  });

  db.connect(function(err) {
    if (err) {
      return console.error('error: ' + err.message);
    }
  const createAdmins ="CREATE TABLE IF NOT EXISTS admin(_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL, name varchar(255) NOT NULL, email varchar(255) NOT NULL, password varchar(45))";

    db.query(createAdmins, function(err, results, fields) {
        if (err) {
          console.log('error:'+ err.message);
        }
      });
    
      });

export default db;