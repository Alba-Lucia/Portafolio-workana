import Layout from '../components/Layout/Layout'
import HeroPortfolio from '../components/Portfolio/HeroPortfolio/HeroPortfolio'
import PortfolioProyects  from '../components/Portfolio/PortfolioProyects/PortfolioProyects '

const Portfolio = () => {
    return (
      <div>

        <Layout 
          page="Portfolio"
        >
          <HeroPortfolio/>

          <PortfolioProyects/>


        </Layout>

      </div>
    )
  }

export default Portfolio