import { useRecoilState } from "recoil";
import { eventAtom } from "../../state/eventState";
import { Section } from "../ui/Section";
import { LabeledField } from "../ui/LabeledField";


export function EventDetails() {
const [event, setEvent] = useRecoilState(eventAtom);
const update = (k, v) => setEvent({ ...event, [k]: v });


return (
  <Section title="Event Details">
    <LabeledField label="Event Title">
      <input value={event.title} onChange={(e) => update("title", e.target.value)} />
    </LabeledField>
    <LabeledField label="Event Date">
      <input type="date" value={event.date} onChange={(e) => update("date", e.target.value)} />
    </LabeledField>
    <LabeledField label="Description">
      <textarea value={event.description} onChange={(e) => update("description", e.target.value)} />
    </LabeledField>
  </Section>
);
}