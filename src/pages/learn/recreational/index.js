// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';

// Templates
import LearnTemplate from 'templates/Learn';

// Data
import { QuestionsData } from 'data/questions';

// Begin Component
//////////////////////////////////////////////////////////////////////

const LearnPage = ({ data }) => (
  <LearnTemplate Filter="recreational" Data={QuestionsData} />
);

export default LearnPage;

//////////////////////////////////////////////////////////////////////
// End Component
