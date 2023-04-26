import Page from '../components/Page'
import SectionSplash from '../components/SectionSplash'
import SectionJourney from '../components/SectionJourney'
import Header from '@/components/Header'
import Footer from './Footer'

const Portfolio = () => {
  return (
    <div className="bg-editor-background">
      <Header />
      <Page>
        <SectionSplash />
        {/* <SectionJourney />
        <SectionJourney /> */}
      </Page>
      <Footer />
    </div>
  )
}

export default Portfolio
