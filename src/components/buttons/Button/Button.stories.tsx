import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Button } from './Button';
import { Fonts } from '../../../constants/fonts';
import { ButtonTypes } from '../../../constants';
import { svgNote } from '../../../assets/generals';

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
  buttonText: '평판 작성 요청',
  buttonType: ButtonTypes.filled,
  width: '200px',
  height: '58px',
  px: '24px',
  py: '26px',
  fontStyle: Fonts.subtitle2,
  isIcon: true,
  svgIcon: svgNote,
};
