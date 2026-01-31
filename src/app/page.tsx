import 'assets/styles/app.scss'
import HeroSection from 'components/molecules/HeroSection'
import InvestSection from 'components/molecules/InvestSection'
import TechnologySection from 'components/molecules/TechnologySection'
import FactsSection from 'components/molecules/FactsSection'
import WhoWeAreSection from 'components/molecules/WhoWeAreSection'

const HomePage = () => {
  return (
    <div className="home-page">
      <HeroSection />
      <InvestSection />
      <TechnologySection />
      <FactsSection />
      <WhoWeAreSection />
    </div>
  )
}

export default HomePage
