
var db = require('../database/index');

exports.getAllFlowers = (req, res) => {
    db.getAllFlowers().then(data => res.status(200).json(data))
    .catch(error => res.status(500).send(error))
}

exports.getAllCakes = (req, res) => {
  db.getAllCakes().then(data => res.status(200).json(data))
  .catch(error => res.status(500).send(error))
}

exports.getAllMusic = (req, res) => {
  db.getAllMusic().then(data => res.status(200).json(data))
  .catch(error => res.status(500).send(error))
}

exports.getAllhalls = (req, res) => {
  db.getAllhalls().then(data => res.status(200).json(data))
  .catch(error => res.status(500).send(error))
}

exports.getAllPackages =(req, res)=>{
       db.getAllPackages().then(data => {res.status(200).json(data) })
        .catch(error => res.status(500).send(error))
   
}
    
exports.findOnePackage=(req,res)=>{
   var package_id = req.body.id;
   var package =[]

   db.selectPackage(package_id).then(data=> {

     db.selectFlower(data.id_flower).then(flower=> package.push(flower))
     db.selectCake(data.id_cake).then(cake => package.push(cake))
     db.selectHall(data.id_hall).then( hall => package.push(hall))
     db.selectMusic(data.id_Band).then(music => package.push(music))


    res.status(200).json({package,data})
    
   })
    .catch(error => res.status(500).send(error))  

}
  



exports.findUser= (req, res) => {
  db.selectUser(req.body.id).then((user) => {
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
        
  

