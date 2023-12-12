import Logo from "../logo/Logo";
import {motion} from "framer-motion";
import Typewriter from "typewriter-effect";
import "./collection.scss";

const Collection = () => {
  return (
    <div className="collection-container">
      <Typewriter
          options={{
            strings: ['cystgurgle','phyllomedusa'],
            autoStart: true,
            loop: true,
          }}
            />
      <Logo/>
    </div>
  )
}

export default Collection;
