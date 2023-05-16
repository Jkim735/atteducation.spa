import "./App.css";
import { BrowserRouter } from "react-router-dom";
import RouterMaster from "./routes/RouterMaster";

function App() {
  return (
      <BrowserRouter>
        <RouterMaster />
      </BrowserRouter>
  );
}

export default App;
