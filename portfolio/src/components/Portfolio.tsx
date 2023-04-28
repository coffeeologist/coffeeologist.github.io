import Page from '../components/Page'
import SectionSplash from '../components/SectionSplash'
import SectionJourney from '../components/SectionJourney'
import Header from '@/components/Header'
import Footer from './Footer'
import SectionSkills from './SectionSkills'
import SectionCreative from './SectionCreative'

const Portfolio = () => {
  return (
    <div className="bg-editor-background">
      <Header />
      <Page>
        <SectionSplash />
        <SectionJourney />
        <SectionSkills />
        <SectionCreative />
      </Page>
      <Footer />
    </div>
  )
}

export default Portfolio
