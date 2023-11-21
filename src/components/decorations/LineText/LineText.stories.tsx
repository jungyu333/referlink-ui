import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { LineText } from './LineText';

const meta: Meta<typeof LineText> = {
  title: 'Components/Decorations/LineText',
  component: LineText,
};

export default meta;

type Story = StoryObj<typeof LineText>;

export const Playground: Story = (args) => {
  return <LineText {...args} />;
};

Playground.args = {
  label: 'SNS 간편 로그인',
};
