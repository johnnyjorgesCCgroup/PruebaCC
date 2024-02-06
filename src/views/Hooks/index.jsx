import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Menu from "../../components/Menu";
import ContentState from "../../components/hooks/ContentEffect";
const indexHooks = () => {
  return (
    <div className="wrapper">
      <Menu />
      <>
        <Header />
        <ContentState />
        <Footer />
      </>
    </div>
  );
};

export default indexHooks;
