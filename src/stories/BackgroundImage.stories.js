import { components } from "@storybook/components";
import BackgroundImage from "./BackgroundImage";

export default {
  title: "Components/BackgroundImage",
  component: BackgroundImage,
  parameters: {
    docs: {
      description: {
        component:
          "The ImageBackground React Component lets you display an image as the background of another component",
      },
    },
  },
};

export const Template = (args) => <BackgroundImage />;
