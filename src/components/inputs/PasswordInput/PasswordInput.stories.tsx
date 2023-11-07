import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { PasswordInput } from './PasswordInput';

const meta: Meta<typeof PasswordInput> = {
  title: 'Components/Inputs/PasswordInput',
  component: PasswordInput,
};

export default meta;

type Story = StoryObj<typeof PasswordInput>;

export const Playground: Story = (args) => {
  return <PasswordInput {...args} />;
};

Playground.args = {
  label: '비밀번호',
  placeholder: '비밀번호를 입력해주세요.',
  register: undefined,
  width: '400px',
  height: '56px',
  isLabel: true,
};
