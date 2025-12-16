import React from 'react';
import { useRecoilState } from 'recoil';
import { eventAtom } from './eventState';

const EventForm = () => {
  const [event, setEvent] = useRecoilState(eventAtom);

  const handleChange = (e) => {
    setEvent({ ...event, [e.target.name]: e.target.value });
    // Mock backend call: In real, replace with: axios.post('/api/update-event', { [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Event created/updated!'); // Mock success
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <h2>Create Basic Event</h2>
      <input
        name="title"
        placeholder="Event Title"
        value={event.title}
        onChange={handleChange}
        style={{ display: 'block', margin: '10px 0' }}
      />
      <input
        name="date"
        type="date"
        placeholder="Event Date"
        value={event.date}
        onChange={handleChange}
        style={{ display: 'block', margin: '10px 0' }}
      />
      <textarea
        name="description"
        placeholder="Description"
        value={event.description}
        onChange={handleChange}
        style={{ display: 'block', margin: '10px 0' }}
      />
      <button type="submit">Save Event</button>
    </form>
  );
};

export default EventForm;