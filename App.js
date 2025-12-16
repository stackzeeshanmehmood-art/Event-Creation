import React from 'react';
import { RecoilRoot } from 'recoil';
import EventForm from './EventForm';
import ImageUploader from './ImageUploader';
import ModulesSection from './ModulesSection';
import './App.css'; // Optional basic styles

function App() {
  return (
    <RecoilRoot>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
        <h1>Let's Hang - Create Event (Desktop Redesign)</h1>
        {/* Row 1: Basic Event */}
        <EventForm />
        {/* Row 2: Flyer Image */}
        <ImageUploader type="flyer" />
        {/* Row 3: Background Image */}
        <ImageUploader type="background" />
        {/* Row 4: Modules */}
        <ModulesSection />
      </div>
    </RecoilRoot>
  );
}

export default App;