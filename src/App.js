import Main from "./components/main";
import { gsap } from "gsap";


function App() {

  let tl = gsap.timeline()
  return (
    <div className="App">
      <Main timeline={tl} />
    </div>
  );
}

export default App;
