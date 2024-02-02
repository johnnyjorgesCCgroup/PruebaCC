import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Menu from "../../components/Menu";
import ContentWarehouse from "../../components/warehouse/ContentWarehouse";
const indexWarehouse = () => {
  return (
    <div className="wrapper">
      <Menu />
      <>
        <Header />
        <ContentWarehouse />
        <Footer />
      </>
    </div>
  );
};

export default indexWarehouse;
