import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { TextArea } from './TextArea';

const meta: Meta<typeof TextArea> = {
  title: 'Components/Inputs/TextArea',
  component: TextArea,
};

export default meta;

type Story = StoryObj<typeof TextArea>;

export const Playground: Story = (args) => {
  return <TextArea {...args} />;
};

Playground.args = {
  placeholder: '지원자님의 장/단점을 작성해주세요.',
  register: undefined,
};
