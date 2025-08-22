const express = require("express");
const app = express() ; 
const cors = require("cors");

app.use(
  cors({
    origin: "http://localhost:3000", // Next.js frontend port
    credentials: true,
  })
);

app.use(express.json());
const discoverCategories = [
  { name: 'Streetwear', imageUrl: 'https://cdn.shopify.com/s/files/1/0260/8824/3286/files/2_480x480.jpg?v=1733202300' },
  { name: 'Casual', imageUrl: 'https://i.pinimg.com/736x/5d/be/2a/5dbe2a9b961efb37dd13e9ed0d363b02.jpg' },
  { name: 'Formal', imageUrl: 'https://cdn.shopify.com/s/files/1/0162/2116/files/34133570_189366541900997_6900727145643900928_n.jpg?v=1550490009' },
  { name: 'Athletic', imageUrl: 'https://i.pinimg.com/236x/3d/ef/76/3def76e2016005c5689e1a4dcd32d5e6.jpg' },
];

const recommendedOutfits = [
  { name: 'Outfit 1', imageUrl: 'https://i.pinimg.com/736x/13/32/1b/13321b25c65769c97e61913dc644e037.jpg' },
  { name: 'Outfit 2', imageUrl: 'https://i.pinimg.com/564x/e5/ea/31/e5ea316e56b3e48b6728ba4e1e1d1a04.jpg' },
  { name: 'Outfit 3', imageUrl: 'https://thalasiknitfab.com/cdn/shop/files/WhatsApp_Image_2024-08-25_at_1.03.06_PM_2_1200x.jpg?v=1724571434' },
  { name: 'Outfit 4', imageUrl: 'https://www.tistabene.com/cdn/shop/products/COS-0103D.jpg?v=1751715142' },
];

const wardrobeItems = [
  {
    id: 1,
    name: 'Oversized Hoodie',
    category: 'Comfy & Stylish',
    imageUrl: 'https://wtflex.in/cdn/shop/files/Shadow_hoodie_website_front.jpg?v=1742425682',
    type: 'top',
    bgColor: 'bg-violet-200',
  },
  {
    id: 2,
    name: 'Baggy Jeans',
    category: '90s Vibe',
    imageUrl: 'https://media.powerlook.in/catalog/product/d/p/dp11094850.jpg?aio=w-640',
    type: 'bottom',
    bgColor: 'bg-cyan-200',
  },
  {
    id: 3,
    name: 'Graphic Tee',
    category: 'Vintage Look',
    imageUrl: 'https://www.styched.in/cdn/shop/files/worldwide.jpg?v=1747849126&width=533',
    type: 'top',
    bgColor: 'bg-pink-200',
  },
  {
    id: 4,
    name: 'Chunky Sneakers',
    category: 'Retro Cool',
    imageUrl: 'https://baccabucci.com/cdn/shop/products/MG_8403-min.jpg?v=1647981460',
    type: 'shoes',
    bgColor: 'bg-yellow-200',
  },
  {
    id: 5,
    name: 'Denim Jacket',
    category: 'Classic Staple',
    imageUrl: 'https://rukminim2.flixcart.com/image/850/1000/xif0q/jacket/o/h/w/m-no-mens-jacket-lahaba-original-imah7gk8depaktn3.jpeg?q=20&crop=false',
    type: 'outerwear',
    bgColor: 'bg-blue-200',
  },
  {
    id: 6,
    name: 'Ribbed Tank Top',
    category: 'Everyday Basic',
    imageUrl: 'https://alphaterritory.com/wp-content/uploads/2019/03/Mens-Tank-Top-Black-Back.jpg',
    type: 'top',
    bgColor: 'bg-lime-200',
  },
  {
    id: 7,
    name: 'Tailored Trousers',
    category: 'Smart Casual',
    imageUrl: 'https://rukminim2.flixcart.com/image/448/538/xif0q/trouser/n/s/1/28-trackpant-0095-yatma-original-imaguyacfqbgzdzn.jpeg?q=90&crop=false',
    type: 'bottom',
    bgColor: 'bg-gray-300',
  },
  {
    id: 8,
    name: 'Leather Boots',
    category: 'Edgy & Durable',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-J6erIWQydWkYaKEDmYmfUBdV9EtdwmKxTQ&s',
    type: 'shoes',
    bgColor: 'bg-orange-200',
  },
];

app.get("/discover", (req, res) => {
    console.log("req sent") ;
  res.status(200).send({ discoverCategories});
});

app.get("/recommended", (req, res) => {
  res.status(200).send({ recommendedOutfits});
});

app.get("/wardrobe",(req,res)=>{
  res.status(200).send({wardrobeItems});
})
app.listen(3002,()=>console.log("Server started on port 3002"));