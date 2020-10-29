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
  price int NOT NULL, 
  provider_id int NOT NULL,
   PRIMARY KEY (id)
);

INSERT into flowers (name,imageUrl,description,price,provider_id) VALUES ("Bridal Bouquet","https://images.unsplash.com/photo-1550005809-91ad75fb315f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80
","Walk down the aisle with the perfect bridal bouquet",10000,20);

INSERT into flowers (name,imageUrl,description,price,provider_id) VALUES ("Boutonnières","https://images.unsplash.com/photo-1522231192900-4fbd354ff773?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80
","Get a polished look with our dashing boutonnieres.",20000,20);

INSERT into flowers (name,imageUrl,description,price,provider_id) VALUES ("Bridesmaid Bouquets","https://images.unsplash.com/photo-1587652398418-74fdd8cd7eca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80
","Complementing bridesmaid bouquets for your wedding day.",300000,20);

INSERT into flowers (name,imageUrl,description,price,provider_id) VALUES ("Corsages","https://images.unsplash.com/photo-1596885120231-67550e93546f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80
","Gorgeous floral accessories for the special women in your life.",400000,20);

INSERT into flowers (name,imageUrl,description,price,provider_id) VALUES ("Arrangements","https://images.unsplash.com/photo-1544586948-2a5ce9f6ef6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80
","Decorate your Las Vegas ceremony and reception with amazing floral.",500000,20);

CREATE TABLE cakes (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(255) NOT NULL,
  imageUrl varchar(255) NOT NULL,
  description  email varchar(255) NOT NULL,
  price int NOT NULL,
  provider_id int NOT NULL,
   PRIMARY KEY (id)
);

INSERT into cakes (name,imageUrl,description,price,provider_id) VALUES ("Splendide Wedding Cake","https://images.unsplash.com/photo-1535254973040-607b474cb50d?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80
","A simple cake for intimate celebration! This single-tier wedding cake is decorated with elegant icing dots or whimsical icing swirls and serves 8-10. Splendid Cakes will have choice of cake shape, flavor, filling and upgraded bling ribbon.",10000,30);

INSERT into cakes (name,imageUrl,description,price,provider_id) VALUES ("Divine Wedding Cake","https://images.unsplash.com/photo-1565987164841-7132b384293b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80
","Elegant cake for small wedding! The single-tier divine, gorgeous wedding cake serves 8-10 people and is decorated with exquisite icing dots or fancy icing swirls, beautiful ribbon and fresh roses. Divine Cakes will have choice of cake shape, flavor, filling, fresh roses, ribbon trim, and upgraded bling ribbon",20000,30);

INSERT into cakes (name,imageUrl,description,price,provider_id) VALUES ("Splendide Cupcake","https://images.unsplash.com/photo-1598295971175-d4ec5d2ff678?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80
","Spread the cheer with these scrumptious treats! Enjoy everything you love about wedding cakes, but in cupcake form. Splendid Cupcakes have basic décor with basic icing in your choice of color, and up to 3 flavors for 24 cupcakes. Rosette style frost and sprinkles upon request. ",30000,30);

INSERT into cakes (name,imageUrl,description,price,provider_id) VALUES ("Divine Cupcake","https://images.unsplash.com/photo-1559373098-e1caaccae791?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80
","Sweets for the sweethearts on their wedding day. Whether you want to treat yourselves or a couple of your closest friends and family, nothing says “I Love You” like a box of yummy cupcakes. Divine Cupcakes have basic icing in your choice of color with fondant flower or initials, and up to 2 flavors for 12 cupcakes. Rosette style frost and sprinkles upon request.",40000,30);


CREATE TABLE music (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(255) NOT NULL,
  imageUrl varchar(255) NOT NULL,
  description  email varchar(255) NOT NULL,
  price int NOT NULL,
  provider_id int NOT NULL,
   PRIMARY KEY (id)
);

INSERT into music (name,imageUrl,description,price,provider_id) VALUES ("Custom Music",":https://www.mariageatoutprix.com/wp-content/uploads/2020/02/yosra_plusbellesmari%C3%A9es225_mariagetunisien_wedding_bride2020-25.jpg","Walk down the aisle to a romantic ballad or your favorite tune. This custom music product will give allow you to add that personal touch to your ceremony. In order to use this product, your song(s) must be on a Bluetooth capable device that is already loaded to your playlist.",10000,40);

INSERT into music (name,imageUrl,description,price,provider_id) VALUES ("Elvis Sings and Marries You"," https://www.facebook.com/boudinarweddingplannerofficiel/photos/a.480941335286735/3218434108204097/?type=3&theater
","Have the ultimate “Viva Las Vegas” wedding by having Elvis marry you! The ceremony will begin by Elvis escorting the bride (or groom) down the aisle followed by singing three songs of your choice. After his amazing performance, he will conduct the ceremony and wed you. Please contact your Personal Wedding Planner to make sure Elvis is reserved for your special day.",20000,40);

INSERT into music (name,imageUrl,description,price,provider_id) VALUES ("Live Organ Music","https://scontent.ftun4-1.fna.fbcdn.net/v/t1.0-0/p180x540/118475028_2687774441477092_2264418653781176691_o.jpg?_nc_cat=105&cb=846ca55b-ee17756f&ccb=2&_nc_sid=8024bb&_nc_ohc=GnXYr4Lq_1IAX92_hqC&_nc_ht=scontent.ftun4-1.fna&tp=6&oh=0bc8196496be6cdbdc5fb04f4f4cab43&oe=5FC01DE5
","Fill the air with a traditional touch! Our live organist will play the traditional instrumental wedding music during your ceremony. Please contact your Personal Wedding Planner to make sure the organist is available for your ceremony. Not available in the Gazebo location.",30000,40);

INSERT into music (name,imageUrl,description,price,provider_id) VALUES ("Live Guitarist Music","https://marryme.tn/wp-content/uploads/2016/05/marryme_emirs94.jpg
","Let our guitarist create a romantic setting for your special day. Performing traditional and contemporary wedding processional music, the sweet melodies from the guitar is sure to please you and your guests. Please contact your Personal Wedding Planner to make sure the guitarist is available for your ceremony.",40000,40);



CREATE TABLE hall (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(255) NOT NULL,
  imageUrl varchar(255) NOT NULL,
  description  email varchar(255) NOT NULL,
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


 CREATE TABLE packages (
  id int NOT NULL AUTO_INCREMENT,
  hall_id INT NOT NULL,
  flowers_id INT NOT NULL,
  cakes_id INT NOT NULL,
  music_id INT NOT NULL,
  name varchar(255) NOT NULL,
  description varchar(255) NOT NULL,
  price INT NOT NULL,
     PRIMARY KEY (id)
);

INSERT into packages (hall_id,flowers_id,cakes_id,music_id, name , description,price) VALUES (0,0,0,0, "Basic", "Exchange vows with this intimate, personalized wedding package for two.", 12000  );

INSERT into packages (hall_id,flowers_id,cakes_id,music_id, name , description,price) VALUES (1,1,1,1,"Great","Promise forever with this vow renewal package for 6 guests.",15000);

INSERT into packages (hall_id,flowers_id,cakes_id,music_id, name , description,price) VALUES (2,2,2,2, "Fabulous", "Tie the knot in a romantic Vegas wedding ceremony, with flowers, photos, and limo to chapel.", 20000);

INSERT into packages (hall_id,flowers_id,cakes_id,music_id, name , description,price) VALUES (3,3,3,3, "Premium", "All-inclusive wedding with memorable on-site photo session and upgrades for newlyweds.", 25000);