import 'assets/styles/app.scss'
import HeroSection from 'components/molecules/HeroSection'
import InvestSection from 'components/molecules/InvestSection'
import TechnologySection from 'components/molecules/TechnologySection'
import FactsSection from 'components/molecules/FactsSection'
import WhoWeAreSection from 'components/molecules/WhoWeAreSection'
import ProjectsInvestmentsSection from 'components/molecules/ProjectsInvestmentsSection'
import WhatWeDoSection from 'components/molecules/WhatWeDoSection'
import InvestorsPartners from 'components/molecules/InvestorsPartners'
import FaqSection from 'components/molecules/FaqSection'

const HomePage = () => {
  return (
    <div className="home-page">
      <HeroSection />
      <InvestSection />
      <TechnologySection />
      <FactsSection />
      <WhoWeAreSection />
      <ProjectsInvestmentsSection />
      <WhatWeDoSection />
      <InvestorsPartners />
      <FaqSection />
    </div>
  )
}

export default HomePage
