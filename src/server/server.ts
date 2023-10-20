const express = require("express");
const app = express();
const port = 3000;

app?.use(express?.json());

const product = {
  id: 10,
  title: "HP Pavilion 15-DK1056WM",
  description: "HP Pavilion 15-DK1056WM Gaming...",
  price: 1099,
  discountPercentage: 6.18,
  rating: 4.43,
  stock: 89,
  brand: "HP Pavilion",
  category: "laptops",
  thumbnail: "https://dummyjson.com/",
  images: [
    "https://dummyjson.com/",
    "https://dummyjson.com/",
    "https://dummyjson.com/",
    "https://dummyjson.com/",
  ],
};

app?.get("/product/:id", (res) => {
  res.json(product);
});

app?.listen(port, () => {
  console.log(`Fake API listening at https://dummyjson.com/:${port}`);
});
