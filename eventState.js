import { atom, selector } from 'recoil';

// Mock event data - replace setter with API call like: fetch('/api/event', { method: 'POST', body: JSON.stringify(newData) })
export const eventAtom = atom({
  key: 'eventAtom',
  default: {
    title: '',
    date: '',
    description: '',
    flyerImage: null, // URL or base64
    backgroundImage: null,
    modules: [], // Array of { type: 'poll', code: () => <PollComponent /> }
  },
});

// Selector for derived state (e.g., preview)
export const eventPreviewSelector = selector({
  key: 'eventPreviewSelector',
  get: ({ get }) => get(eventAtom),
});