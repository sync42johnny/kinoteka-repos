import Card from "./Card";
import Trending from "./Trending";

export default {
  title: "Components/Section/Trending",
  component: Trending,
  subcomponent: { Card },
  argTypes: {
    numberOfChildren: {
      type: "number",
      defaultValue: 4,
      description: "Trending component will get the certain number of cards",
      table: {
        type: "number",
        defaultValue: { summary: 4 },
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "Trending React Component\n\rWe are using a collection of movie cards to display movies in Trending category",
      },
    },
  },
};

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

export const Template = ({ numberOfChildren, ...args }) => {
  return (
    <Trending {...args}>
      {[...Array(numberOfChildren).keys()].map((n) => (
        <Card movieData={movies[n]} />
      ))}
    </Trending>
  );
};
