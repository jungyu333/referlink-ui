import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { GoogleButton } from './GoogleButton';
import { Fonts } from '../../../constants/fonts';
import { ButtonTypes } from '../../../constants';
import { svgNote } from '../../../assets/generals';

const meta: Meta<typeof GoogleButton> = {
  title: 'Components/Buttons/GoogleButton',
  component: GoogleButton,
};

export default meta;

type Story = StoryObj<typeof GoogleButton>;

export const Playground: Story = (args) => {
  return <GoogleButton {...args} />;
};

Playground.args = {
  buttonText: 'Google로 계속하기',
  fontStyle: Fonts.subtitle2,
  width: '400px',
  height: '58px',
};
