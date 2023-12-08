import Form from "./components/Form/Form";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateComponent from "./components/PrivateComponent/PrivateComponent";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" Component={Form} />
          <Route path="/private" Component={PrivateComponent} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
