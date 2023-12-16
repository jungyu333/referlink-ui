import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { LoadingSpinner } from './LoadingSpinner';

const meta: Meta<typeof LoadingSpinner> = {
  title: 'Components/Generals/LoadingSpinner',
  component: LoadingSpinner,
};

export default meta;

type Story = StoryObj<typeof LoadingSpinner>;

export const Playground: Story = (args) => {
  return (
    <LoadingSpinner {...args}>
      <>content</>
    </LoadingSpinner>
  );
};

Playground.args = {
  isLoading: true,
};
