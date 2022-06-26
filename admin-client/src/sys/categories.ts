export type Category = {
  name: string;
  value: string;
  subCategories: {
    name: string;
    value: string;
  }[];
};

export const categories = [
  {
    name: "Footwear",
    value: "footwear",
    subCategories: [
      {
        name: "Shoes",
        value: "shoes",
      },
      {
        name: "Boots",
        value: "boots",
      },
      {
        name: "Loafers",
        value: "loafers",
      },
      {
        name: "Sandals",
        value: "sandals",
      },
      {
        name: "Slides",
        value: "slides",
      },
    ],
  },
  {
    name: "Topwear",
    value: "topwear",
    subCategories: [
      {
        name: "T-Shirts",
        value: "tshirts",
      },
      {
        name: "Casual Shirts",
        value: "casualshirts",
      },
      {
        name: "Formal Shirts",
        value: "formalshirts",
      },
      {
        name: "Jackets",
        value: "jackets",
      },
      {
        name: "Sweatshirts",
        value: "sweatshirts",
      },
    ],
  },
  {
    name: "Bottomwear",
    value: "bottomwear",

    subCategories: [
      {
        name: "Jeans",
        value: "jeans",
      },
      {
        name: "Casual Trousers",
        value: "casualtrousers",
      },
      {
        name: "Formal Trousers",
        value: "formaltrousers",
      },
      {
        name: "Shorts",
        value: "shorts",
      },
    ],
  },
  {
    name: "Wearables",
    value: "wearables",

    subCategories: [
      {
        name: "Watches",
        value: "watches",
      },
      {
        name: "Sunglasses",
        value: "sunglasses",
      },
      {
        name: "Smartwatches",
        value: "smartwatches",
      },
      {
        name: "Smartbands",
        value: "smartbands",
      },
      {
        name: "Headphones",
        value: "headphones",
      },
      {
        name: "Wireless Headphones",
        value: "wirelessheadphones",
      },
      {
        name: "Speakers",
        value: "speakers",
      },
      {
        name: "Wireless Speakers",
        value: "wirelessspeakers",
      },
    ],
  },
];
