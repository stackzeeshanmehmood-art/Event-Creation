import { RecoilRoot } from "recoil";
import { CreateEventPage } from "../pages/CreateEventPage";
import "../styles/theme.css";


export default function App() {
  return (
    <RecoilRoot>
      <CreateEventPage />
    </RecoilRoot>
  );
}