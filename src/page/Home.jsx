import { useContext } from "react";
import { FetchContext } from "../Context/context";
import style from "./Home.module.css";
const Home = () => {
  const { pokemon } = useContext(FetchContext);
  console.log("Fetch Data", pokemon);
  return (
    <section className={style.container}>
      <h1>Halooo</h1>
    </section>
  );
};

export default Home;
