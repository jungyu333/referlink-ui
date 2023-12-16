import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { ReputCard } from './ReputCard';

const meta: Meta<typeof ReputCard> = {
  title: 'Components/Cards/ReputCard',
  component: ReputCard,
};

export default meta;

type Story = StoryObj<typeof ReputCard>;

export const Playground: Story = (args) => {
  return <ReputCard {...args} />;
};

Playground.args = {
  mainContent:
    ' 지원자님은 평소 행실이 바르고 기획적인 역량이나 디자인적인 역량이나 개발적인 역량 모두를 갖춘 이시대의 진정한 풀스텍 IT 인재입니다.',

  headContent: '준영/회사글자가늘어나면 글씨째로늘어나요/직무',
  date: '2023.08.24',
  isChecked: true,
};
