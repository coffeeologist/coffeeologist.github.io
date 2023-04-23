import { parseData, DataContext } from '@/components/DataContext'

import Portfolio from '@/components/Portfolio'

const data = parseData()

const Home = () => {
  return (
    <DataContext.Provider value={data}>
      <Portfolio />
    </DataContext.Provider>
  )
}

export default Home
