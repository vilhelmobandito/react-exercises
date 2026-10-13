import { createRoot } from "react-dom/client";
import Schedule from "./components/Schedule.jsx";
import InfoBox from "./components/InfoBox.jsx";
import "./style.css";

const rootElement = document.querySelector("#root");
const root = createRoot(rootElement);

root.render(
  <>
    <Schedule />
    <InfoBox title="Hinweis">
      <p>Änderungen im Ablauf werden kurzfristig bekanntgegeben.</p>
    </InfoBox>
  </>,
);
