const mysql = require('mysql');
const mysqlConfig = require('./config.js');

const connection = mysql.createConnection(mysqlConfig);
connection.connect((err)=>{
  if(!err)
  console.log('Database is connected')
  else
  console.log('Not connected')
})
 
const getAllUsers = function() {
  return new Promise((resolve, reject) => {
    const sql = "SELECT * FROM users"
    connection.query(sql, (err,data)=>{
      if(err)
      reject(err);
      else
      resolve(data)
    })
  })
};

const getAllProviders = function() {
    return new Promise((resolve, reject) => {
      const sql = "SELECT * FROM provider"
      connection.query(sql, (err,data)=>{
        if(err)
        reject(err);
        else
        resolve(data)
      })
    })
  };


  const selectUser= function(id){
    return new Promise((resolve, reject) =>{
      const sql ="SELECT * FROM  users WHERE id = ?"
      connection.query(sql, (err, data) =>{
        if(err)
        reject(err);
        else resolve(data)
      })
    })
  };


const addUser = function(user){
  return new Promise((resolve, reject) =>{
    const sql = "INSERT INTO users (firstName,lastName,address,zipCode,city,phone,username,email,password) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)"
    connection.query(sql,[user.firstName,user.lastName,user.address,user.zipCode,user.city,user.phone,user.username,user.email,user.password],(err,data) =>{
      if(err)
      reject(err)
      else
       resolve (data)
    })
  })
}

const getProviderById = function (id){
  return new Promise((resolve, reject) =>{
    const sql = "SELECT * FROM provider WHERE id = ? "
    connection.query(sql,[id],(err,data) =>{
      if(err){
        reject(err)
      }
      resolve(data)
    })
  })
}

const getAllFlowers = function() {
  return new Promise((resolve, reject) => {
    const sql = "SELECT * FROM flowers"
    connection.query(sql, (err,data)=>{
      if(err)
      reject(err);
      else
      resolve(data)
    })
  })
};

const selectFlower= function(id){
  return new Promise((resolve, reject) =>{
    const sql ="SELECT * FROM  flowers WHERE id = ?"
    connection.query(sql,[id], (err, data) =>{
      if(err)
      reject(err);
      else resolve(data)
    })
  })
};

const addFlower = function (name,imageUrl,description,flowers_id,provider_id){
  return new Promise((resolve, reject) =>{
    const sql = "INSERT INTO flowers (name,imageUrl,description,flowers_id,provider_id) VALUES (?, ?, ?, ?, ?)"
    connection.query(sql,[name,imageUrl,description,flowers_id,provider_id],(err,data) =>{
      if(err){
        reject(err)
      }
      resolve(data)
    })
  })
}

const getAllCakes = function() {
  return new Promise((resolve, reject) => {
    const sql = "SELECT * FROM cakes"
    connection.query(sql, (err,data)=>{
      if(err)
      reject(err);
      else
      resolve(data)
    })
  })
}

const selectCake= function(id){
  return new Promise((resolve, reject) =>{
    const sql ="SELECT * FROM  cakes WHERE id = ?"
    connection.query(sql,[id] ,(err, data) =>{
      if(err)
      reject(err);
      else resolve(data)
    })
  })
};


const addCake = function (name,imageUrl,description,cakes_id,provider_id){
  return new Promise((resolve, reject) =>{
    const sql = "INSERT INTO cakes (name,imageUrl,description,cakes_id,provider_id) VALUES (?, ?, ?, ?, ?)"
    connection.query(sql,[name,imageUrl,description,cakes_id,provider_id],(err,data) =>{
      if(err){
        reject(err)
      }
      resolve(data)
    })
  })
}


const getAllMusic = function() {
  return new Promise((resolve, reject) => {
    const sql = "SELECT * FROM music"
    connection.query(sql, (err,data)=>{
      if(err)
      reject(err);
      else
      resolve(data)
    })
  })
}

const selectMusic= function(id){
  return new Promise((resolve, reject) =>{
    const sql ="SELECT * FROM  music WHERE id = ?"
    connection.query(sql,[id] ,(err, data) =>{
      if(err)
      reject(err);
      else resolve(data)
    })
  })
};

const addMusic = function (name,imageUrl,description,music_id,provider_id){
  return new Promise((resolve, reject) =>{
    const sql = "INSERT INTO music (name,imageUrl,description,music_id,provider_id) VALUES (?, ?, ?, ?, ?)"
    connection.query(sql,[name,imageUrl,description,music_id,provider_id],(err,data) =>{
      if(err){
        reject(err)
      }
      resolve(data)
    })
  })
}

const getAllhalls = function() {
  return new Promise((resolve, reject) => {
    const sql = "SELECT * FROM hall"
    connection.query(sql, (err,data)=>{
      if(err)
      reject(err);
      else
      resolve(data)
    })
  })
}

const selectHall= function(id){
  return new Promise((resolve, reject) =>{
    const sql ="SELECT * FROM  hall WHERE id = ?"
    connection.query(sql,[id] ,(err, data) =>{
      if(err)
      reject(err);
      else resolve(data)
    })
  })
};

const addHall = function (name,imageUrl,description,cakes_id,provider_id){
  return new Promise((resolve, reject) =>{
    const sql = "INSERT INTO hall (name,imageUrl,description,hall_id,provider_id) VALUES (?, ?, ?, ?, ?)"
    connection.query(sql,[name,imageUrl,description,cakes_id,provider_id],(err,data) =>{
      if(err){
        reject(err)
      }
      resolve(data)
    })
  })
}

const getAllPackages = function() {
  return new Promise((resolve, reject) => {
    const sql = "SELECT * FROM packages"
    connection.query(sql, (err,data)=>{
      if(err)
      reject(err);
      else
      resolve(data)
    })
  })
}

const selectPackage= function(id){
  return new Promise((resolve, reject) =>{
    const sql ="SELECT * FROM  packages WHERE id = ?"
    connection.query(sql,[id],(err, data) =>{
      if(err)
      reject(err);
      else resolve(data)
    })
  })
};

const deletePackageById = function (id){
  return new Promise((resolve, reject) =>{
    const sql = "DELETE FROM packages WHERE id = ? "
    connection.query(sql,[id],(err,data)=>{
      if(err)
     reject(err)
     else
      resolve (data)
    })
  })
}


const addPackage = function (hall_id,flowers_id,cakes_id,music_id,name, description, price, imageUrl, id){
  return new Promise((resolve, reject) =>{
    const sql = "INSERT INTO packages (hall_id,flowers_id,cakes_id,music_id,name, description, price, imageUrl, id) VALUES (?, ?, ?, ?, ? , ? , ? , ?)"
    connection.query(sql,[hall_id,flowers_id,cakes_id,music_id,name, description, price, imageUrl, id],(err,data) =>{
      if(err){
        reject(err)
      }
      resolve(data)
    })
  })
}




module.exports = {
    getAllUsers,
    getAllProviders,
    selectUser,
    addUser,
    getProviderById,
    getAllFlowers,
    selectFlower,
    addFlower,
    getAllCakes,
    selectCake,
    addCake,
    getAllMusic,
    selectMusic,
    addMusic,
    getAllhalls,
    selectHall,
    addHall,
    getAllPackages,
    selectPackage,
    deletePackageById,
    addPackage,
    };