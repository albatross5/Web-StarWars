import "./Home.scss";
import { useTranslation } from "react-i18next";
import Header from "../../components/Header/Header";

const Home = () => {
  const { t } = useTranslation();

  return (
    <>
      <Header></Header>
    </>
  );
};

export default Home;
