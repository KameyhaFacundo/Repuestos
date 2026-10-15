import LawScreen from "./screens/LawScreen";
import RetailScreen from "./screens/RetailScreen";
import ServiceScreen from "./screens/ServiceScreen";
import { garageData, hardwareData } from "./screenData";

// Devuelve la pantalla de escritorio de cada proyecto del portfolio.
function ProjectScreen({ id }) {
  if (id === "law") return <LawScreen />;
  if (id === "hardware") return <RetailScreen data={hardwareData} />;
  if (id === "garage") return <ServiceScreen data={garageData} />;
  return null;
}

export default ProjectScreen;
