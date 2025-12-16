import { useRecoilState, useRecoilValue } from "recoil";
import { eventAtom, imageResetCounterAtom } from "../../state/eventState";
import { LabeledField } from "./LabeledField";

export function ImageUpload({ label, fileKey, previewKey }) {
  const [event, setEvent] = useRecoilState(eventAtom);
  const resetCounter = useRecoilValue(imageResetCounterAtom);


  const onChange = (file) => {
    if (!file) return;
    setEvent({
      ...event,
      [fileKey]: file,
      [previewKey]: URL.createObjectURL(file),
    });
  };


  return (
    <LabeledField label={label}>
      <input
        key={resetCounter}
        type="file"
        accept="image/*"
        onChange={(e) => onChange(e.target.files?.[0])}
      />
      {event[previewKey] && <img className="preview" src={event[previewKey]} />}
    </LabeledField>
  );
}