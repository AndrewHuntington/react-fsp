// TODO: Replace w/API call
import cardData from "./data/data";
import ApplicationList from "./components/ApplicationList";

function App() {
  return <ApplicationList applicationsData={cardData} />;
}

export default App;
