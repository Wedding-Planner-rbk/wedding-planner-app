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
","Decorate your  wedding with amazing floral.",450000,20);

INSERT into flowers (name,imageUrl,description,price,provider_id) VALUES ("White and greenery","https://i.pinimg.com/originals/97/70/c1/9770c1d5347796222f4c615281ea43bc.jpg","Looking for something sweet? Our Apple Cider Bouquet is the perfect pick. Even if you can't make it out to the orchard with your loved ones, add some warmth to their day with this stunning arrangement.",55000,20);

INSERT into flowers (name,imageUrl,description,price,provider_id) VALUES ("Sweet Peas","https://www.thespruce.com/thmb/Pj-wfDmVJ3zVoaa58yqtqo7Qb_M=/1000x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/3_WinterWeddingFlowers_TheSpruce_SweetPeaBouquet_Brides-5c26ce44c9e77c000142b9ba.jpeg"," To us, sweet peas are some of the most romantic flowers. They typically feature delicate petals and stems, so a bit of care is required.",750000,20);

INSERT into flowers (name,imageUrl,description,price,provider_id) VALUES ("Camellias","https://image.dhgate.com/0x0s/f2-albu-g6-M00-37-61-rBVaR1t1dDSAGNlCAALFWCeNaOI592.jpg/wedding-bouquet-dusty-rose-bridal-bouquet.jpg","Camellias are one of winter’s gems. Their petals are layered,",560000,20);

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
","A simple cake for intimate celebration! This single-tier wedding cake is decorated with elegant icing dots or whimsical icing swirls and serves 8-10.",3500,30);

INSERT into cakes (name,imageUrl,description,price,provider_id) VALUES ("Divine Wedding Cake","https://images.unsplash.com/photo-1565987164841-7132b384293b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80
","Elegant cake for small wedding! The single-tier divine, gorgeous wedding cake serves 8-10 people and is decorated with exquisite icing dots or fancy icing swirls, beautiful ribbon and fresh roses. ",2830,30);

INSERT into cakes (name,imageUrl,description,price,provider_id) VALUES ("Splendide Cupcake","https://images.unsplash.com/photo-1598295971175-d4ec5d2ff678?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80
","Spread the cheer with these scrumptious treats! Enjoy everything you love about wedding cakes, but in cupcake form. Splendid Cupcakes have basic décor with basic icing in your choice of color, and up to 3 flavors for 24 cupcakes. Rosette style frost and sprinkles upon request. ",30000,30);

INSERT into cakes (name,imageUrl,description,price,provider_id) VALUES ("Divine Cupcake","https://images.unsplash.com/photo-1559373098-e1caaccae791?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80
","Sweets for the sweethearts on their wedding day. Whether you want to treat yourselves or a couple of your closest friends and family, nothing says “I Love You” like a box of yummy cupcakes.",1560,30);

INSERT into cakes (name,imageUrl,description,price,provider_id) VALUES ("Soft Drama","https://www.brides.com/thmb/U-wCf25O2d7Yxp5b-43F5JEZQ3E=/1200x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__brides__public__brides-services__production__2018__02__05__5a78d4e0ed51d62c2dcc7bac_45Stewart20Uy20Photography20-20Vanilla20Bake20Shop-571318441b974e7697dfdd230aa5f269.jpg","Dark wedding cakes don't always have to be moody and brooding. This stunner exudes a soft elegance with its floral-painted tier and accents of handmade sugar blossoms in powdery tones. ",4500,30);

INSERT into cakes (name,imageUrl,description,price,provider_id) VALUES ("Mixed Finishes","https://www.brides.com/thmb/1yCVqqxEz5LEXYgQHrcQq3EzAak=/1200x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/2018_12_01_katherinedavis_1030-f3d27388392d44be822e9b5dee2575bd.jpg","A matte white design is elevated with satin-finished petals and bursts of burnished tones. The autumnal hues hint at the sweet potato cake with candied pecan crunch and maple buttercream that lies beneath. ",3000,30);
INSERT into cakes (name,imageUrl,description,price,provider_id) VALUES ("Go for Gold","https://www.brides.com/thmb/fH-_o6Xj8LzR4YIC3k09YyClRKM=/1200x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/adf-d7e15f1bc05242b7998bdd279c4bde09.png","This five-tiered wedding cake is a flourish of white and gold sugar flowers, trellising upwards through the layers. Inside, the cake features flavors of chocolate, salted caramel, and raspberry cream. ",2350,30);
INSERT into cakes (name,imageUrl,description,price,provider_id) VALUES ("Gold Standard","https://www.brides.com/thmb/JJyxIccULWH8l0sxSk26LgVjM6M=/1200x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__brides__public__brides-services__production__2018__02__05__5a78d6d7d4df622f42debe67_Fox20Tail20Cake20Shop-f1b71cb183a74a5f8b823bf7b052b7e8.jpg","It doesn't get much more luxurious than this. Three tiers of white fondant brushed with metallic gold and one entire tier of of textured, gilded goodness all wrapped up in a fresh swag of pastel blossoms and greenery. ",2100,30);


CREATE TABLE music (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(255) NOT NULL,
  imageUrl varchar(700) NOT NULL,
  description varchar(1000) NOT NULL,
  price int NOT NULL,
  provider_id int NOT NULL,
   PRIMARY KEY (id)
);

INSERT into music (name,imageUrl,description,price,provider_id) VALUES ("Troupe les émirs","https://marryme.tn/wp-content/uploads/2016/05/marryme_emirs94.jpg","Elegance, chic, virtuosity and refined taste are certainly our undeniable qualities. Troupe Les Emirs guarantees you a successful animation of your ceremonies thanks to a repertoire of varied modern and traditional music, and the participation of the greatest Tunisian and oriental stars.",9000,40);

INSERT into music (name,imageUrl,description,price,provider_id) VALUES ("Troupe Boudinar"," https://lh3.googleusercontent.com/proxy/lQ6Y_EAYezczLTzIQMRZQxIGiH6rsT8zN20ls7S5RAqJoUxb9EGobLBlwm2Z8mGZd2Y2mnI0R4td4Swf-B5_DWPcJB3VY21fVvn5nolHBly7LqCxIu51D3pS
","The Boudinar troupe by Riadh Boudinar enlivens your evenings with oriental and traditional music and offers you the best stars of Tunisian song.",15000,40);

INSERT into music (name,imageUrl,description,price,provider_id) VALUES ("Live Organ Music","https://scontent.ftun4-1.fna.fbcdn.net/v/t1.0-0/p180x540/118475028_2687774441477092_2264418653781176691_o.jpg?_nc_cat=105&cb=846ca55b-ee17756f&ccb=2&_nc_sid=8024bb&_nc_ohc=GnXYr4Lq_1IAX92_hqC&_nc_ht=scontent.ftun4-1.fna&tp=6&oh=0bc8196496be6cdbdc5fb04f4f4cab43&oe=5FC01DE5
","Fill the air with a traditional touch! Our live organist will play the traditional instrumental wedding music during your ceremony. Please contact your Personal Wedding Planner to make sure the organist is available for your ceremony. Not available in the Gazebo location.",12000,40);

INSERT into music (name,imageUrl,description,price,provider_id) VALUES ("Live Guitarist Music","https://marryme.tn/wp-content/uploads/2016/05/marryme_emirs94.jpg","Let our guitarist create a romantic setting for your special day. Performing traditional and contemporary wedding processional music, the sweet melodies from the guitar is sure to please you and your guests. Please contact your Personal Wedding Planner to make sure the guitarist is available for your ceremony.",18000,40);
INSERT into music (name,imageUrl,description,price,provider_id) VALUES ("CITY SOUNDS","https://www.entertainment-nation.co.uk/act_media/451/gallery/city-sounds1101914290.jpg","City Sounds are a luxury, contemporary pop, dance and soul band made up of some of the most exciting professional musicians. Fronted by an outstanding female vocalist, these high-intensity performers are renowned for their energetic stage presence and their extraordinary musical talent; it's no wonder they pack out dance floors wherever they perform!",16000,40);
INSERT into music (name,imageUrl,description,price,provider_id) VALUES ("CLIQUE","https://www.entertainment-nation.co.uk/act_media/923/gallery/clique1599676826.jpg","Ready to send your guests into a dance floor frenzy, Clique supply a show like no other! Regarded as one of the most exciting and professional function bands  right now, Clique are a premier choice for your occasion.",14000,40);
INSERT into music (name,imageUrl,description,price,provider_id) VALUES ("Troupe Ben Rhouma","https://3ersi.tn/uploads/411/1568023063_Cov.png","Organization of wedding parties with the Musical Troupe Mohamed Ben Rhouma Aweda, Soulamia, Daklet Laaroussa, Egyptian Zaffa, Syrian Zaffa, Show Show, Organist Singer",7500,40);
INSERT into music (name,imageUrl,description,price,provider_id) VALUES ("Troupe El Heni","https://1.bp.blogspot.com/-Unjwex41RHQ/VdeyGH7CnCI/AAAAAAAAHPs/WWgfg17dMTg/s1600/Elheni%2B%25282%2529.jpg","One Agency with several services. Our job and our mission on a daily basis. El Heni, is at your service for your events, events or organizations. It guarantees you, punctuality, professionalism and atmosphere with a plethora of musicians and professional singers.",11000,40);


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

INSERT into hall (name,imageUrl,description,price,provider_id) VALUES ("The Gazebo","https://media.mehrnews.com/d/2018/05/01/4/2773043.jpg
","Surrounded by lush landscaping and mature trees, this romantic al fresco Las Vegas Strip location is a favorite for photographs or a quaint outdoor ceremony. In the evening, luminous white lights create an enchanted glow from within.",8000,50);

INSERT into hall (name,imageUrl,description,price,provider_id) VALUES ("Dar Fattoum","https://scontent.ftun12-1.fna.fbcdn.net/v/t1.0-9/111385662_1201630406837963_3483036113087146681_o.jpg?_nc_cat=110&ccb=2&_nc_sid=8bfeb9&_nc_ohc=lPoDGp-Lg9IAX_j-8pJ&_nc_ht=scontent.ftun12-1.fna&oh=2b07d94cb55af06fdb8de129bef76346&oe=5FC106AB
","Many couples dream of getting married outdoors, and for good reason. A naturally beautiful venue, like a park or a garden, isn’t just nice to look at; it also doesn’t require too much additional décor, which can be great for your budget.",5500,50);

INSERT into hall (name,imageUrl,description,price,provider_id) VALUES ("Le Prestige","https://3ersi.tn/uploads/206/images/espacefeteprestige_1474062166.jpg
","Nouvel Espace le Prestige, situé à Béni-Khalled, route de Korba- à 20 mètres de l'usine Bosh ( Gouvernorat de Nabeul) vous souhaite la bienvenue! De plus, nous réservons à nos future mariés une belle suprise pour leur mariage !",11000,50);

INSERT into hall (name, imageUrl, description,price,provider_id) VALUES("Happy House", "https://hevents.tn/wp-content/uploads/2018/09/happy-house-ariana-0-1.jpg", "Espace Happy House welcomes your parties and weddings in its sublime space with an original decoration.
The quality of the service and the staff will make your parties unforgettable.",15000,50);

INSERT into hall (name,imageUrl,description,price,provider_id) VALUES ("Podium","http://www.recherchesalle.com/Upload/images/20148/1862050.jpeg","To make your wedding ceremonies, cocktail parties, professional meetings unforgettable moments Podium opens its high-end, refined multipurpose space with a very designer architecture and a warm atmosphere.",8000,50);
INSERT into hall (name,imageUrl,description,price,provider_id) VALUES ("the Muckenthaler Mansion ","https://cdn.wedding-spot.com/__sized__/images/venues/4149/Muckenthaler-Mansion-Fullerton-CA-b7c56a9a-245e-47b8-bfa9-f3ed02b69490-97450e389c42885476f1fbe9bc5bca5a.jpg","Located on 9 acres of gorgeous park-like grounds, the Muckenthaler Mansion is the perfect place for your fun yet elegant wedding ceremony and reception. With a vista of gently rolling gardens, swaying palms, and picturesque architecture, it is the ideal space for your special day.",12000,50);
INSERT into hall (name,imageUrl,description,price,provider_id) VALUES ("Bellagio Events","https://scontent.fymy1-1.fna.fbcdn.net/v/t1.0-0/p180x540/121819454_2451646824960276_538493974910508205_o.jpg?_nc_cat=102&_nc_sid=110474&_nc_ohc=74Oa7hxcDN0AX9DPg3V&_nc_ht=scontent.fymy1-1.fna&tp=6&oh=b8c74b4e693b7a660efca5b1185bbf36&oe=5FB1AD98","In a beautiful location on the road to Bizerte, the Bellagio Events party room opens its doors to you to organize your event in a warm atmosphere. Find the Bellagio Events in a lounge and luxurious atmosphere, the establishment welcomes you as part of your wedding day. ",8600,50);

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

INSERT into packages (hall_id,flowers_id,cakes_id,music_id, name , description,price,image_url) VALUES (1,1,1,1, "Basic", "Exchange vows with this intimate, personalized wedding package for two.", 15000, 'https://bbc136b7ae3badc49324-4505d403f77dee961d206e5b048c01ea.ssl.cf3.rackcdn.com/SeDireOui/web/modele-business-plan-wedding-planner-thumb.jpg'  );

INSERT into packages (hall_id,flowers_id,cakes_id,music_id, name , description,price,image_url) VALUES (2,2,2,2,"Great","Promise forever with this vow renewal package for 6 guests.",10000,'https://www.mariage.com/wp-content/uploads/2016/04/une-mariage-papiers.jpg');

INSERT into packages (hall_id,flowers_id,cakes_id,music_id, name , description,price,image_url) VALUES (3,3,3,3, "Fabulous", "Tie the knot in a romantic wedding ceremony, with flowers, photos.", 1200,'https://www.mariage.com/wp-content/uploads/2016/02/une-mariage-romantique.jpg');

INSERT into packages (hall_id,flowers_id,cakes_id,music_id, name , description,price,image_url) VALUES (4,4,4,4, "Premium", "All-inclusive wedding with memorable on-site photo session and upgrades for newlyweds.", 9000,'https://file.weddingchicks.com/662169_jesi-haack-wedding.jpg');
INSERT into packages (hall_id,flowers_id,cakes_id,music_id, name , description,price,image_url) VALUES (5,5,5,5,"Classic","elicate white florals, plenty of lush greenery, light linens, and minimal decor: These tried and true wedding details will never go out of style. And if you're a bride who prefers timelessness over trends, we suggest planning your ceremony and reception in a classic wedding style.",1300,"https://i.pinimg.com/564x/d4/43/7a/d4437a517853f243661df53cc1a34aa8.jpg");
INSERT into packages (hall_id,flowers_id,cakes_id,music_id, name , description,price,image_url) VALUES (6,6,6,6, "Traditional", "Anthropology. the primary established form of marriage recognized in a given country or religious or social group at a given time: In that culture, traditional marriage requires the families of the future bride and groom to engage in ritual visits and exchange gifts.", 12000,'https://pbs.twimg.com/media/D21oc4CWwAMHwAt.jpg');
INSERT into packages (hall_id,flowers_id,cakes_id,music_id, name , description,price,image_url) VALUES (7,7,7,7, "Islamic", "Muslim marriage and Islamic wedding customs are traditions and practices that relate to wedding ceremonies and marriage rituals prevailing within the Muslim world. Although Islamic marriage customs and relations vary depending on country of origin and government regulations, both Muslim men and women from around the world are guided by Islamic laws and practices specified in the Quran.", 7500,'https://www.weddingdetails.com/wp-content/uploads/2019/03/muslimwedding.jpg');
INSERT into packages (hall_id,flowers_id,cakes_id,music_id, name , description,price,image_url) VALUES (8,8,8,8,"Civil Ceremonies","A civil ceremony is simply a nonreligious, legal marriage ceremony presided over by a legal official instead of a religious one.",1050,'https://media-api.theknot.com/images/2b8e05ef-abe8-4b8d-8b33-ab2363ef3086');