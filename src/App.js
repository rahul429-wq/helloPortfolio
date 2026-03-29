import "./App.css";
import Header from "./Comps/Header/Header";
import Sec1 from "./Comps/Sec-1/Sec1";
import Sec2 from "./Comps/Sec-2/Sec2";
import Sec3 from "./Comps/Sec-3/Sec3";
import Sec4 from "./Comps/Sec4/Sec4";

function App() {
  return (
    <div className="App">
      <div className="app-shell">
        <Header />
        <main>
          <Sec1 />
          <Sec2 />
          <Sec3 />
          <Sec4 />
        </main>
      </div>
    </div>
  );
}

export default App;
