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
INSERT into users ( firstName, lastName, address, zipCode, city, phone, username,email, password, flowers_id,cakes_id,music_id,hall_id) VALUES ("Chayma","Ben Thabet", "Nabeul", 2003,"Mrezga",23564789,"Chabe","chayma@gmail.com","25014",1,2,3,4);
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

INSERT into flowers (name,imageUrl,description,price,provider_id) VALUES ("Pin on Blush pink wedding","https://i.pinimg.com/originals/9e/96/50/9e9650b319b4438b2a14bd2fffd0f2e2.png","Walk down the aisle with the perfect bridal bouquet",150,20);

INSERT into flowers (name,imageUrl,description,price,provider_id) VALUES ("Spring Colors","https://i.pinimg.com/736x/9c/a0/64/9ca0648cc7e85f4bed3450326f1dd685--spring-wedding-bouquets-vintage-wedding-bouquets.jpg
","Get a polished look with our dashing boutonnieres.",200,20);

INSERT into flowers (name,imageUrl,description,price,provider_id) VALUES ("Bridesmaid Bouquets","https://i1.wp.com/www.perfete.com/wp-content/uploads/2016/12/designs-by-oochay-bouquet-best-of-aisle-perfect.jpg?resize=600%2C900","Complementing bridesmaid bouquets for your wedding day.",300,20);

INSERT into flowers (name,imageUrl,description,price,provider_id) VALUES ("Corsages","https://img.everafterguide.net/s/upload/images/2016/05/9b223f80105c152b47cda79dfc57405a.jpg","Gorgeous floral accessories for the special women in your life.",280,20);

INSERT into flowers (name,imageUrl,description,price,provider_id) VALUES ("Arrangements","https://i2.wp.com/yorkshiredalesflowers.co.uk/wp-content/uploads/2016/06/YDFC-British-34.jpg?fit=668%2C1000&ssl","Decorate your  wedding with amazing floral.",320,20);

INSERT into flowers (name,imageUrl,description,price,provider_id) VALUES ("White and greenery","https://i2.wp.com/onideal.com/wp-content/uploads/2020/01/8-diy-wedding-bouquets-005.jpg?fit=600%2C900&ssl=1&w=640","Looking for something sweet? Our Apple Cider Bouquet is the perfect pick. Even if you can't make it out to the orchard with your loved ones, add some warmth to their day with this stunning arrangement.",400,20);

INSERT into flowers (name,imageUrl,description,price,provider_id) VALUES ("Sweet Peas","https://i0.wp.com/artclick.gr/wp-content/uploads/2018/01/IMG_2017-1.jpg?fit=600%2C900&ssl=1"," To us, sweet peas are some of the most romantic flowers. They typically feature delicate petals and stems, so a bit of care is required.",350,20);

INSERT into flowers (name,imageUrl,description,price,provider_id) VALUES ("Camellias","https://i.pinimg.com/originals/bf/1d/5c/bf1d5c697043cc861a97065535de36b5.jpg","Camellias are one of winter's gems. Their petals are layered,",260,20);

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
","Spread the cheer with these scrumptious treats! Enjoy everything you love about wedding cakes, but in cupcake form. Splendid Cupcakes have basic décor with basic icing in your choice of color, and up to 3 flavors for 24 cupcakes. Rosette style frost and sprinkles upon request. ",3000,30);

INSERT into cakes (name,imageUrl,description,price,provider_id) VALUES ("Divine Cupcake","https://images.unsplash.com/photo-1559373098-e1caaccae791?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80
","Sweets for the sweethearts on their wedding day. Whether you want to treat yourselves or a couple of your closest friends and family, nothing says “I Love You” like a box of yummy cupcakes.",1560,30);

INSERT into cakes (name,imageUrl,description,price,provider_id) VALUES ("Soft Drama","https://i.pinimg.com/originals/ef/15/7c/ef157cbda6aa6cd153c860412fb93071.jpg","Dark wedding cakes don't always have to be moody and brooding. This stunner exudes a soft elegance with its floral-painted tier and accents of handmade sugar blossoms in powdery tones. ",4500,30);

INSERT into cakes (name,imageUrl,description,price,provider_id) VALUES ("Mixed Finishes","https://www.brides.com/thmb/1yCVqqxEz5LEXYgQHrcQq3EzAak=/1200x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/2018_12_01_katherinedavis_1030-f3d27388392d44be822e9b5dee2575bd.jpg","A matte white design is elevated with satin-finished petals and bursts of burnished tones. The autumnal hues hint at the sweet potato cake with candied pecan crunch and maple buttercream that lies beneath. ",3000,30);
INSERT into cakes (name,imageUrl,description,price,provider_id) VALUES ("Go for Gold","https://www.easyweddings.com.au/articles/wp-content/uploads/sites/5/2016/07/feb6a7bf-b067-4f6d-867b-ecf7834d8786-IMG_7053-709x900.jpg","This five-tiered wedding cake is a flourish of white and gold sugar flowers, trellising upwards through the layers. Inside, the cake features flavors of chocolate, salted caramel, and raspberry cream. ",2350,30);
INSERT into cakes (name,imageUrl,description,price,provider_id) VALUES ("Gold Standard","https://peonyeventsco.com/wp-content/uploads/2013/05/Gold-and-Silver-Metallic-Wedding-Cake-600x900.jpg","It doesn't get much more luxurious than this. Three tiers of white fondant brushed with metallic gold and one entire tier of of textured, gilded goodness all wrapped up in a fresh swag of pastel blossoms and greenery. ",2100,30);


CREATE TABLE music (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(255) NOT NULL,
  imageUrl varchar(700) NOT NULL,
  description varchar(1000) NOT NULL,
  price int NOT NULL,
  provider_id int NOT NULL,
   PRIMARY KEY (id)
);

INSERT into music (name,imageUrl,description,price,provider_id) VALUES ("Troupe les Emirs","https://marryme.tn/wp-content/uploads/2016/05/marryme_emirs94.jpg","Elegance, chic, virtuosity and refined taste are certainly our undeniable qualities. Troupe Les Emirs guarantees you a successful animation of your ceremonies thanks to a repertoire of varied modern and traditional music, and the participation of the greatest Tunisian and oriental stars.",9000,40);

INSERT into music (name,imageUrl,description,price,provider_id) VALUES ("Troupe Boudinar","https://lh3.googleusercontent.com/proxy/zORdJqm3Y-bqICAKOGHhHp_2ZzhTv8WpgtNFnN3yhvmo774K7969QtYscdhEnPEnb7XPb54oyHD5JsBIW4a_oCFSTVPnS8R-6sx2b7vbX7x1lrTmzwkdad8m","The Boudinar troupe by Riadh Boudinar enlivens your evenings with oriental and traditional music and offers you the best stars of Tunisian song.",15000,40);

INSERT into music (name,imageUrl,description,price,provider_id) VALUES ("Live Organ Music","https://www.hardrockcafe.com/location/port-el-kantaoui/files/5471/Manel_Amara_1.jpg","Fill the air with a traditional touch! Our live organist will play the traditional instrumental wedding music during your ceremony. Please contact your Personal Wedding Planner to make sure the organist is available for your ceremony. Not available in the Gazebo location.",12000,40);

INSERT into music (name,imageUrl,description,price,provider_id) VALUES ("Live Guitarist Music","https://upload.wikimedia.org/wikipedia/commons/0/04/Myrath_en_Madrid.jpg","Let our guitarist create a romantic setting for your special day. Performing traditional and contemporary wedding processional music, the sweet melodies from the guitar is sure to please you and your guests. Please contact your Personal Wedding Planner to make sure the guitarist is available for your ceremony.",18000,40);
INSERT into music (name,imageUrl,description,price,provider_id) VALUES ("CITY SOUNDS","https://www.entertainment-nation.co.uk/act_media/451/gallery/city-sounds1101914290.jpg","City Sounds are a luxury, contemporary pop, dance and soul band made up of some of the most exciting professional musicians. Fronted by an outstanding female vocalist, these high-intensity performers are renowned for their energetic stage presence and their extraordinary musical talent; it's no wonder they pack out dance floors wherever they perform!",16000,40);
INSERT into music (name,imageUrl,description,price,provider_id) VALUES ("CLIQUE","https://www.entertainment-nation.co.uk/act_media/923/gallery/clique1599676826.jpg","Ready to send your guests into a dance floor frenzy, Clique supply a show like no other! Regarded as one of the most exciting and professional function bands  right now, Clique are a premier choice for your occasion.",14000,40);
INSERT into music (name,imageUrl,description,price,provider_id) VALUES ("Troupe Ben Rhouma","https://1.bp.blogspot.com/-W3wPRJHCEEk/V9KiS6KTulI/AAAAAAAACyI/g4TdVOQyKTgq-e6nFjYgu26HVdzDEX6wwCLcB/s1600/12004090_513119625515679_3699832181586379979_n.jpg","Organization of wedding parties with the Musical Troupe Mohamed Ben Rhouma Aweda, Soulamia, Daklet Laaroussa, Egyptian Zaffa, Syrian Zaffa, Show Show, Organist Singer",7500,40);
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
","Many couples dream of getting married outdoors, and for good reason. A naturally beautiful venue, like a park or a garden, isn't just nice to look at; it also doesn't require too much additional décor, which can be great for your budget.",5500,50);

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

INSERT into packages (hall_id,flowers_id,cakes_id,music_id, name , description,price,image_url) VALUES (4,4,4,4, "Premium", "All-inclusive wedding with memorable on-site photo session and upgrades for newlyweds.", 9000,'https://dammfinefood.img-us3.com/VickiChin/long-way-home_jen-phuong-260.jpg');
INSERT into packages (hall_id,flowers_id,cakes_id,music_id, name , description,price,image_url) VALUES (5,5,5,5,"Classic","elicate white florals, plenty of lush greenery, light linens, and minimal decor: These tried and true wedding details will never go out of style. And if you're a bride who prefers timelessness over trends, we suggest planning your ceremony and reception in a classic wedding style.",1300,"https://vinesoftheyarravalley.com.au/wp-content/uploads/2020/06/bride-and-groom-1024x683.jpg");
INSERT into packages (hall_id,flowers_id,cakes_id,music_id, name , description,price,image_url) VALUES (6,6,6,6, "Traditional", "Anthropology. the primary established form of marriage recognized in a given country or religious or social group at a given time: In that culture, traditional marriage requires the families of the future bride and groom to engage in ritual visits and exchange gifts.", 12000,'https://s3.amazonaws.com/kissandtell.images/2c491706-b382-4770-af38-343cf7cfb81b-large.jpg');
INSERT into packages (hall_id,flowers_id,cakes_id,music_id, name , description,price,image_url) VALUES (7,7,7,7, "Islamic", "Muslim marriage and Islamic wedding customs are traditions and practices that relate to wedding ceremonies and marriage rituals prevailing within the Muslim world. Although Islamic marriage customs and relations vary depending on country of origin and government regulations, both Muslim men and women from around the world are guided by Islamic laws and practices specified in the Quran.", 7500,'https://www.weddingdetails.com/wp-content/uploads/2019/03/muslimwedding.jpg');
INSERT into packages (hall_id,flowers_id,cakes_id,music_id, name , description,price,image_url) VALUES (8,8,8,8,"Civil Ceremonies","A civil ceremony is simply a nonreligious, legal marriage ceremony presided over by a legal official instead of a religious one.",1050,'https://upload.wikimedia.org/wikipedia/en/9/9a/CivilCeremonySignWitness.jpg');