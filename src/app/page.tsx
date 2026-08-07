import 'assets/styles/app.scss'
import HeroSection from 'components/molecules/HeroSection'
import RegistrationNote from 'components/molecules/RegistrationNote'
import WhatWeDoSection from 'components/molecules/WhatWeDoSection'
import ProcessSection from 'components/molecules/ProcessSection'
import ResponsibilitiesSection from 'components/molecules/ResponsibilitiesSection'
import CriteriaSection from 'components/molecules/CriteriaSection'
import ProjectsSection from 'components/molecules/ProjectsSection'
import TeamSection from 'components/molecules/TeamSection'
import FaqSection from 'components/molecules/FaqSection'
import ContactSection from 'components/molecules/ContactSection'

const HomePage = () => {
  return (
    <main id="main" className="home-page">
      <HeroSection />
      <RegistrationNote />
      <WhatWeDoSection />
      <ProcessSection />
      <ResponsibilitiesSection />
      <CriteriaSection />
      <ProjectsSection />
      <TeamSection />
      <FaqSection />
      <ContactSection />
    </main>
  )
}

export default HomePage
