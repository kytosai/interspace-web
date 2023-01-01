import React from 'react';
import MainLayout from '@/components/layouts/MainLayout';
import { NextPageExtended } from '@/types/common';

const HomePage: NextPageExtended = () => {
  return <div>This is home page</div>;
};

HomePage.Layout = MainLayout;

export default HomePage;
