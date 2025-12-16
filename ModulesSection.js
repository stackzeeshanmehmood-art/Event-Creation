import React from 'react';
import { useRecoilState } from 'recoil';
import { eventAtom } from './eventState';

// Mock module types - backend would pass 'code' as stringified function or component
const availableModules = [
  { type: 'poll', code: () => <div>Poll Module: What time works? <input placeholder="Option 1" /></div> },
  { type: 'map', code: () => <div>Map Module: Embed Google Map here.</div> },
  // Add more as needed; real backend: fetch('/api/modules') for list
];

const ModulesSection = () => {
  const [event, setEvent] = useRecoilState(eventAtom);

  const addModule = (module) => {
    setEvent({ ...event, modules: [...event.modules, module] });
    // Mock backend: In real, post to /api/add-module with module.type.
  };

  return (
    <div>
      <h2>Add Customizable Modules</h2>
      <div>Quick Links:</div>
      {availableModules.map((mod) => (
        <button key={mod.type} onClick={() => addModule(mod)} style={{ margin: '5px' }}>
          Add {mod.type.charAt(0).toUpperCase() + mod.type.slice(1)}
        </button>
      ))}
      <div style={{ marginTop: '20px' }}>
        <h3>Added Modules:</h3>
        {event.modules.map((mod, idx) => (
          <div key={idx} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0' }}>
            {mod.code()} {/* Renders dynamic content - secure in real app with sandbox */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ModulesSection;