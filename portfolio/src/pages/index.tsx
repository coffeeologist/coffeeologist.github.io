import { parseData, DataContext } from '@/components/DataContext'
import { ParallaxProvider } from 'react-scroll-parallax'
import Portfolio from '@/components/Portfolio'

const data = parseData()

const Home = () => {
  return (
    <DataContext.Provider value={data}>
      <ParallaxProvider>
        <Portfolio />
      </ParallaxProvider>
    </DataContext.Provider>
  )
}

export default Home
