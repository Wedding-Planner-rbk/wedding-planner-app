
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
   var package =[]
   db.selectFlower(req.body.flowers_id).then(flower=> {
     package.push(flower[0]);
     db.selectCake(req.body.cakes_id).then(cake => {
       package.push(cake[0]);
       db.selectHall(req.body.hall_id).then(hall => {
         package.push(hall[0]);
         db.selectMusic(req.body.music_id).then(music => {
           package.push(music[0]);
           res.status(200).json({package})
          })
        })
      })
    })
    .catch(error => res.status(500).send(error));
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
        
  

