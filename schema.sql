DROP DATABASE IF EXISTS wedding;

CREATE DATABASE wedding;

USE wedding;

CREATE TABLE users (
  id int NOT NULL AUTO_INCREMENT,
  firstName varchar(255) NOT NULL,
  lastName varchar(255) NOT NULL,
  address varchar(255) NOT NULL,
  zipCode INT NOT NULL,
  city varchar(255) NOT NULL,
  phone INT NOT NULL,
  username varchar(255) NOT NULL,
  email varchar (255) NOT NULL,
  password varchar(255) NOT NULL,
  flowers_id INT NULL,
  cakes_id INT NULL,
  music_id INT NULL,
  hall_id INT NULL,
  PRIMARY KEY (id)
);

INSERT into users ( firstName, lastName, address, zipCode, city, phone, username,email, password, flowers_id,cakes_id,music_id,hall_id) VALUES ("Haykel","Hadj Salem", "Sousse", 2002,"Khzema",22555666,"Hayha","haykel@gmail.com","12345",NULL,NULL,NULL,NULL);
INSERT into users ( firstName, lastName, address, zipCode, city, phone, username,email, password, flowers_id,cakes_id,music_id,hall_id) VALUES ("Nadim","Barkati", "Tunis", 2001,"Bardo",20555666,"Naba","nadim@gmail.com","123456",NULL,NULL,NULL,NULL);
INSERT into users ( firstName, lastName, address, zipCode, city, phone, username,email, password, flowers_id,cakes_id,music_id,hall_id) VALUES ("Chayma","Ben Thabet", "Nabeul", 2003,"Mrezga",23564789,"Chabe","chayma@gmail.com","25014",NULL,NULL,NULL,NULL);
INSERT into users ( firstName, lastName, address, zipCode, city, phone, username,email, password, flowers_id,cakes_id,music_id,hall_id) VALUES ("Dhia","Fattoum", "Gafsa", 2005,"Ville",24589647,"Dhifa","dhia@gmail.com","20546",NULL,NULL,NULL,NULL);
INSERT into users ( firstName, lastName, address, zipCode, city, phone, username,email, password, flowers_id,cakes_id,music_id,hall_id) VALUES ("Issam","Ben Mansour", "Sfax", 2004,"Gremda",20145365,"Isbe","issam@gmail.com","25631",NULL,NULL,NULL,NULL);
INSERT into users ( firstName, lastName, address, zipCode, city, phone, username,email, password, flowers_id,cakes_id,music_id,hall_id) VALUES ("Hanen","loulou", "Gabes", 2022,"Hamma",23145678,"halou","hanen@gmail.com","12345678",NULL,NULL,NULL,NULL);
INSERT into users ( firstName, lastName, address, zipCode, city, phone, username,email, password, flowers_id,cakes_id,music_id,hall_id) VALUES ("Alex","Khbou", "Sfax", 2021,"Afrane",89654122,"Akh","alex@gmail.com","3456789",NULL,NULL,NULL,NULL);
INSERT into users ( firstName, lastName, address, zipCode, city, phone, username,email, password, flowers_id,cakes_id,music_id,hall_id) VALUES ("Larissa","Bellucci", "Italia", 30125,"Milano",21365478,"Labe","larissa@gmail.com","0231456",NULL,NULL,NULL,NULL);
INSERT into users ( firstName, lastName, address, zipCode, city, phone, username,email, password, flowers_id,cakes_id,music_id,hall_id) VALUES ("Dhia","Mbarki", "Mhamdia", 3014,"Village",89541200,"Dhmb","dhia2@gmail.com","3654789",NULL,NULL,NULL,NULL);
INSERT into users ( firstName, lastName, address, zipCode, city, phone, username,email, password, flowers_id,cakes_id,music_id,hall_id) VALUES ("Nesrine","Abid", "Ariana", 2004,"Sokra",97485632,"Neb","nesrin@gmail.com","6987452",NULL,NULL,NULL,NULL);


 CREATE TABLE provider (
  id int NOT NULL AUTO_INCREMENT,
  firstName varchar(255) NOT NULL,
  lastName varchar(255) NOT NULL,
  speciality varchar(255) NOT NULL,
  username varchar(255) NOT NULL,
  email varchar(255) NOT NULL,
  password varchar(25) NOT NULL,
  phone INT NOT NULL,
   PRIMARY KEY (id)
);

INSERT into provider ( firstName,lastName, speciality, username,email, password, phone) VALUES ("Nadhir","Mindfreak","Photography", "nadhirphotograph", "nadhirmindfreak@hotmail.fr","12345",25685477);
INSERT into provider ( firstName,lastName, speciality, username,email, password, phone) VALUES ("Bunches","Kenk","Flowers", "bunchesflowers", "flowers@bunches.co.uk","123456",20698588);
INSERT into provider ( firstName,lastName, speciality, username,email, password, phone) VALUES ("Sweet Home Bakery","Bakery","Cakes", "Dhc", "dhiacake@dhiacake.com","23456",96857485);
INSERT into provider ( firstName,lastName,speciality, username,email, password, phone) VALUES ("Bou","Dinar","Music", "ahmu", "ahmedmusic@ahmedmusic.com","34567",44658569);
INSERT into provider ( firstName,lastName, speciality, username,email, password, phone) VALUES ("watersedge", "hall","Wedding hull", "helawed", "watersedge@gmail.com","12345",50695847);

CREATE TABLE flowers (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(255) NOT NULL,
  imageUrl varchar(700) NOT NULL,
  description varchar(1000) NOT NULL,
  price int NOT NULL, 
  provider_id int NOT NULL,
   PRIMARY KEY (id)
);

INSERT into flowers (name,imageUrl,description,price,provider_id) VALUES ("Bridal Bouquet","https://images.unsplash.com/photo-1550005809-91ad75fb315f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80
","Walk down the aisle with the perfect bridal bouquet",15000,20);

INSERT into flowers (name,imageUrl,description,price,provider_id) VALUES ("Boutonnières","https://images.unsplash.com/photo-1522231192900-4fbd354ff773?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80
","Get a polished look with our dashing boutonnieres.",20000,20);

INSERT into flowers (name,imageUrl,description,price,provider_id) VALUES ("Bridesmaid Bouquets","https://images.unsplash.com/photo-1587652398418-74fdd8cd7eca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80
","Complementing bridesmaid bouquets for your wedding day.",300000,20);

INSERT into flowers (name,imageUrl,description,price,provider_id) VALUES ("Corsages","https://images.unsplash.com/photo-1596885120231-67550e93546f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80
","Gorgeous floral accessories for the special women in your life.",400000,20);

INSERT into flowers (name,imageUrl,description,price,provider_id) VALUES ("Arrangements","https://images.unsplash.com/photo-1544586948-2a5ce9f6ef6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80
","Decorate your Las Vegas ceremony and reception with amazing floral.",450000,20);

INSERT into flowers (name,imageUrl,description,price,provider_id) VALUES ("White and greenery","https://i.pinimg.com/originals/97/70/c1/9770c1d5347796222f4c615281ea43bc.jpg",":Looking for something sweet? Our Apple Cider Bouquet is the perfect pick. Even if you can't make it out to the orchard with your loved ones, add some warmth to their day with this stunning arrangement.",55000,20);

INSERT into flowers (name,imageUrl,description,price,provider_id) VALUES ("Pick Flowers","https://www.thespruce.com/thmb/WCYEQwv9szEKf0nsfCmqScmWN9c=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/bouquet-of-roses-on-table-at-wedding-683866307-5a8207778023b90037a1f946.jpg"," sprinkles make everything better. Overflowing with roses, carnations, gerbera daisies and a glittering “Happy Wedding” pic, this handcrafted bouquet puts the cherry on top of any celebration. Good bouquet is approx.",750000,20);

INSERT into flowers (name,imageUrl,description,price,provider_id) VALUES ("Arrangements","https://image.dhgate.com/0x0s/f2-albu-g6-M00-37-61-rBVaR1t1dDSAGNlCAALFWCeNaOI592.jpg/wedding-bouquet-dusty-rose-bridal-bouquet.jpg","A gorgeous combination of freshness and rustic charm, this bouquet brings the best of the season into any home. These blooms are a soft yet oh so fragrant way to show your loved ones how much you care.",560000,20);

CREATE TABLE cakes (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(50) NOT NULL,
  imageUrl varchar(5000) NOT NULL,
  description varchar(500) NOT NULL,
  price int NOT NULL,
  provider_id int NOT NULL,
   PRIMARY KEY (id)
);

INSERT into cakes (name,imageUrl,description,price,provider_id) VALUES ("Splendide Wedding Cake","https://images.unsplash.com/photo-1535254973040-607b474cb50d?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80
","A simple cake for intimate celebration! This single-tier wedding cake is decorated with elegant icing dots or whimsical icing swirls and serves 8-10.",10000,30);

INSERT into cakes (name,imageUrl,description,price,provider_id) VALUES ("Divine Wedding Cake","https://images.unsplash.com/photo-1565987164841-7132b384293b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80
","Elegant cake for small wedding! The single-tier divine, gorgeous wedding cake serves 8-10 people and is decorated with exquisite icing dots or fancy icing swirls, beautiful ribbon and fresh roses. ",20000,30);

INSERT into cakes (name,imageUrl,description,price,provider_id) VALUES ("Splendide Cupcake","https://images.unsplash.com/photo-1598295971175-d4ec5d2ff678?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80
","Spread the cheer with these scrumptious treats! Enjoy everything you love about wedding cakes, but in cupcake form. Splendid Cupcakes have basic décor with basic icing in your choice of color, and up to 3 flavors for 24 cupcakes. Rosette style frost and sprinkles upon request. ",30000,30);

INSERT into cakes (name,imageUrl,description,price,provider_id) VALUES ("Divine Cupcake","https://images.unsplash.com/photo-1559373098-e1caaccae791?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80
","Sweets for the sweethearts on their wedding day. Whether you want to treat yourselves or a couple of your closest friends and family, nothing says “I Love You” like a box of yummy cupcakes.",40000,30);

INSERT into cakes (name,imageUrl,description,price,provider_id) VALUES ("Soft Drama","https://www.brides.com/thmb/U-wCf25O2d7Yxp5b-43F5JEZQ3E=/1200x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__brides__public__brides-services__production__2018__02__05__5a78d4e0ed51d62c2dcc7bac_45Stewart20Uy20Photography20-20Vanilla20Bake20Shop-571318441b974e7697dfdd230aa5f269.jpg","Dark wedding cakes don't always have to be moody and brooding. This stunner exudes a soft elegance with its floral-painted tier and accents of handmade sugar blossoms in powdery tones. ",30000,30);

INSERT into cakes (name,imageUrl,description,price,provider_id) VALUES ("Mixed Finishes","https://www.brides.com/thmb/1yCVqqxEz5LEXYgQHrcQq3EzAak=/1200x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/2018_12_01_katherinedavis_1030-f3d27388392d44be822e9b5dee2575bd.jpg","A matte white design is elevated with satin-finished petals and bursts of burnished tones. The autumnal hues hint at the sweet potato cake with candied pecan crunch and maple buttercream that lies beneath. ",30000,30);
INSERT into cakes (name,imageUrl,description,price,provider_id) VALUES ("Go for Gold","https://www.brides.com/thmb/fH-_o6Xj8LzR4YIC3k09YyClRKM=/1200x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/adf-d7e15f1bc05242b7998bdd279c4bde09.png","This five-tiered wedding cake is a flourish of white and gold sugar flowers, trellising upwards through the layers. Inside, the cake features flavors of chocolate, salted caramel, and raspberry cream. ",30000,30);
INSERT into cakes (name,imageUrl,description,price,provider_id) VALUES ("Gold Standard","https://www.brides.com/thmb/JJyxIccULWH8l0sxSk26LgVjM6M=/1200x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__brides__public__brides-services__production__2018__02__05__5a78d6d7d4df622f42debe67_Fox20Tail20Cake20Shop-f1b71cb183a74a5f8b823bf7b052b7e8.jpg","It doesn't get much more luxurious than this. Three tiers of white fondant brushed with metallic gold and one entire tier of of textured, gilded goodness all wrapped up in a fresh swag of pastel blossoms and greenery. ",30000,30);


CREATE TABLE music (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(255) NOT NULL,
  imageUrl varchar(700) NOT NULL,
  description varchar(1000) NOT NULL,
  price int NOT NULL,
  provider_id int NOT NULL,
   PRIMARY KEY (id)
);

INSERT into music (name,imageUrl,description,price,provider_id) VALUES ("Custom Music","https://3ersi.tn/uploads/383/images/taratata_band_1532539882.jpg","Walk down the aisle to a romantic ballad or your favorite tune. This custom music product will give allow you to add that personal touch to your ceremony. In order to use this product, your song(s) must be on a Bluetooth capable device that is already loaded to your playlist.",10000,40);

INSERT into music (name,imageUrl,description,price,provider_id) VALUES ("Elvis Sings and Marries You"," https://lh3.googleusercontent.com/proxy/lQ6Y_EAYezczLTzIQMRZQxIGiH6rsT8zN20ls7S5RAqJoUxb9EGobLBlwm2Z8mGZd2Y2mnI0R4td4Swf-B5_DWPcJB3VY21fVvn5nolHBly7LqCxIu51D3pS
","Have the ultimate “Viva Las Vegas” wedding by having Elvis marry you! The ceremony will begin by Elvis escorting the bride (or groom) down the aisle followed by singing three songs of your choice. After his amazing performance, he will conduct the ceremony and wed you. Please contact your Personal Wedding Planner to make sure Elvis is reserved for your special day.",20000,40);

INSERT into music (name,imageUrl,description,price,provider_id) VALUES ("Live Organ Music","https://scontent.ftun4-1.fna.fbcdn.net/v/t1.0-0/p180x540/118475028_2687774441477092_2264418653781176691_o.jpg?_nc_cat=105&cb=846ca55b-ee17756f&ccb=2&_nc_sid=8024bb&_nc_ohc=GnXYr4Lq_1IAX92_hqC&_nc_ht=scontent.ftun4-1.fna&tp=6&oh=0bc8196496be6cdbdc5fb04f4f4cab43&oe=5FC01DE5
","Fill the air with a traditional touch! Our live organist will play the traditional instrumental wedding music during your ceremony. Please contact your Personal Wedding Planner to make sure the organist is available for your ceremony. Not available in the Gazebo location.",30000,40);

INSERT into music (name,imageUrl,description,price,provider_id) VALUES ("Live Guitarist Music","https://marryme.tn/wp-content/uploads/2016/05/marryme_emirs94.jpg","Let our guitarist create a romantic setting for your special day. Performing traditional and contemporary wedding processional music, the sweet melodies from the guitar is sure to please you and your guests. Please contact your Personal Wedding Planner to make sure the guitarist is available for your ceremony.",40000,40);
INSERT into music (name,imageUrl,description,price,provider_id) VALUES ("CITY SOUNDS","https://www.entertainment-nation.co.uk/act_media/451/gallery/city-sounds1101914290.jpg","City Sounds are a luxury, contemporary pop, dance and soul band made up of some of the most exciting professional musicians. Fronted by an outstanding female vocalist, these high-intensity performers are renowned for their energetic stage presence and their extraordinary musical talent; it's no wonder they pack out dance floors wherever they perform!",40000,40);
INSERT into music (name,imageUrl,description,price,provider_id) VALUES ("CLIQUE","https://www.entertainment-nation.co.uk/act_media/923/gallery/clique1599676826.jpg","Ready to send your guests into a dance floor frenzy, Clique supply a show like no other! Regarded as one of the most exciting and professional function bands  right now, Clique are a premier choice for your occasion.",40000,40);
INSERT into music (name,imageUrl,description,price,provider_id) VALUES ("Troupe Ben Rhouma","https://3ersi.tn/uploads/411/1568023063_Cov.png","Organization of wedding parties with the Musical Troupe Mohamed Ben Rhouma Aweda, Soulamia, Daklet Laaroussa, Egyptian Zaffa, Syrian Zaffa, Show Show, Organist Singer",40000,40);
INSERT into music (name,imageUrl,description,price,provider_id) VALUES ("Troupe El Heni","https://1.bp.blogspot.com/-Unjwex41RHQ/VdeyGH7CnCI/AAAAAAAAHPs/WWgfg17dMTg/s1600/Elheni%2B%25282%2529.jpg","One Agency with several services. Our job and our mission on a daily basis. El Heni, is at your service for your events, events or organizations. It guarantees you, punctuality, professionalism and atmosphere with a plethora of musicians and professional singers.",40000,40);


CREATE TABLE hall (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(255) NOT NULL,
  imageUrl varchar(700) NOT NULL,
  description varchar(1000) NOT NULL,
  price int NOT NULL,
  provider_id int NOT NULL,
   PRIMARY KEY (id)
);



INSERT into hall (name,imageUrl,description,price,provider_id) VALUES ("The Glass Gardens","https://www.mariage-tunisie.net/wp-content/uploads/2018/08/Centre-Venizia-Salle-Des-Fetes-Lelegance4.jpg","Have an enchanting wedding in this rustic-chic garden chapel. Surrounded by greenery, faux wood planked walls, and custom lighting, the Glass Gardens is the most unique and romantic garden venue in the city.",10000,50);

INSERT into hall (name,imageUrl,description,price,provider_id) VALUES ("The Gazebo","https://www.mariage-tunisie.net/wp-content/uploads/2018/08/Centre-Venizia-Salle-Des-Fetes-Lelegance4.jpg
","Surrounded by lush landscaping and mature trees, this romantic al fresco Las Vegas Strip location is a favorite for photographs or a quaint outdoor ceremony. In the evening, luminous white lights create an enchanted glow from within.",20000,50);

INSERT into hall (name,imageUrl,description,price,provider_id) VALUES ("Grand Canyon","https://mariageoriginal.files.wordpress.com/2013/12/deco-mariage-fushia.jpg
","The unmatched natural beauty of the awe-inspiring Grand Canyon will be the setting as you exchange vows. The helicopter flight from Las Vegas to the Grand Canyon includes flights over Lake Mead, Hoover Dam, and the Vegas strip.",30000,50);

INSERT into hall (name,imageUrl,description,price,provider_id) VALUES ("Valley Of Fire","https://caveaudesducs.fr/wp-content/uploads/2016/07/61308170_453222328837734_339670888160487196_n.jpg
","Celebrate your Las Vegas wedding ceremony in the midst of dramatic, fiery red sandstone formations. Just 45 minutes from the Chapel is the Valley of Fire, a Nevada state park that contains brilliant sandstone more than 150 million years old.",40000,50);

INSERT into hall (name, imageUrl, description,price,provider_id) VALUES("High Roller", "https://cdn.wedding-spot.com/images/venues/4791/Freedom-Hill-Banquet---Event-Center-Sterling-Heights-MI-206ed93c-e09b-4e9a-a251-a928161c9a2a.jpg
", "The ultimate Las Vegas wedding is located 550 feet above the neon lights creating a truly romantic experience. In the heart of the Las Vegas Strip, the High Roller Observation Wheel has become a must-see tourist attraction, and popular Vegas wedding venue for sunset wedding ceremonies and intimate vow renewals.",50000,50);

INSERT into hall (name,imageUrl,description,price,provider_id) VALUES ("MELBOURNE","https://images.squarespace-cdn.com/content/v1/56c2f1adb654f95147f01f84/1602550090418-Y9MDSMU8M2L14NKEOBNP/ke17ZwdGBToddI8pDm48kKAwwdAfKsTlKsCcElEApLR7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UegTYNQkRo-Jk4EWsyBNhwKrKLo5CceA1-Tdpfgyxoog5ck0MD3_q0rY3jFJjjoLbQ/HotelChadstone_BallroomCabaret_2.jpg?format=1000w","World-class dining, design and service are intertwined at  Melbourne to provide a memorable wedding where attention is placed in every detail. Whether you are planning a large affair or intimate gathering, we are here to provide an environment and bespoke package to meet your needs.",10000,50);
INSERT into hall (name,imageUrl,description,price,provider_id) VALUES ("the Muckenthaler Mansion ","https://cdn.wedding-spot.com/__sized__/images/venues/4149/Muckenthaler-Mansion-Fullerton-CA-b7c56a9a-245e-47b8-bfa9-f3ed02b69490-97450e389c42885476f1fbe9bc5bca5a.jpg","Located on 9 acres of gorgeous park-like grounds, the Muckenthaler Mansion is the perfect place for your fun yet elegant wedding ceremony and reception. With a vista of gently rolling gardens, swaying palms, and picturesque architecture, it is the ideal space for your special day.",30000,50);
INSERT into hall (name,imageUrl,description,price,provider_id) VALUES ("Vintners Resort","https://cdn.wedding-spot.com/__sized__/images/venues/112/Vintners-Resort-Santa-Rosa-CA-7fda1bf2-9d97-4b00-9f80-7c7e0dcac1b4.1601655581-97450e389c42885476f1fbe9bc5bca5a.jpg","Surrounded by beautiful landscaped gardens and framed by 200 acres of lush vineyards, Vintners Resort offers a unique setting that highlights Sonoma’s natural beauty. ",30000,50);

 CREATE TABLE packages (
  id int NOT NULL AUTO_INCREMENT,
  hall_id INT NOT NULL,
  flowers_id INT NOT NULL,
  cakes_id INT NOT NULL,
  music_id INT NOT NULL,
  name varchar(255) NOT NULL,
  description varchar(700) NOT NULL,
  price INT NOT NULL,
  image_url varchar(500) NOT NULL,
     PRIMARY KEY (id)
);

INSERT into packages (hall_id,flowers_id,cakes_id,music_id, name , description,price,image_url) VALUES (1,1,1,1, "Basic", "Exchange vows with this intimate, personalized wedding package for two.", 8800, 'https://bbc136b7ae3badc49324-4505d403f77dee961d206e5b048c01ea.ssl.cf3.rackcdn.com/SeDireOui/web/modele-business-plan-wedding-planner-thumb.jpg'  );

INSERT into packages (hall_id,flowers_id,cakes_id,music_id, name , description,price,image_url) VALUES (2,2,2,2,"Great","Promise forever with this vow renewal package for 6 guests.",10000,'https://www.mariage.com/wp-content/uploads/2016/04/une-mariage-papiers.jpg');

INSERT into packages (hall_id,flowers_id,cakes_id,music_id, name , description,price,image_url) VALUES (3,3,3,3, "Fabulous", "Tie the knot in a romantic wedding ceremony, with flowers, photos.", 7800,'https://www.mariage.com/wp-content/uploads/2016/02/une-mariage-romantique.jpg');

INSERT into packages (hall_id,flowers_id,cakes_id,music_id, name , description,price,image_url) VALUES (4,4,4,4, "Premium", "All-inclusive wedding with memorable on-site photo session and upgrades for newlyweds.", 9000,'https://file.weddingchicks.com/662169_jesi-haack-wedding.jpg');
INSERT into packages (hall_id,flowers_id,cakes_id,music_id, name , description,price,image_url) VALUES (5,5,5,5,"Classic","elicate white florals, plenty of lush greenery, light linens, and minimal decor: These tried and true wedding details will never go out of style. And if you're a bride who prefers timelessness over trends, we suggest planning your ceremony and reception in a classic wedding style.",6500,"https://i.pinimg.com/564x/d4/43/7a/d4437a517853f243661df53cc1a34aa8.jpg");
INSERT into packages (hall_id,flowers_id,cakes_id,music_id, name , description,price,image_url) VALUES (6,6,6,6, "Traditional", "Anthropology. the primary established form of marriage recognized in a given country or religious or social group at a given time: In that culture, traditional marriage requires the families of the future bride and groom to engage in ritual visits and exchange gifts.", 12000,'https://pbs.twimg.com/media/D21oc4CWwAMHwAt.jpg');
INSERT into packages (hall_id,flowers_id,cakes_id,music_id, name , description,price,image_url) VALUES (7,7,7,7, "Islamic", "Muslim marriage and Islamic wedding customs are traditions and practices that relate to wedding ceremonies and marriage rituals prevailing within the Muslim world. Although Islamic marriage customs and relations vary depending on country of origin and government regulations, both Muslim men and women from around the world are guided by Islamic laws and practices specified in the Quran.", 7500,'https://www.weddingdetails.com/wp-content/uploads/2019/03/muslimwedding.jpg');
INSERT into packages (hall_id,flowers_id,cakes_id,music_id, name , description,price,image_url) VALUES (8,8,8,8,"Civil Ceremonies","A civil ceremony is simply a nonreligious, legal marriage ceremony presided over by a legal official instead of a religious one.",6500,'https://media-api.theknot.com/images/2b8e05ef-abe8-4b8d-8b33-ab2363ef3086');