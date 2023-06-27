import { Parallax } from 'react-scroll-parallax'
import { DataContext } from './DataContext'
import { linkedinSVG, githubSVG, emailSVG } from './Header'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Label from './Label'

const SectionContact = () => {
  const { sections } = React.useContext(DataContext)
  const { socialData } = React.useContext(DataContext)

  return (
    <div>
      <Label text="Contact" />
      <div className="parallax-root mb-10 xl:mb-16">
        <div className="parallax-container mt-16 xl:mt-0 xl:w-1/4 xl:mb-60">
          <Parallax className="xl:w-max">
            <p className="section-title-small xl:section-title">
              {sections.contact?.title}
            </p>
          </Parallax>
          <Parallax>
            <p className="section-subtitle-small xl:section-subtitle ml-8 mt-5 mb-5">
              {sections.contact?.subtitle}
            </p>
          </Parallax>
        </div>
        <Parallax>
          <Image
            src={sections.contact?.images[1].source}
            alt="contact image"
            key="contact-b"
            width={230}
            height={450}
          ></Image>
          <div className="container flex center justify-center px-12">
            <Link
              className="cursor-pointer mx-auto animated-link"
              href={socialData.linkedin}
            >
              {linkedinSVG(52)}
            </Link>
            <Link
              className="cursor-pointer mx-auto animated-link"
              href={socialData.github}
            >
              {githubSVG(52)}
            </Link>
            <Link
              className="cursor-pointer mx-auto animated-link"
              href={socialData.email}
            >
              {emailSVG(52)}
            </Link>
          </div>
          <Image
            src={sections.contact?.images[0].source}
            alt="contact image"
            key="contact-a"
            width={250}
            height={450}
          ></Image>
        </Parallax>
      </div>
    </div>
  )
}

export default SectionContact
