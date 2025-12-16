import { useState } from "react";
import { useSetRecoilState } from "recoil";
import {
  eventAtom,
  saveEventSelector,
  emptyEvent,
  imageResetCounterAtom,
} from "../../state/eventState";
import { Section } from "../ui/Section";


export function Actions() {
  const resetEvent = useSetRecoilState(eventAtom);
  const save = useSetRecoilState(saveEventSelector);
  const bumpImageReset = useSetRecoilState(imageResetCounterAtom);
  const [saved, setSaved] = useState(false);

  const onSave = () => {
    save();
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  const onCancel = () => {
    resetEvent(emptyEvent);
    bumpImageReset((c) => c + 1);
  };


  return (
    <Section>
      <div className="actions">
        <button className="primary" onClick={onSave}>
          Save Event
        </button>
        <button className="secondary" onClick={onCancel}>
          Cancel
        </button>
      </div>

      {saved && <div className="toast">Event saved successfully</div>}
    </Section>
  );
}