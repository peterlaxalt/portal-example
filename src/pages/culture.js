// Index.js:
// This is the home page of the website.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';

// Components
import Layout from 'components/core/Layout';
import HorizontalContent from 'components/core/HorizontalContent';

// Blocks
import Section from 'elements/Section';

// Constants
import { Theme } from 'constants/Theme';

// Begin Component
//////////////////////////////////////////////////////////////////////

const PageColor = 'indigo';

const Index = ({ data }) => (
  <Layout
    BgColor={PageColor}
    PrimaryColor={Theme.Color.Nightsky}
    SecondaryColor="Cyan"
    TertiaryColor={PageColor}
  >
    <HorizontalContent>Content</HorizontalContent>
  </Layout>
);

export default Index;

//////////////////////////////////////////////////////////////////////
// End Component
