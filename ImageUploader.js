import React from 'react';
import { useRecoilState } from 'recoil';
import { eventAtom } from './eventState';

const ImageUploader = ({ type }) => { // type: 'flyer' or 'background'
  const [event, setEvent] = useRecoilState(eventAtom);
  const currentImage = type === 'flyer' ? event.flyerImage : event.backgroundImage;

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setEvent({ ...event, [`${type}Image`]: reader.result });
        // Mock backend: In real, upload to /api/upload-image and set URL from response.
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <h2>Change {type.charAt(0).toUpperCase() + type.slice(1)} Image</h2>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      {currentImage && <img src={currentImage} alt={`${type} preview`} style={{ width: '200px', marginTop: '10px' }} />}
    </div>
  );
};

export default ImageUploader;