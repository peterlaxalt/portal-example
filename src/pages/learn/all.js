// learn/all.js:
// This is the overview of all Learn items.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';

// Templates
import LearnTemplate from 'templates/Learn';

// Begin Component
//////////////////////////////////////////////////////////////////////

const LearnPage = ({ data }) => (
  <LearnTemplate
    Headline="You've got questions. We have answers."
    Icon="question"
  />
);

export default LearnPage;

//////////////////////////////////////////////////////////////////////
// End Component
