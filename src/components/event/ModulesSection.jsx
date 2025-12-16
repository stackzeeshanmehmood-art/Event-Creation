import { useRecoilState } from "recoil";
import { eventAtom } from "../../state/eventState";
import { Section } from "../ui/Section";


const moduleRenderers = {
  rsvp: () => <div className="module">RSVP Module</div>,
  ticketing: () => <div className="module">Ticketing Module</div>,
  link: () => <div className="module">External Link Module</div>,
};


export function ModulesSection() {
  const [event, setEvent] = useRecoilState(eventAtom);


  const addModule = (type) =>
  setEvent({ ...event, modules: [...event.modules, { id: Date.now(), type }] });


  return (
    <Section title="Event Customizations">
      <div className="button-row">
        <button onClick={() => addModule("rsvp")}>RSVP</button>
        <button onClick={() => addModule("ticketing")}>Ticketing</button>
        <button onClick={() => addModule("link")}>Link</button>
      </div>
      {event.modules.map((m) => (
        <div key={m.id}>{moduleRenderers[m.type]()}</div>
      ))}
    </Section>
  );
}