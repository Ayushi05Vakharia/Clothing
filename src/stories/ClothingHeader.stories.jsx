import { ClothingHeader } from "./ClothingHeader";
import React from "react";

export default {
  title: "Example/ClothingHeader",
  component: ClothingHeader
  // parameters: {
  //   // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
  //   layout: "centered"
  // }
};

const Template = (args) => <ClothingHeader {...args} />;

export const simpleHeader = Template.bind({});
simpleHeader.args = {
  displayName: "Ayushi Vakharia"
};
