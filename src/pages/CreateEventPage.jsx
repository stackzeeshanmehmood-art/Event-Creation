import { EventDetails } from "../components/event/EventDetails";
import { ImagesSection } from "../components/event/ImagesSection";
import { ModulesSection } from "../components/event/ModulesSection";
import { Actions } from "../components/actions/Actions";


export function CreateEventPage() {
  return (
    <div className="page">
      <h1>Create a new event</h1>
      <EventDetails />
      <ImagesSection />
      <ModulesSection />
      <Actions />
    </div>
  );
}