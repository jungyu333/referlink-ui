import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Modal } from './Modal';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal/Modal',
  component: Modal,
};

export default meta;

type Story = StoryObj<typeof Modal>;

export const Playground: Story = (args) => {
  return <Modal {...args} />;
};

Playground.args = {
  isOpen: true,
};
