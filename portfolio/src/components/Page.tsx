import { ScrollContainer } from 'react-scroll-motion'

const Page = ({ children }) => {
  return (
    <div>
      <ScrollContainer>{children}</ScrollContainer>
    </div>
  )
}

export default Page
