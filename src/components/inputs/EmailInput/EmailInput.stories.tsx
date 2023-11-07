import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { EmailInput } from './EmailInput';

const meta: Meta<typeof EmailInput> = {
  title: 'Components/Inputs/EmailInput',
  component: EmailInput,
};

export default meta;

type Story = StoryObj<typeof EmailInput>;

export const Playground: Story = (args) => {
  return <EmailInput {...args} />;
};

Playground.args = {
  label: '이메일',
  placeholder: '이메일을 입력해주세요.',
  register: undefined,
  width: '400px',
  height: '56px',
  isLabel: true,
};
