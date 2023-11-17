import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { ReputCheckBox } from './ReputCheckBox';

const meta: Meta<typeof ReputCheckBox> = {
  title: 'Components/Buttons/ReputCheckBox',
  component: ReputCheckBox,
};

export default meta;

type Story = StoryObj<typeof ReputCheckBox>;

export const Playground: Story = (args) => {
  const [isCheck, setIsCheck] = useState(false);
  return (
    <ReputCheckBox
      {...args}
      isChecked={isCheck}
      onCheck={() => setIsCheck(!isCheck)}
    />
  );
};

Playground.args = {
  label: '다소 그렇다',
};
