import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { CheckBox } from './CheckBox';

const meta: Meta<typeof CheckBox> = {
  title: 'Components/Buttons/CheckBox',
  component: CheckBox,
};

export default meta;

type Story = StoryObj<typeof CheckBox>;

export const Playground: Story = (args) => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <CheckBox
      {...args}
      isChecked={isChecked}
      onCheck={() => setIsChecked(!isChecked)}
    />
  );
};

Playground.args = {
  label: 'check box',
  isChecked: false,
};
