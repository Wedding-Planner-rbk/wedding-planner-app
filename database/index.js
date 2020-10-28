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

  const selectProviders= function(speciality){
    return new Promise((resolve, reject) =>{
      const sql ="SELECT * FROM  users WHERE speciality = ?"
      connection.query(sql, (err, data) =>{
        if(err)
        reject(err);
        else resolve(data)
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


  const deleteUsersById = function (id){
    return new Promise((resolve, reject) =>{
      const sql = "DELETE FROM users WHERE id = ? "
      connection.query(sql,[id],(err,data)=>{
        if(err)
       reject(err)
       else
        resolve (data)
      })
    })
  }
  
  const deleteProvidereById = function (id){
  return new Promise((resolve, reject) =>{
    const sql = "DELETE FROM provider WHERE id = ? "
    connection.query(sql,[id],(err,data)=>{
      if(err)
     reject(err)
     else
      resolve (data)
    })
  })
}


const deleteAllProvider = function (){
  return new Promise((resolve, reject) =>{
    const sql = "DELETE FROM provider WHERE id <> 0 "
    connection.query(sql,(err,data)=>{
      if(err)
     reject(err)
     else
      resolve (data)
    })
  })
}

const addUser = function(firstName,lastName,address,zipCode,city,phone,username,email,password){
  return new Promise((resolve, reject) =>{
    const sql = "INSERT INTO users (firstName,lastName,address,zipCode,city,phone,username,email,password) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)"
    connection.query(sql,[firstName,lastName,address,zipCode,city,phone,username,email,password],(err,data) =>{
      if(err)
      reject(err)
      else
       resolve (data)
    })
  })
}


const addProvider = function (firstName,speciality,username,email,password,provider_id){
  return new Promise((resolve, reject) =>{
    const sql = "INSERT INTO provider (userId,title,ImageUrl,blogs) VALUES (?, ?, ?, ?, ?, ?)"
    connection.query(sql,[firstName,speciality,username,email,password,provider_id],(err,data) =>{
      if(err){
        reject(err)
      }
      resolve(data)
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

const deleteAllUsers = function (){
  return new Promise((resolve, reject) =>{
    const sql = "DELETE FROM users WHERE id <> 0 "
    connection.query(sql,(err,data)=>{
      if(err)
     reject(err)
     else
      resolve (data)
    })
  })
}


const updateProvider = function (firstName,speciality,username,email,password,provider_id,id){
  return new Promise((resolve, reject) =>{
    const sql = "UPDATE provider SET userId = ?,title = ?,ImageUrl = ?,blogs = ? WHERE id =?"
    connection.query(sql,[firstName,speciality,username,email,password,provider_id,id],(err,data) =>{
      if(err){
        reject(err)
      }
      resolve(data)
    })
  })
}


const updateUsers = function(firstName,lastName,address,zipCode,city,phone,username,email,password,id){
  return new Promise((resolve, reject) =>{
    const sql = "UPDATE users SET firstname = ? lastname= ? address = ? zipCode = ? city = ? phone = ? username = ? email = ? password = ? WHERE id = ? "
    connection.query(sql,[firstName,lastName,address,zipCode,city,phone,username,email,password,id],(err,data) => {
      if(err)
      reject (err)
       else
      resolve (data)
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
    connection.query(sql, (err, data) =>{
      if(err)
      reject(err);
      else resolve(data)
    })
  })
};

const deleteFlowerById = function (id){
  return new Promise((resolve, reject) =>{
    const sql = "DELETE FROM flowers WHERE id = ? "
    connection.query(sql,[id],(err,data)=>{
      if(err)
     reject(err)
     else
      resolve (data)
    })
  })
}

const deleteAllFlowers = function (){
  return new Promise((resolve, reject) =>{
    const sql = "DELETE FROM flowers WHERE id <> 0 "
    connection.query(sql,(err,data)=>{
      if(err)
     reject(err)
     else
      resolve (data)
    })
  })
}

const updateFlowers = function(name,imageUrl,description,flowers_id,provider_id,id){
  return new Promise((resolve, reject) =>{
    const sql = "UPDATE flowers SET name = ? imageUrl= ? description = ? flowers_id = ? provider_id = ? WHERE id = ? "
    connection.query(sql,[name,imageUrl,description,flowers_id,provider_id,id],(err,data) => {
      if(err)
      reject (err)
       else
      resolve (data)
    })
  })
}

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
    connection.query(sql, (err, data) =>{
      if(err)
      reject(err);
      else resolve(data)
    })
  })
};

const deleteCakeById = function (id){
  return new Promise((resolve, reject) =>{
    const sql = "DELETE FROM cakes WHERE id = ? "
    connection.query(sql,[id],(err,data)=>{
      if(err)
     reject(err)
     else
      resolve (data)
    })
  })
}

const deleteAllCakes = function (){
  return new Promise((resolve, reject) =>{
    const sql = "DELETE FROM cakes WHERE id <> 0 "
    connection.query(sql,(err,data)=>{
      if(err)
     reject(err)
     else
      resolve (data)
    })
  })
}

const updateCakes = function(name,imageUrl,description,cakes_id,provider_id,id){
  return new Promise((resolve, reject) =>{
    const sql = "UPDATE cakes SET name = ? imageUrl= ? description = ? cakes_id = ? provider_id = ? WHERE id = ? "
    connection.query(sql,[name,imageUrl,description,cakes_id,provider_id,id],(err,data) => {
      if(err)
      reject (err)
       else
      resolve (data)
    })
  })
}

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
    connection.query(sql, (err, data) =>{
      if(err)
      reject(err);
      else resolve(data)
    })
  })
};

const deleteMusicById = function (id){
  return new Promise((resolve, reject) =>{
    const sql = "DELETE FROM music WHERE id = ? "
    connection.query(sql,[id],(err,data)=>{
      if(err)
     reject(err)
     else
      resolve (data)
    })
  })
}

const deleteAllMusic = function (){
  return new Promise((resolve, reject) =>{
    const sql = "DELETE FROM music WHERE id <> 0 "
    connection.query(sql,(err,data)=>{
      if(err)
     reject(err)
     else
      resolve (data)
    })
  })
}

const updateMusic = function(name,imageUrl,description,music_id,provider_id,id){
  return new Promise((resolve, reject) =>{
    const sql = "UPDATE music SET name = ? imageUrl= ? description = ? music_id = ? provider_id = ? WHERE id = ? "
    connection.query(sql,[name,imageUrl,description,music_id,provider_id,id],(err,data) => {
      if(err)
      reject (err)
       else
      resolve (data)
    })
  })
}

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
    connection.query(sql, (err, data) =>{
      if(err)
      reject(err);
      else resolve(data)
    })
  })
};

const deleteHallById = function (id){
  return new Promise((resolve, reject) =>{
    const sql = "DELETE FROM hall WHERE id = ? "
    connection.query(sql,[id],(err,data)=>{
      if(err)
     reject(err)
     else
      resolve (data)
    })
  })
}

const deleteAllHalls = function (){
  return new Promise((resolve, reject) =>{
    const sql = "DELETE FROM hall WHERE id <> 0 "
    connection.query(sql,(err,data)=>{
      if(err)
     reject(err)
     else
      resolve (data)
    })
  })
}

const updateHalls = function(name,imageUrl,description,hall_id,provider_id,id){
  return new Promise((resolve, reject) =>{
    const sql = "UPDATE hall SET name = ? imageUrl= ? description = ? hall_id = ? provider_id = ? WHERE id = ? "
    connection.query(sql,[name,imageUrl,description,hall_id,provider_id,id],(err,data) => {
      if(err)
      reject (err)
       else
      resolve (data)
    })
  })
}

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
    connection.query(sql, (err, data) =>{
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

const deleteAllPackages = function (){
  return new Promise((resolve, reject) =>{
    const sql = "DELETE FROM packages WHERE id <> 0 "
    connection.query(sql,(err,data)=>{
      if(err)
     reject(err)
     else
      resolve (data)
    })
  })
}

const updatePackage = function(hall_id,flowers_id,cakes_id,music_id,name, description, price, imageUrl, id){
  return new Promise((resolve, reject) =>{
    const sql = "UPDATE packages SET hall_id = ? flowers_id= ? cakes_id = ? music_id = ? name = ? description = ? price = ? imageUrl = ?  WHERE id = ? "
    connection.query(sql,[hall_id,flowers_id,cakes_id,music_id,name, description, price, imageUrl, id],(err,data) => {
      if(err)
      reject (err)
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
    selectProviders,
    updateUsers,
    selectUser,
    deleteUsersById,
    deleteProvidereById,
    deleteAllProvider,
    addUser,
    addProvider,
    getProviderById,
    deleteAllUsers,
    updateProvider,
    getAllFlowers,
    selectFlower,
    deleteFlowerById,
    deleteAllFlowers,
    updateFlowers,
    addFlower,
    getAllCakes,
    selectCake,
    deleteCakeById,
    deleteAllCakes,
    updateCakes,
    addCake,
    getAllMusic,
    selectMusic,
    deleteMusicById,
    deleteAllMusic,
    updateMusic,
    addMusic,
    getAllhalls,
    selectHall,
    deleteHallById,
    deleteAllHalls,
    updateHalls,
    addHall,
    getAllPackages,
    selectPackage,
    deletePackageById,
    deleteAllPackages,
    updatePackage,
    addPackage,
    };