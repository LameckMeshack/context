import "./App.css";
import Card from "./components/Card";
import Switch from "./components/Switch";

function App() {
  return (
    <div className="App">
      <Card
        title="Welcome"
        description="This is the first  card to be created. This is the first  card to be created. This is the first  card to be created."
      />
      <Card
        title="Welcome"
        description="This is the first  card to be created. This is the first  card to be created. This is the first  card to be created."
      />

      <Switch />
    </div>
  );
}

export default App;
