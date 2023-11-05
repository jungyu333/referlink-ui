import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Button } from './Button';
import { fonts } from '../../../styles/theme';

const meta: Meta<typeof Button> = {
  title: 'Components/Buttons/Button',
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Playground: Story = (args) => {
  return <Button {...args} />;
};

Playground.args = {
  buttonText: 'Button',
  isPrimary: true,
  width: '200px',
  height: '58px',
  px: '24px',
  py: '26px',
  fontStyle: fonts.subtitle2,
};
