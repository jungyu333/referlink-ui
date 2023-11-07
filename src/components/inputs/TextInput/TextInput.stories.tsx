import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { TextInput } from './TextInput';

const meta: Meta<typeof TextInput> = {
  title: 'Components/Inputs/TextInput',
  component: TextInput,
};

export default meta;

type Story = StoryObj<typeof TextInput>;

export const Playground: Story = (args) => {
  return <TextInput {...args} />;
};

Playground.args = {
  label: '이름',
  placeholder: '이름을 입력해주세요.',
  register: undefined,
  width: '400px',
  height: '56px',
  isLabel: true,
};
