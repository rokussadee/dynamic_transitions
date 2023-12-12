import "./app.scss"
import Navbar from "./components/navbar/Navbar";
import Collection from "./components/collection/Collection";

const App = () => {
  return <div>
    <Navbar/>
    <section><Collection/></section>
    </div>;
};

export default App;
