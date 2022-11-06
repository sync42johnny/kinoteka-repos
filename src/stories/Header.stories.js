import Header from "./Header";

export default {
  title: "Components/Header",
  component: Header,
  argTypes: {
    login: {
      type: "bool",
      description: "the state of the component depends on this value",
      table: {
        type: "bool",
        defaultValue: { summary: `${Object.prototype.toString.call(new Boolean())}` },
      },
    }
  },
  parameters: {
    docs: {
      description: {
        component:
          "Header React Component is a section at the top of a page that displays site name and navigation",
      },
    },
  },
};

export const LoggedIn = (args) => <Header {...args} />;
LoggedIn.args = {
  login: true,
};

export const LoggedOut = (args) => <Header {...args} />;
LoggedOut.args = {
  login: false,
};
