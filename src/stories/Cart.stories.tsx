import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import  Cart  from '../components/Cart/Cart';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Addtocart/Cart',
  component: Cart,
} as ComponentMeta<typeof Cart>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Cart> = (args) => <Cart {...args} />;

export const Cartsample = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Cartsample.args = {
  label: 'Button',
};
