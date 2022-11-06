import React from "react";
import Card from "./Card";

const movies = [
  {
    id: 436270,
    name: "Black Adam",
    image: "/bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg",
  },
  {
    id: 718930,
    name: "Bullet Train",
    image: "/zt6sKnx9dEiRCb7oVMlfmmMGJMO.jpg",
  },
];

export default {
  title: "Components/Card",
  component: Card,
  argTypes: {
    movieData: {
      control: { type: "object" },
      description:
        "Each card component will get the argument as a new object with movie details",
      table: {
        type: "object",
        defaultValue: { summary: new Object() },
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component: "Card React Component",
      },
    },
  },
};

export const Card0 = (args) => <Card {...args} />;
Card0.args = {
  movieData: movies[0],
};

export const Card1 = (args) => <Card {...args} />;
Card1.args = {
  movieData: movies[1],
};
