import {
  send,
  shield,
  star,
  people01,
  people02,
  people03,
  cook,
} from "../assets";

export const homeNavs = [
  {
    id: "home",
    title: "Home",
    to: "",
  },
  {
    id: "shop",
    title: "Shop",
    to: "/shop",
  },
];

export const adminNavs = [
  {
    id: "products",
    title: "products",
    // icon: products,
    to: "products",
  },
  {
    id: "bids",
    title: "bids",
    // icon: bid,
    to: "bids",
  },
];

export const features = [
  {
    id: "feature-1",
    icon: star,
    title: "Rewards",
    content:
      "The best credit cards offer some tantalizing combinations of promotions and prizes",
  },
  {
    id: "feature-2",
    icon: shield,
    title: "100% Secured",
    content:
      "We take proactive steps make sure your information and transactions are secure.",
  },
  {
    id: "feature-3",
    icon: send,
    title: "Balance Transfer",
    content:
      "A balance transfer credit card can save you a lot of money in interest charges.",
  },
];

export const masterChefs = [
  {
    id: "feedback-1",
    content:
      "Cooking is a subject you can never know enough about. There is always something new to discover.",
    name: "Herman Jensen",
    title: "Healthy Food Specialist",
    img: people01,
    icon: cook,
    type: "master Chef",
  },
  {
    id: "feedback-2",
    content:
      "Cooking is a subject you can never know enough about. There is always something new to discover.",
    name: "Steve Mark",
    title: "Chines Food Specialist",
    img: people02,
    icon: cook,
    type: "master Chef",
  },
  {
    id: "feedback-3",
    content:
      "Cooking is a subject you can never know enough about. There is always something new to discover.",
    name: "Kenn Gallagher",
    title: "Fast Food Specialist",
    img: people03,
    icon: cook,
    type: "master Chef",
  },
];

export const aboutImage =
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80";

export const dots = "............................................";
