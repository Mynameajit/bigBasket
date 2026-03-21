
import capsicum from "../assets/productImg/capsicum.webp"
import carrot from "../assets/productImg/carrot.webp"
import coriander from "../assets/productImg/coriander.webp"
import cucumber from "../assets/productImg/cucumber.webp"
import bs1 from "../assets/productImg/bs1.webp"
import bs2 from "../assets/productImg/bs2.webp"
import bs3 from "../assets/productImg/bs3.webp"
import bs4 from "../assets/productImg/bs4.webp"

// slider
import s1 from "../assets/slider/s1.webp"
import s2 from "../assets/slider/s2.webp"
import s3 from "../assets/slider/s3.webp"
import s4 from "../assets/slider/s4.webp"



export const bannerData = [
  {
    id: 1,
    img: s1
  },
  {
    id: 2,
    img: s2
  },
  {
    id: 3,
    img: s3
  },
  {
    id: 4,
    img: s4
  },
]


export const smartBasketData = [
  {
    id: 1,
    name: "Capsicum - Green",
    brand: "fresho!",
    image: capsicum,
    delivery: "10 MINS",
    tag: null,
    options: [
      {
        label: "1 kg",
        price: 133.6,
        oldPrice: 167,
        discount: 20,
      },
    ],
  },
  {
    id: 2,
    name: "Carrot - Orange",
    brand: "fresho!",
    image: carrot,
    delivery: "10 MINS",
    tag: "Har Din Sasta!",
    options: [
      {
        label: "1 kg",
        price: 28,
        oldPrice: 89,
        discount: 69,
      },
    ],
  },
  {
    id: 3,
    name: "Coriander Leaves Without Roots",
    brand: "fresho!",
    image: coriander,
    delivery: "10 MINS",
    tag: null,
    options: [
      {
        label: "1 kg",
        price: 94.24,
        oldPrice: 124,
        discount: 24,
      },
    ],
  },
  {
    id: 4,
    name: "Cucumber",
    brand: "fresho!",
    image: cucumber,
    delivery: "10 MINS",
    tag: "Har Din Sasta!",
    options: [
      {
        label: "1 kg",
        price: 45,
        oldPrice: 107,
        discount: 58,
      },
    ],
  },
];



export const bestSellersData = [
  {
    id: 1,
    name: "Sea Breeze Baby Wipes",
    brand: "bigbasket",
    image: bs1,
    delivery: "10 MINS",
    size: "80 Pulls",
    price: 75,
    oldPrice: 199,
    discount: 62,
    tag: null,
  },
  {
    id: 2,
    name: "Fresh Baby Wipes",
    brand: "bigbasket",
    image: bs2,
    delivery: "10 MINS",
    size: "80 Pulls",
    price: 85,
    oldPrice: 199,
    discount: 57,
    tag: null,
  },
  {
    id: 3,
    name: "Cherry Blossom Baby Wipes",
    brand: "bigbasket",
    image: bs3,
    delivery: "10 MINS",
    size: "80 Pulls",
    price: 85,
    oldPrice: 199,
    discount: 57,
    tag: null,
  },
  {
    id: 4,
    name: "Soft Cleansing Extra Thick & Moist Baby Wipes",
    brand: "Little's",
    image: bs4,
    delivery: "10 MINS",
    size: "80 pcs",
    price: 71.33,
    oldPrice: 190,
    discount: 62,
    tag: "Get @₹71.33!",
  },
];