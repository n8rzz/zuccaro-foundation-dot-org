import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { HomePage } from '../components/pages/home/HomePage';

const IndexPage: React.FC<PageProps> = () => {
  return <HomePage />;
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
