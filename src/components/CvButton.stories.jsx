import React from 'react';
import CvButton from './CvButton';
import '../index.css';

export default {
  title: 'Components/CvButton',
  component: CvButton,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    href: { control: 'text' },
  },
};

export const Light = {
  args: {
    label: 'CV',
    href: '/Latcu-CristianSimionCV.pdf.pdf',
  },
  render: (args) => (
    <div className="p-8 bg-white flex justify-center items-center min-h-[120px]">
      <CvButton {...args} />
    </div>
  ),
};

export const Dark = {
  args: {
    label: 'CV',
    href: '/Latcu-CristianSimionCV.pdf.pdf',
  },
  render: (args) => (
    <div className="dark p-8 bg-gray-900 flex justify-center items-center min-h-[120px]">
      <CvButton {...args} />
    </div>
  ),
};
