import 'assets/styles/app.scss'
import HeroSection from 'components/molecules/HeroSection'
import InvestSection from 'components/molecules/InvestSection'
import TechnologySection from 'components/molecules/TechnologySection'
import FactsSection from 'components/molecules/FactsSection'
import WhoWeAreSection from 'components/molecules/WhoWeAreSection'
import ProjectsInvestmentsSection from 'components/molecules/ProjectsInvestmentsSection'
import WhatWeDoSection from 'components/molecules/WhatWeDoSection'

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
    </div>
  )
}

export default HomePage
