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

app.get("/discover", (req, res) => {
    console.log("req sent") ;
  res.status(200).send({ discoverCategories});
});

app.get("/recommended", (req, res) => {
  res.status(200).send({ recommendedOutfits});
});

app.listen(3002,()=>console.log("Server started on port 3002"));