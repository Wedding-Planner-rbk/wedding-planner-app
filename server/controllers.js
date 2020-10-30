
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
     
     var pack=data[0];
    
     db.selectFlower(pack.flowers_id).then(flower=> {package.concat(flower[0]) 
    //  console.log(package)
   
    })
     db.selectCake(pack.cakes_id).then(cake => package.concat(cake [0]))
     db.selectHall(pack. hall_id).then( hall => package.concat(hall[0]))
     db.selectMusic(pack.music_id).then(music => package.concat(music[0]))
   
     
    res.status(200).json({package})
    
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
        
  

