import 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Menu from '../../components/Menu'
import ContentProducts from '../../components/dashboard/dashboardProducts'
const indexUser = () => {
  return (
    <>
    <Header />
    <Menu />
    <ContentProducts/>
    <Footer />
    </>
  )
}

export default indexUser