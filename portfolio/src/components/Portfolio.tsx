import Page from '../components/Page'
import SectionSplash from '../components/SectionSplash'
import SectionJourney from '../components/SectionJourney'
import Header from '@/components/Header'
import Footer from './Footer'
import SectionSkills from './SectionSkills'
import SectionCreative from './SectionCreative'
import SectionHobbies from './SectionHobbies'
import SectionContact from './SectionContact'
import TableOfContents from './TableOfContents'

const Portfolio = () => {
  return (
    <div className="bg-editor-background">
      <TableOfContents />
      <Header />
      <Page>
        <SectionSplash />
        <SectionJourney />
        <SectionSkills />
        <SectionCreative />
        <SectionHobbies />
        <SectionContact />
      </Page>
      <Footer />
    </div>
  )
}

export default Portfolio
