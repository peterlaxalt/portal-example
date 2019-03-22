// Index.js:
// This is the home page of the website.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';

// Components
import Layout from 'components/core/Layout';
import HorizontalContent from 'components/core/HorizontalContent';

// Constants
import { Theme } from 'constants/Theme';

// Begin Component
//////////////////////////////////////////////////////////////////////

const PageColor = Theme.Color.Snow;

const Index = ({ data }) => (
  <Layout PageColor={PageColor}>
    <HorizontalContent>Content</HorizontalContent>
  </Layout>
);

export default Index;

//////////////////////////////////////////////////////////////////////
// End Component
