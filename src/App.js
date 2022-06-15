import "./App.css";
import Header from "./Comps/Header/Header";
import Music from "./Comps/Music/Music";
import MyLine from "./Comps/MyLine";
import Sec1 from "./Comps/Sec-1/Sec1";
import Sec2 from "./Comps/Sec-2/Sec2";
import Sec3 from "./Comps/Sec-3/Sec3";
import Sec4 from "./Comps/Sec4/Sec4";
import Theme from "./Comps/Theme/Theme";

function App() {
  return (
    <div className="App">
      <Header />
      <Sec1 />
      {/* <MyLine /> */}
      <Sec2 />
      {/* <MyLine /> */}
      <Sec3 />
      {/* <MyLine /> */}
      <Sec4 />

      <br />
      <br />
      <br />
      <br />

      <Theme />

      <Music />
    </div>
  );
}

export default App;
