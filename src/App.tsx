import "./styles.css";
import Image from "./IMAGE.png";
import image from "./image.svg";
import { Counter } from "./CliclCounter";
export const App = () => {
  const name = "KRUNAL";
  return (
    <>
      <Counter />
      <h1>
        react typescript webpack - {process.env.NODE_ENV} {process.env.name}{" "}
      </h1>
      <img src={Image} alt="" width={"50%"} />
      <img src={image} alt="" />
    </>
  );
};
