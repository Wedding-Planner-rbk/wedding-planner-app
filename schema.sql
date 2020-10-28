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

INSERT into users ( firstName, lastName, address, zipCode, city, phone, username,email, password, flowers_id,cakes_id,music_id,hall_id) VALUES ("Haykel","Hadj Salem", "Sousse", 2002,"Khzema",22555666,"Hayha","12345",NULL,NULL,NULL,NULL);
INSERT into users ( firstName, lastName, address, zipCode, city, phone, username,email, password, flowers_id,cakes_id,music_id,hall_id) VALUES ("Nadim","Barkati", "Tunis", 2001,"Bardo",20555666,"Naba","123456",NULL,NULL,NULL,NULL);
INSERT into users ( firstName, lastName, address, zipCode, city, phone, username,email, password, flowers_id,cakes_id,music_id,hall_id) VALUES ("Chayma","Ben Thabet", "Nabeul", 2003,"Mrezga",23564789,"Chabe","25014",NULL,NULL,NULL,NULL);
INSERT into users ( firstName, lastName, address, zipCode, city, phone, username,email, password, flowers_id,cakes_id,music_id,hall_id) VALUES ("Dhia","Fattoum", "Gafsa", 2005,"Ville",24589647,"Dhifa","20546",NULL,NULL,NULL,NULL);
INSERT into users ( firstName, lastName, address, zipCode, city, phone, username,email, password, flowers_id,cakes_id,music_id,hall_id) VALUES ("Issam","Ben Mansour", "Sfax", 2004,"Gremda",20145365,"Isbe","25631",NULL,NULL,NULL,NULL);
INSERT into users ( firstName, lastName, address, zipCode, city, phone, username,email, password, flowers_id,cakes_id,music_id,hall_id) VALUES ("Hanen","loulou", "Gabes", 2022,"Hamma",23145678,"halou","12345678",NULL,NULL,NULL,NULL);
INSERT into users ( firstName, lastName, address, zipCode, city, phone, username,email, password, flowers_id,cakes_id,music_id,hall_id) VALUES ("Alex","Khbou", "Sfax", 2021,"Afrane",89654122,"Akh","3456789",NULL,NULL,NULL,NULL);
INSERT into users ( firstName, lastName, address, zipCode, city, phone, username,email, password, flowers_id,cakes_id,music_id,hall_id) VALUES ("Larissa","Bellucci", "Italia", 30125,"Milano",21365478,"Labe","0231456",NULL,NULL,NULL,NULL);
INSERT into users ( firstName, lastName, address, zipCode, city, phone, username,email, password, flowers_id,cakes_id,music_id,hall_id) VALUES ("Dhia","Mbarki", "Mhamdia", 3014,"Village",89541200,"Dhmb","3654789",NULL,NULL,NULL,NULL);
INSERT into users ( firstName, lastName, address, zipCode, city, phone, username,email, password, flowers_id,cakes_id,music_id,hall_id) VALUES ("Nesrine","Abid", "Ariana", 2004,"Sokra",97485632,"Neb","6987452",NULL,NULL,NULL,NULL);


 CREATE TABLE provider (
  id int NOT NULL AUTO_INCREMENT,
  firstName varchar(255) NOT NULL,
  speciality varchar(255) NOT NULL,
  username varchar(255) NOT NULL,
  email varchar(255) NOT NULL,
  password varchar(255) NOT NULL,
  provider_id int NOT NULL,
   PRIMARY KEY (id)
);

INSERT into provider ( firstName, speciality, username,email, password, provider_id) VALUES ("Mourad","Photography", "mouphot", "mouradpoto@mourad.com","12345",10);
INSERT into provider ( firstName, speciality, username,email, password, provider_id) VALUES ("Alaa","Flowers", "Af", "alaaflo@alaaflo.com","123456",20);
INSERT into provider ( firstName, speciality, username,email, password, provider_id) VALUES ("Dhia","Cakes", "Dhc", "dhiacake@dhiacake.com","23456",30);
INSERT into provider ( firstName,speciality, username,email, password, provider_id) VALUES ("Ahmed","Music", "ahmu", "ahmedmusic@ahmedmusic.com","34567",40);
INSERT into provider ( firstName, speciality, username,email, password, provider_id) VALUES ("Hela","Wedding", "helawed", "helawed@helawed.com","12345",50);

CREATE TABLE flowers (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(255) NOT NULL,
  imageUrl varchar(255) NOT NULL,
  description  email varchar(255) NOT NULL,
  flowers_id int NOT NULL, 
  provider_id int NOT NULL,
   PRIMARY KEY (id)
);

INSERT into flowers (name,imageUrl,description,flowers_id,provider_id) VALUES ("Bridal Bouquet","URL","Walk down the aisle with the perfect bridal bouquet",100,20);

INSERT into flowers (name,imageUrl,description,flowers_id,provider_id) VALUES ("Boutonnières","URL","Get a polished look with our dashing boutonnieres.",200,20);

INSERT into flowers (name,imageUrl,description,flowers_id,provider_id) VALUES ("Bridesmaid Bouquets","URL","Complementing bridesmaid bouquets for your wedding day.",300,20);

INSERT into flowers (name,imageUrl,description,flowers_id,provider_id) VALUES ("Corsages","URL","Gorgeous floral accessories for the special women in your life.",400,20);

INSERT into flowers (name,imageUrl,description,flowers_id,provider_id) VALUES ("Arrangements","URL","Decorate your Las Vegas ceremony and reception with amazing floral.",500,20);

CREATE TABLE cakes (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(255) NOT NULL,
  imageUrl varchar(255) NOT NULL,
  description  email varchar(255) NOT NULL,
  cakes_id int NOT NULL,
  provider_id int NOT NULL,
   PRIMARY KEY (id)
);

INSERT into cakes (name,imageUrl,description,cakes_id,provider_id) VALUES ("Splendide Wedding Cake","URL","A simple cake for intimate celebration! This single-tier wedding cake is decorated with elegant icing dots or whimsical icing swirls and serves 8-10. Splendid Cakes will have choice of cake shape, flavor, filling and upgraded bling ribbon.",11,30);

INSERT into cakes (name,imageUrl,description,cakes_id,provider_id) VALUES ("Divine Wedding Cake","URL","Elegant cake for small wedding! The single-tier divine, gorgeous wedding cake serves 8-10 people and is decorated with exquisite icing dots or fancy icing swirls, beautiful ribbon and fresh roses. Divine Cakes will have choice of cake shape, flavor, filling, fresh roses, ribbon trim, and upgraded bling ribbon",111,30);

INSERT into cakes (name,imageUrl,description,cakes_id,provider_id) VALUES ("Splendide Cupcake","URL","Spread the cheer with these scrumptious treats! Enjoy everything you love about wedding cakes, but in cupcake form. Splendid Cupcakes have basic décor with basic icing in your choice of color, and up to 3 flavors for 24 cupcakes. Rosette style frost and sprinkles upon request. ",1111,30);

INSERT into cakes (name,imageUrl,description,cakes_id,provider_id) VALUES ("Divine Cupcake","URL","Sweets for the sweethearts on their wedding day. Whether you want to treat yourselves or a couple of your closest friends and family, nothing says “I Love You” like a box of yummy cupcakes. Divine Cupcakes have basic icing in your choice of color with fondant flower or initials, and up to 2 flavors for 12 cupcakes. Rosette style frost and sprinkles upon request.",11111,30);


CREATE TABLE music (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(255) NOT NULL,
  imageUrl varchar(255) NOT NULL,
  description  email varchar(255) NOT NULL,
  music_id int NOT NULL,
  provider_id int NOT NULL,
   PRIMARY KEY (id)
);

INSERT into music (name,imageUrl,description,music_id,provider_id) VALUES ("Custom Music","URL","Walk down the aisle to a romantic ballad or your favorite tune. This custom music product will give allow you to add that personal touch to your ceremony. In order to use this product, your song(s) must be on a Bluetooth capable device that is already loaded to your playlist.",22,40);

INSERT into music (name,imageUrl,description,music_id,provider_id) VALUES ("Elvis Sings and Marries You","URL","Have the ultimate “Viva Las Vegas” wedding by having Elvis marry you! The ceremony will begin by Elvis escorting the bride (or groom) down the aisle followed by singing three songs of your choice. After his amazing performance, he will conduct the ceremony and wed you. Please contact your Personal Wedding Planner to make sure Elvis is reserved for your special day.",222,40);

INSERT into music (name,imageUrl,description,music_id,provider_id) VALUES ("Live Organ Music","URL","Fill the air with a traditional touch! Our live organist will play the traditional instrumental wedding music during your ceremony. Please contact your Personal Wedding Planner to make sure the organist is available for your ceremony. Not available in the Gazebo location.",2222,40);

INSERT into music (name,imageUrl,description,music_id,provider_id) VALUES ("Live Guitarist Music","URL","Let our guitarist create a romantic setting for your special day. Performing traditional and contemporary wedding processional music, the sweet melodies from the guitar is sure to please you and your guests. Please contact your Personal Wedding Planner to make sure the guitarist is available for your ceremony.",22222,40);



CREATE TABLE hall (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(255) NOT NULL,
  imageUrl varchar(255) NOT NULL,
  description  email varchar(255) NOT NULL,
  hall_id int NOT NULL,
  provider_id int NOT NULL,
   PRIMARY KEY (id)
);



INSERT into hall (name,imageUrl,description,hall_id,provider_id) VALUES ("The Glass Gardens","URL","Have an enchanting wedding in this rustic-chic garden chapel. Surrounded by greenery, faux wood planked walls, and custom lighting, the Glass Gardens is the most unique and romantic garden venue in the city.",33,50);

INSERT into hall (name,imageUrl,description,hall_id,provider_id) VALUES ("The Gazebo","URL","Surrounded by lush landscaping and mature trees, this romantic al fresco Las Vegas Strip location is a favorite for photographs or a quaint outdoor ceremony. In the evening, luminous white lights create an enchanted glow from within.",333,50);

INSERT into hall (name,imageUrl,description,hall_id,provider_id) VALUES ("Grand Canyon","URL","The unmatched natural beauty of the awe-inspiring Grand Canyon will be the setting as you exchange vows. The helicopter flight from Las Vegas to the Grand Canyon includes flights over Lake Mead, Hoover Dam, and the Vegas strip.",3333,50);

INSERT into hall (name,imageUrl,description,hall_id,provider_id) VALUES ("Valley Of Fire","URL","Celebrate your Las Vegas wedding ceremony in the midst of dramatic, fiery red sandstone formations. Just 45 minutes from the Chapel is the Valley of Fire, a Nevada state park that contains brilliant sandstone more than 150 million years old.",33333,50);

INSERT into hall (name, imageUrl, description,hall_id,provider_id) VALUES("High Roller", "URL", "The ultimate Las Vegas wedding is located 550 feet above the neon lights creating a truly romantic experience. In the heart of the Las Vegas Strip, the High Roller Observation Wheel has become a must-see tourist attraction, and popular Vegas wedding venue for sunset wedding ceremonies and intimate vow renewals.",333333,50);


 CREATE TABLE packages (
  id int NOT NULL AUTO_INCREMENT,
  hall_id INT NOT NULL,
  flowers_id INT NOT NULL,
  cakes_id INT NOT NULL,
  music_id INT NOT NULL,
  name varchar(255) NOT NULL,
  description varchar(255) NOT NULL,
  price INT NOT NULL,
  imageUrl varchar(255) NOT NULL,
     PRIMARY KEY (id)
);

INSERT into packages (hall_id,flowers_id,cakes_id,music_id, name , description, imageUrl) VALUES (33,100,11,22, Basic, "Exchange vows with this intimate, personalized wedding package for two.", 12000 ,"URL" );

INSERT into packages (hall_id,flowers_id,cakes_id,music_id, name , description, imageUrl) VALUES (333,200,111,222, Great,"Promise forever with this vow renewal package for 6 guests.",15000,"URL");

INSERT into packages (hall_id,flowers_id,cakes_id,music_id, name , description, imageUrl) VALUES (3333,300,1111,2222, Fabulous, "Tie the knot in a romantic Vegas wedding ceremony, with flowers, photos, and limo to chapel.", 20000, "URL");

INSERT into packages (hall_id,flowers_id,cakes_id,music_id, name , description, imageUrl) VALUES (33333,400,11111,22222, Premium, "All-inclusive wedding with memorable on-site photo session and upgrades for newlyweds.", 25000, "URL");