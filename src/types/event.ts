export type ModuleType = "rsvp" | "ticketing" | "link";


export interface EventModule {
  id: number;
  type: ModuleType;
}


export interface Event {
  title: string;
  date: string;
  description: string;
  flyerImage: File | null;
  flyerPreview: string | null;
  backgroundImage: File | null;
  backgroundPreview: string | null;
  modules: EventModule[];
}


export const emptyEvent: Event = {
  title: "",
  date: "",
  description: "",
  flyerImage: null,
  flyerPreview: null,
  backgroundImage: null,
  backgroundPreview: null,
  modules: [],
};