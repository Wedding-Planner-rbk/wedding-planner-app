var db = require('../database/index');

exports.getAllServices = (req, res) => {
    getAllServices(function(data){
     console.log(data)
     res.status(200).send(data)
    })
}

exports.getAllPackages =(req, res)=>{
    var results = req.body.packages;
       getAllPackages(results, function(data) {
    })
    res.end('')
}
    
exports.findOnePackage=(req,res)=>{
   var package_id = req.body.id;
   var package =[]

    findSpecificPackage(package_id, function(data) {
       console.log('package found')

    findSpecificFlower(data.id_flower, function(err,data){
       if (err) {
          res.status(500).send("does not exists");
       } else {
          package.push(data)
       } 
    })

    findSpecificWeddingCake(data.id_cake, function(err,data){
       if (err) {
           res.status(500).send("does not exists");
        } else {
        package.push(data)
        }
    })

    findSpecificWeddingHall(data.id_hall, function(err,data){
        if (err) {
              res.status(500).send("does not exists");
        } else {
            package.push(data)
        }
    })

    findSpecificMusicBand(data.id_Band, function(err,data){
       if (err) {
          res.status(500).send("does not exists");
        } else {
           package.push(data)
        }
    })

    res.status(200).send(package)
 
   })

res.end('')
}
  



exports.findUser= (req, res) => {
    console.log(req.body);
    user=req.body.userName
    findUser(user,function(err,data) {
      if (err) {
        res.status(500).send("does not exists");
      } else {
        res.status(200).send(data);
      }
    });
}

exports.findProvider= (req, res) => {
    console.log(req.body);
    provider=req.body.providerName
    findProvider(provider,function(err,data) {
      if (err) {
        res.status(500).send("does not exists");
      } else {
        res.status(200).send(data);
      }
    });
}
exports.addUser=(req, res) => {
    let NewUser = req.body;
    addUser(NewUser , function(err,data){
        if (err) {
            res.status(500).send("does not exists");
          } else {  
      str = JSON.stringify(NewUser);
      res.send(str);
          }
    });
  };

  exports.Authentification=(req,res)=>{
    var username = req.body.username;
	var password = req.body.password;
	if (username && password) {

  }