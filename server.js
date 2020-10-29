const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql')
const db = require('./Database');//change it as needed.

const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.use(express.static(__dirname + '/client/dist'));


app.get('/api/users',async (req, res) => {
try{
  let x = await db.getAllUsers();
  res.send(x)
}
catch(err){
  res.status(400).send(err)
}
})

app.get('/api/providers',async (req, res) => {
  try{
    let x = await db.getAllProviders();
    res.send(x)
  }
  catch(err){
    res.status(400).send(err)
  }
  })
  
  app.get('/api/providers/:id',async (req, res) => {
    try{
      let x = await db.selectProviders();
      res.send(x)
    }
    catch(err){
      res.status(400).send(err)
    }
    })

    //firstName, lastName, address, zipCode, city, phone, username,email, password

    app.put('/api/users/:id', async (req, res)=>{
      try{
       const id = req.params.id ;
       const firstName = req.body.firstName ;
       const lastName = req.body.lastName;
       const address = req.body.address;
       const zipCode = req.body.zipCode;
       const city = req.body.city;
       const phone = req.body.phone;
       const username= req.body.username;
       const email = req.body.email;
       const password = req.body.password;
  
      await db.updateUsers(firstName, lastName, address, zipCode, city, phone, username,email, password,id);
       res.send({"message":"User Updated"})
      }
      catch(err){
        res.status(400).send(err)
      }
      })

app.get('/api/users/:id',async (req, res) => {
  try{
    const id = req.params.id ;

    let x = await db.selectUsers(id);
    res.send(x)
  }
  catch(err){
    res.status(400).send(err)
  }
})

app.delete('/api/users/:id' , async (req, res) =>{
  try {
  
  let x = await db.deleteUsersById(id);
  res.send({"message":"A user s deleted"})
  }
  catch(err){
    res.status(400).send(err)
  }
})

app.delete('/api/provider/:id' , async (req, res) =>{
  try {
  
  let x = await db.deleteProvidereById(id);
  res.send({"message":"A provider is deleted"})
  }
  catch(err){
    res.status(400).send(err)
  }
})

app.delete('/api/provider' , async (req, res) =>{
  try {
  
  let x = await db.deleteAllProvider();
  res.send({"message":"All providers are deleted"})
  }
  catch(err){
    res.status(400).send(err)
  }
})
//_____________________________________
//firstName, lastName, address, zipCode, city, phone, username,email, password

app.post('/api/users',async (req,res) =>{
     
  const firstName = req.body.name;
  const lastName = req.body.email;
  const address = req.body.password;
  const zipCode = req.params.zipCode;
  const city = req.body.city;
  const phone = req.params.phone;
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password; 
  let x = await db.addUser(firstName, lastName, address, zipCode, city, phone, username,email, password)
  res.send({"message":"User added"})
})

//--------------------------------------
//firstName, speciality, username,email, password, provider_id

app.post('/api/provider',async (req,res) =>{
     
  const firstName = req.body.name;
  const speciality = req.body.speciality;
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;
  const provider_id = req.params.provider_id;
  
  let x = await db.addUser(firstName, speciality, username,email, password, provider_id)
  res.send({"message":"Provider added"})
})
//---------------------------------------------------------

app.get('/api/provider/:id',async (req, res) => {
  try{
    const id = req.params.id ;

    let x = await db.getProviderById(id);
    res.send(x)
  }
  catch(err){
    res.status(400).send(err)
  }
})


//------------------------------------------------

app.delete('/api/users/' , async (req, res) =>{
  try {
  
  let x = await db.deleteAllUsers();
  res.send({"message":"All users deleted"})
  }
  catch(err){
    res.status(400).send(err)
  }
})

//-----------------------------------------------

//firstName, speciality, username,email, password, provider_id
app.put('/api/provider/:id', async (req, res)=>{
  try{
   const id = req.params.id ;
   const firstName = req.body.firstName ;
   const speciality = req.body.speciality;
   const username = req.body.username;
   const email = req.body.email;
   const password = req.body.password;
   const provider_id = req.params.provider_id;

   let x = await db.updateProvider(firstName, speciality, username,email, password, provider_id,id);
   res.send({"message":"Provider Updated"})
  }
  catch(err){
    res.status(400).send(err)
  }
  })

  //-------------------------------------

  app.get('/api/flowers',async (req, res) => {
    try{
      let x = await db.getAllFlowers();
      res.send(x)
    }
    catch(err){
      res.status(400).send(err)
    }
    })
    

    //----------------------------

    app.get('/api/flowers/:id',async (req, res) => {
      try{
        let x = await db.selectFlower(id);
        res.send(x)
      }
      catch(err){
        res.status(400).send(err)
      }
      })

      //------------------------------

      app.delete('/api/flowers/:id' , async (req, res) =>{
        try {
        
        let x = await db.deleteFlowerById(id);
        res.send({"message":"A Flower is deleted"})
        }
        catch(err){
          res.status(400).send(err)
        }
      })

      //--------------------------------

      app.delete('/api/flowers' , async (req, res) =>{
        try {
        
        let x = await db.deleteAllFlowers();
        res.send({"message":"All Flowers are deleted s deleted"})
        }
        catch(err){
          res.status(400).send(err)
        }
      })

      //----------------------------------
      //name,imageUrl,description,flowers_id,provider_id

      app.put('/api/flowers/:id', async (req, res)=>{
        try{
         const id = req.params.id ;
         const name = req.body.name ;
         const imageUrl = req.body.imageUrl;
         const description= req.body.description;
         const flowers_id= req.params.flowers_id;
         const provider_id= req.params.provider_id;
         let x = await db.updateFlowers(name,imageUrl,description,flowers_id,provider_id ,id);
         res.send({"message":"Flowers Updated"})
        }
        catch(err){
          res.status(400).send(err)
        }
        })

        //-----------------------------------------

        app.post('/api/flowers',async (req,res) =>{
     
          const id = req.params.id ;
         const name = req.body.name ;
         const imageUrl = req.body.imageUrl;
         const description= req.body.description;
         const flowers_id= req.params.flowers_id;
         const provider_id= req.params.provider_id;
         let x = await db.addFlower(name,imageUrl,description,flowers_id,provider_id ,id);
          res.send({"message":"Flower added"})
        })

        //----------------------------------------

        app.get('/api/cakes',async (req, res) => {
          try{
            let x = await db.getAllCakes();
            res.send(x)
          }
          catch(err){
            res.status(400).send(err)
          }
          })
      //-----------------------------------------

      app.get('/api/cakes/:id',async (req, res) => {
        try{
          let x = await db.selectCake(id);
          res.send(x)
        }
        catch(err){
          res.status(400).send(err)
        }
        })

        //---------------------------------------------
      
        app.delete('/api/cakes/:id' , async (req, res) =>{
          try {
          
          let x = await db.deleteCakeById(id);
          res.send({"message":"A Cake is deleted"})
          }
          catch(err){
            res.status(400).send(err)
          }
        })

        //-------------------------------------------
        app.delete('/api/flowers' , async (req, res) =>{
          try {
          
          let x = await db.deleteAllCakes();
          res.send({"message":"AllCakes are deleted"})
          }
          catch(err){
            res.status(400).send(err)
          }
        })

      //----------------------------------------------
      //name,imageUrl,description,cakes_id,provider_id

      app.put('/api/cakes/:id', async (req, res)=>{
        try{
         const id = req.params.id ;
         const name = req.body.status ;
         const imageUrl = req.body.imageUrl;
         const description = req.body.description;
         const cakes_id = req.params.cakes_id;
         const provider_id = req.params.provider_id;
         let x = await db.updateCakes(name,imageUrl,description,cakes_id,provider_id,id);
         res.send({"message":"Cake Updated"})
        }
        catch(err){
          res.status(400).send(err)
        }
        })

        //------------------------------------------
        app.post('/api/cakes',async (req,res) =>{
     
          const id = req.params.id ;
         const name = req.body.name ;
         const imageUrl = req.body.imageUrl;
         const description= req.body.description;
         const cakes_id= req.params.cakes_id;
         const provider_id= req.params.provider_id;
         let x = await db.addFlower(name,imageUrl,description,cakes_id,provider_id ,id);
          res.send({"message":"cake added"})
        })

        //------------------------------------------------------------

        app.get('/api/music',async (req, res) => {
          try{
            let x = await db.getAllMusic();
            res.send(x)
          }
          catch(err){
            res.status(400).send(err)
          }
          })

          //---------------------------------
          app.get('/api/music/:id',async (req, res) => {
            try{
              let x = await db.selectMusic(id);
              res.send(x)
            }
            catch(err){
              res.status(400).send(err)
            }
            })

            //-------------------------------------
            app.delete('/api/music/:id' , async (req, res) =>{
              try {
              
              let x = await db.deleteMusicById(id);
              res.send({"message":"A music piece is deleted"})
              }
              catch(err){
                res.status(400).send(err)
              }
            })

            //---------------------------------------------

            app.delete('/api/music/' , async (req, res) =>{
              try {
              
              let x = await db.deleteAllMusic();
              res.send({"message":"All Music is deleted"})
              }
              catch(err){
                res.status(400).send(err)
              }
            })   
            
            //------------------------------------

            //name,imageUrl,description,music_id,provider_id

            app.put('/api/music/:id', async (req, res)=>{
              try{
               const id = req.params.id ;
               const name = req.body.status ;
               const imageUrl = req.body.imageUrl;
               const description = req.body.description;
               const music_id = req.params.music_id;
               const provider_id = req.params.provider_id;
               let x = await db.updateMusic(name,imageUrl,description,music_id,provider_id,id);
               res.send({"message":"Music Updated"})
              }
              catch(err){
                res.status(400).send(err)
              }
              })

              //----------------------------
              app.post('/api/music',async (req,res) =>{
     
                const id = req.params.id ;
               const name = req.body.name ;
               const imageUrl = req.body.imageUrl;
               const description= req.body.description;
               const music_id= req.params.cmusic_id;
               const provider_id= req.params.provider_id;
               let x = await db.addMusic(name,imageUrl,description,music_id,provider_id ,id);
                res.send({"message":"Music  added"})
              })

              //-------------------------------------
              app.get('/api/hall',async (req, res) => {
                try{
                  let x = await db.getAllHalls();
                  res.send(x)
                }
                catch(err){
                  res.status(400).send(err)
                }
                })

                //-----------------------------------------
                app.get('/api/hall/:id',async (req, res) => {
                  try{
                    let x = await db.selectHall(id);
                    res.send(x)
                  }
                  catch(err){
                    res.status(400).send(err)
                  }
                  })
                  //----------------------------------------
                  app.delete('/api/hall/:id' , async (req, res) =>{
                    try {
                    
                    let x = await db.deleteHallsById(id);
                    res.send({"message":"A hall  is deleted"})
                    }
                    catch(err){
                      res.status(400).send(err)
                    }
                  })
      
                  //---------------------------------------------
      
                  app.delete('/api/hall/' , async (req, res) =>{
                    try {
                    
                    let x = await db.deleteAllHalls();
                    res.send({"message":"All Halls are deleted"})
                    }
                    catch(err){
                      res.status(400).send(err)
                    }
                  })   
                  
                  //--------------------------------------------
                  //name,imageUrl,description,hall_id,provider_id
                  app.put('/api/hall/:id', async (req, res)=>{
                    try{
                     const id = req.params.id ;
                     const name = req.body.status ;
                     const imageUrl = req.body.imageUrl;
                     const description = req.body.description;
                     const hall_id = req.params.hall_id;
                     const provider_id = req.params.provider_id;
                     let x = await db.updateMusic(name,imageUrl,description,hall_id,provider_id,id);
                     res.send({"message":"A Hall is Updated"})
                    }
                    catch(err){
                      res.status(400).send(err)
                    }
                    })
      
                    //----------------------------
                    app.post('/api/hall',async (req,res) =>{
           
                      const id = req.params.id ;
                     const name = req.body.name ;
                     const imageUrl = req.body.imageUrl;
                     const description= req.body.description;
                     const hall_id= req.params.chall_id;
                     const provider_id= req.params.provider_id;
                     let x = await db.addMusic(name,imageUrl,description,hall_id,provider_id ,id);
                      res.send({"message":"A hall  added"})
                    })
                    //---------------------------------
                    app.get('/api/packages/:id',async (req, res) => {
                      try{
                        let x = await db.selectPackage(id);
                        res.send(x)
                      }
                      catch(err){
                        res.status(400).send(err)
                      }
                      })
      
                      //-----------------------------------------
                      app.get('/api/packages/',async (req, res) => {
                        try{
                          let x = await db.getAllPackages();
                          res.send(x)
                        }
                        catch(err){
                          res.status(400).send(err)
                        }
                        })
                        //----------------------------------------
                        app.delete('/api/packages/:id' , async (req, res) =>{
                          try {
                          
                          let x = await db.deletePackagesById(id);
                          res.send({"message":"A Package  is deleted"})
                          }
                          catch(err){
                            res.status(400).send(err)
                          }
                        })
                        //---------------------------------------------
                        app.delete('/api/packages/' , async (req, res) =>{
                          try {
                          
                          let x = await db.deleteAllPackages();
                          res.send({"message":"All Packages  are deleted"})
                          }
                          catch(err){
                            res.status(400).send(err)
                          }
                        })

                        //------------------------------------------------
                        //hall_id,flowers_id,cakes_id,music_id, name , description, imageUrl
                        app.put('/api/packages/:id', async (req, res)=>{
                          try{
                           const id = req.params.id ;
                           const hall_id = req.params.hall_id ;
                           const flowers_id = req.params.flowers_id;
                           const cakes_id = req.params.cakes_id;
                           const hall_id = req.params.hall_id;
                           const music_id = req.params.music_id;
                           const name = req.body.name;
                           const description =req.body.description;
                           const imageUrl= req.body.imageUrl;
                           let x = await db.updatePackage(hall_id,flowers_id,cakes_id,music_id, name , description, imageUrl,id);
                           res.send({"message":"A Package is Updated"})
                          }
                          catch(err){
                            res.status(400).send(err)
                          }
                          })
                          //-------------------------------
                          app.post('/api/packages',async (req,res) =>{
           
                            const id = req.params.id ;
                           const hall_id = req.params.hall_id ;
                           const flowers_id = req.params.flowers_id;
                           const cakes_id = req.params.cakes_id;
                           const hall_id = req.params.hall_id;
                           const music_id = req.params.music_id;
                           const name = req.body.name;
                           const description =req.body.description;
                           const imageUrl= req.body.imageUrl;
                           let x = await db.addPackage(hall_id,flowers_id,cakes_id,music_id, name , description, imageUrl,id);
                            res.send({"message":"A Package is  added"})
                          })


              


        
    

                          





    const PORT = 3000;
    app.listen(PORT,()=>{
      console.log(`listning at http://localhost:${PORT}`)
    })