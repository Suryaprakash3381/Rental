const mongoose = require('mongoose');
const Car = require('./model.js');

const MONGO_URI =  'mongodb://localhost:27017/mydatabase';


    // Add your raw data here

const cars = [
  {
    "Carname": "Rolls-Royce Phantom",
    "Model": "Phantom Series II",
    "Year": 2023,
    "Price": 4500,
    "Image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnp3kTIUsstLsULcZmuK_itZCSj3nnplkRgg&s",
    "Description": "The ultimate expression of luxury and prestige."
  },
  {
    "Carname": "Lamborghini Aventador",
    "Model": "LP 780-4 Ultimae",
    "Year": 2022,
    "Price": 3800,
    "Image": "https://media.gq-magazine.co.uk/photos/5d13ad1aeef92171f5a0072b/16:9/w_2560%2Cc_limit/aventador-04-gq-24aug18_b.jpg",
    "Description": "A naturally aspirated V12 supercar with striking presence."
  },
  {
    "Carname": "Ferrari 812 Superfast",
    "Model": "812 Superfast",
    "Year": 2022,
    "Price": 3600,
    "Image": "https://www.ferrarisiliconvalley.com/static/dealer-20428/812_Superfas-interior.jpeg",
    "Description": "A thrilling ride with Ferrari’s front-engine V12."
  },
  {
    "Carname": "Bentley Continental GT",
    "Model": "W12 Speed",
    "Year": 2023,
    "Price": 3200,
    "Image": "https://www.hdwallpapers.in/download/bentley_continental_gt_mulliner_2020_4k_hd_cars-HD.jpg",
    "Description": "Luxury grand tourer with refined power."
  },
  {
    "Carname": "Mercedes-Benz S-Class",
    "Model": "S580 4MATIC",
    "Year": 2023,
    "Price": 2500,
    "Image": "https://motoringworld.in/wp-content/uploads/2020/09/Mercedes-Benz-S-Class-3-Copy.jpg",
    "Description": "Elegance and innovation in a flagship sedan."
  },
  {
    "Carname": "Porsche Panamera",
    "Model": "Turbo S E-Hybrid",
    "Year": 2023,
    "Price": 2900,
    "Image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDMMJ-REyls-_9qMvtN1Xeo0IZAqMflK1gwA&s",
    "Description": "Performance meets executive comfort."
  },
  {
    "Carname": "Aston Martin DB11",
    "Model": "V12 AMR",
    "Year": 2021,
    "Price": 3100,
    "Image": "https://images5.alphacoders.com/941/941921.jpg",
    "Description": "British style and grand touring power."
  },
  {
    "Carname": "Maserati Quattroporte",
    "Model": "Trofeo",
    "Year": 2022,
    "Price": 2700,
    "Image": "https://imgd.aeplcdn.com/664x374/ec/C3/6B/10799/img/l/Maserati-Quattroporte-Right-Front-Three-Quater-18513.jpg?v=201711021421&q=80",
    "Description": "Luxury Italian sedan with Ferrari V8."
  },
  {
    "Carname": "McLaren GT",
    "Model": "Grand Tourer",
    "Year": 2023,
    "Price": 3400,
    "Image": "https://www.redmond-reporter.com/wp-content/uploads/2021/08/26215892_web1_lark-mclaren-allkc-210820-crop_1.jpg",
    "Description": "Lightweight touring with track-ready performance."
  },
  {
    "Carname": "BMW 7 Series",
    "Model": "760i xDrive",
    "Year": 2023,
    "Price": 2400,
    "Image": "https://i.pinimg.com/736x/4c/bc/6f/4cbc6f4066180d38d38342dcdafe5500.jpg",
    "Description": "Innovation meets business class luxury."
  },
  {
    "Carname": "Audi A8",
    "Model": "A8 L 60 TFSI",
    "Year": 2022,
    "Price": 2300,
    "Image": "https://images5.alphacoders.com/449/449974.jpg",
    "Description": "Executive luxury with quattro handling."
  },
  {
    "Carname": "Jaguar XJ",
    "Model": "XJ50",
    "Year": 2020,
    "Price": 2100,
    "Image": "https://img.autocarindia.com/ExtraImages/20130327063448_eaggmv.jpg",
    "Description": "Classic British design with modern flair."
  },
  {
    "Carname": "Cadillac CT6",
    "Model": "Platinum AWD",
    "Year": 2020,
    "Price": 2000,
    "Image": "https://images.cars.com/cldstatic/wp-content/uploads/1414055412-1427914052021.jpg",
    "Description": "American full-size sedan with luxury appeal."
  },
  {
    "Carname": "Tesla Model S",
    "Model": "Plaid",
    "Year": 2023,
    "Price": 2700,
    "Image": "https://images6.alphacoders.com/478/478443.jpg",
    "Description": "Electric speed and futuristic luxury."
  },
  {
    "Carname": "Rolls-Royce Ghost",
    "Model": "Black Badge",
    "Year": 2023,
    "Price": 4300,
    "Image": "https://www.hdcarwallpapers.com/download/rolls_royce_ghost_2020_5k_interior_3-3840x2160.jpg",
    "Description": "Understated luxury with effortless power."
  },
  {
    "Carname": "Lexus LS",
    "Model": "500h",
    "Year": 2022,
    "Price": 2200,
    "Image": "https://www.hdcarwallpapers.com/download/lexus_ls_500h_2021_5k_interior-5120x2880.jpg",
    "Description": "Quiet and efficient Japanese executive sedan."
  },
  {
    "Carname": "Genesis G90",
    "Model": "3.5T E-Supercharger AWD",
    "Year": 2023,
    "Price": 2000,
    "Image": "https://media.ed.edmunds-media.com/genesis/g90/2025/oem/2025_genesis_g90_sedan_35t-e-supercharger_fq_oem_1_1280.jpg",
    "Description": "Korean refinement in full-size luxury."
  },
  {
    "Carname": "Mercedes-Maybach S-Class",
    "Model": "S680 4MATIC",
    "Year": 2023,
    "Price": 5000,
    "Image": "https://www.carpixel.net/w/a1c203ed6b965bbbe41c29996c0e9676/mercedes-maybach-s-class-wallpaper-hd-104860.jpg",
    "Description": "Ultra-luxury flagship with limousine comfort."
  },
  {
    "Carname": "Bentley Flying Spur",
    "Model": "V8 S",
    "Year": 2022,
    "Price": 3300,
    "Image": "https://www.baltana.com/files/cars-1/Bentley-Flying-Spur-Wallpaper-1600x897-71232.jpg",
    "Description": "Handcrafted sedan with immense presence."
  },
  {
    "Carname": "Porsche Taycan",
    "Model": "Turbo S",
    "Year": 2023,
    "Price": 3100,
    "Image": "https://images.hindustantimes.com/auto/img/2024/12/15/1600x900/Porsche_Taycan_GTS_facelift_1731555877746_1734238640319.jpg",
    "Description": "Electric luxury with Porsche performance."
  },
  {
    "Carname": "Audi RS e-tron GT",
    "Model": "RS",
    "Year": 2023,
    "Price": 3000,
    "Image": "https://images.hindustantimes.com/auto/img/2024/06/20/original/Audi_RS_E-Tron_GT_Performance_1718867502339.jpg",
    "Description": "Futuristic performance and luxury EV."
  },
  {
    "Carname": "Maserati Levante",
    "Model": "Trofeo",
    "Year": 2022,
    "Price": 2600,
    "Image": "https://financialexpresswpcontent.s3.amazonaws.com/uploads/2018/01/2018-Maserati-Levante-main-image.jpg",
    "Description": "High-performance luxury SUV."
  },
  {
    "Carname": "Lamborghini Urus",
    "Model": "Pearl Capsule",
    "Year": 2023,
    "Price": 4000,
    "Image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPxh5UumL-YG39BbdqrMwqZ2rqkyFa2Hwoxw&s",
    "Description": "Super SUV with supercar DNA."
  },
  {
    "Carname": "Range Rover",
    "Model": "Autobiography LWB",
    "Year": 2023,
    "Price": 2800,
    "Image": "https://imgd.aeplcdn.com/1920x1080/n/cw/ec/107719/range-rover-exterior-right-rear-three-quarter.jpeg?isig=0&q=80&q=80",
    "Description": "Iconic British luxury SUV."
  },
  {
    "Carname": "BMW XM",
    "Model": "Label Red",
    "Year": 2024,
    "Price": 3900,
    "Image": "https://i.cdn.newsbytesapp.com/images/l7820221210135446.jpeg",
    "Description": "Bold luxury SUV with M Power."
  },
  {
    "Carname": "Ferrari Roma",
    "Model": "Coupe",
    "Year": 2022,
    "Price": 3500,
    "Image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq3B7_4aCO7nDwmCsAlMbe2ghEHojx3CfXrA&s",
    "Description": "Elegant grand tourer with Ferrari spirit."
  },
  {
    "Carname": "Bugatti Chiron",
    "Model": "Sport",
    "Year": 2022,
    "Price": 12000,
    "Image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4N1AOqtHua41FC8f9rIHaAa55D-5gZWBYzA&s",
    "Description": "Hypercar luxury redefined."
  },
  {
    "Carname": "Koenigsegg Jesko",
    "Model": "Absolut",
    "Year": 2023,
    "Price": 15000,
    "Image": "https://www.hdcarwallpapers.com/download/koenigsegg_jesko_prototype_2019_4k_2-3840x2160.jpg",
    "Description": "The ultimate in Swedish engineering and speed."
  },
  {
    "Carname": "Pagani Huayra",
    "Model": "Roadster BC",
    "Year": 2022,
    "Price": 14000,
    "Image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmuaUGFFhuHQPPa_Ohs-s8YBE3EV9_lQU3NQ&s",
    "Description": "Art meets performance in this Italian masterpiece."
  }
]



mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(async () => {
        await Car.insertMany(cars);
        console.log('Cars inserted');
        mongoose.disconnect();
        console.log('Disconnected from MongoDB');
    })
    .catch(err => {
        console.error(err);
        mongoose.disconnect();
    });