import "./app.scss"
import Navbar from "./components/navbar/Navbar";
import Logo from "./components/logo/Logo";

const App = () => {
  return <div>
    <section><Navbar/></section>
    <section>Parallax</section>
    <section><Logo/></section>
    <section>Services</section>
    <section>Portfolio1</section>
    <section>Contact</section>
    </div>;
};

export default App;
