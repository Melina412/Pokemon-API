import { useContext } from "react";
import { FetchContext } from "../Context/context";
const Home = () => {
  const { pokemon } = useContext(FetchContext);
  console.log("Fetch Data", pokemon);
  return <>Home</>;
};

export default Home;
