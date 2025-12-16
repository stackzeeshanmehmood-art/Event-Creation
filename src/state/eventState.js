import { atom, selector } from "recoil";


export const emptyEvent = {
  title: "",
  date: "",
  description: "",
  flyerImage: null,
  flyerPreview: null,
  backgroundImage: null,
  backgroundPreview: null,
  modules: [],
};

// used to force-reset file inputs
export const imageResetCounterAtom = atom({
  key: "imageResetCounterAtom",
  default: 0,
});

export const eventAtom = atom({
  key: "eventAtom",
  default: emptyEvent,
});


export const saveEventSelector = selector({
  key: "saveEventSelector",
  get: () => null,
  set: ({ get, set }) => {
    const event = get(eventAtom);
    console.log("[MOCK API] Saving event", event);
    // replace with real API call

    set(eventAtom, emptyEvent);
    set(imageResetCounterAtom, (c) => c + 1);
  },
});