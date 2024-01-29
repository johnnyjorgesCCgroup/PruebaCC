import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Menu from "../../components/Menu";
import ContentIngresos from "../../components/Ingresos/ContentIngresos";
const indexTicket = () => {
  return (
    <div className="wrapper">
      <Menu />
      <>
        <Header />
        <ContentIngresos />
        <Footer />
      </>
    </div>
  );
};

export default indexTicket;
