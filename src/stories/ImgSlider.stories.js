import ImgSlider from "./ImgSlider";
import { carouselImages } from "../utils";

export default {
  title: "Components/ImgSlider",
  component: ImgSlider,
  argTypes: {
    carouselImages: {
      type: "array",
      description: "ImgSlider React Component will get the certain number of images to build a simple image slider / slidershow / carousel",
      table: {
        type: "object",
        defaultValue: { summary: `${Object.prototype.toString.call(new Array())}` },
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "The Image Slider React Component allows users to use a slider control to switch between movies",
      },
    },
  },
};

export const Slider = (args) => <ImgSlider {...args} />;
Slider.args = {
  carouselImages: carouselImages,
};
