import "./Home.scss";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();

  return (
    <>
      {/* html */}
      <div className="home">
        <h1>Titulo</h1>
        <p>parrafo</p>
      </div>
    </>
  );
};

export default Home;