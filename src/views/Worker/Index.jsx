import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Menu from "../../components/Menu";
import ContentWorker from "../../components/worker/ContentWorker";
const indexTicket = () => {
  return (
    <div className="wrapper">
      <Menu />
      <>
        <Header />
        <ContentWorker />
        <Footer />
      </>
    </div>
  );
};

export default indexTicket;
