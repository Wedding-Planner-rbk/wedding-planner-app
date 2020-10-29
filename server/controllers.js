const { response } = require('express');
var db = require('../database/index');

exports.getAllServices = (req, res) => {
    getAllServices(function(data){
     console.log(data)
     res.status(200).send(data)
    })
}

exports.getAllPackages =(req, res)=>{
       getAllPackages().then(data => {res.status(200).json(data) })
        .catch(error => res.status(500).send(error))
   
}
    
exports.findOnePackage=(req,res)=>{
   var package_id = req.body.id;
   var package =[]

   selectPackage(package_id).then(data=> {

     selectFlower(data.id_flower).then(flower=> package.push(flower))
     selectCake(data.id_cake).then(cake => package.push(cake))
     selectHall(data.id_hall).then( hall => package.push(hall))
     selectMusic(data.id_Band).then(music => package.push(music))


    res.status(200).json({package,data})
    
   })
    .catch(error => res.status(500).send(error))  

}
  



exports.findUser= (req, res) => {
  selectUser(req.body.id).then((user) => {
    if (user === null) {
      res.send("does not exists");
    } else {
      res.send(user);
    }
  });
}


exports.findProvider = (req, res) => {
  selectProvider(req.body).then(provider => {
    if (provider === null) {
      res.send("does not exists");
    } else {
      res.send(user);
    }
  
  });
  

}
        
  

