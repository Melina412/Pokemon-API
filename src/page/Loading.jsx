import { useContext, useEffect } from "react";
import { LoadingContext } from "../Context/context";
import style from "../page/Loading.module.css";

const Loading = () => {
  const { setLoading } = useContext(LoadingContext);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 2200);
  }, []);
  return (
    <div className={`${style.loading}`}>
      <img
        className={`${style.ditto}`}
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/132.png"
        alt="ditto"
      />
      <h1 className={`${style.headline}`}>just a second...</h1>
    </div>
  );
};

export default Loading;
