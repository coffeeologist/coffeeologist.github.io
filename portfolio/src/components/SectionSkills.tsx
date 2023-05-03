import { Parallax } from 'react-scroll-parallax'
import { DataContext } from './DataContext'
import React from 'react'
import Image from 'next/image'
import CTA from './CTA'

const SectionSkills = () => {
  const { sections } = React.useContext(DataContext)
  const { socialData } = React.useContext(DataContext)
  const { skillGroups } = React.useContext(DataContext)

  return (
    <div className="parallax-root">
      <div className="parallax-container w-max mx-auto mb-5">
        <Parallax speed={4}>
          <p className="section-title-small xl:section-title mx-auto">
            {sections.skills?.title}
          </p>
        </Parallax>
      </div>
      <div className="parallax-container w-max mx-auto mb-10">
        <Parallax speed={5}>
          <p className="section-subtitle-small xl:section-subtitle mx-auto">
            {sections.skills?.subtitle}
          </p>
        </Parallax>
      </div>
      <div className="parallax-container w-full"></div>

      <div className="parallax-container xl:w-3/4 grid xl:grid-cols-3 mb-10">
        <Parallax
          opacity={[0, 2]}
          translateY={[50, 0]}
          startScroll={1200}
          endScroll={1350}
        >
          <div className="skill-grid-card">
            <div className="grid-card-titles-container">
              <p className="grid-card-title">{skillGroups.frontend?.title}</p>
              <p className="grid-card-subtitle">
                {skillGroups.frontend?.subtitle}
              </p>
            </div>
            <div className="grid-card-badges-container">
              {skillGroups.frontend?.skills.map((skill) => {
                return (
                  <p className="grid-card-badge" key={skill.name}>
                    {skill.name}
                  </p>
                )
              })}
            </div>
          </div>
        </Parallax>
        <Parallax
          opacity={[0, 2]}
          translateY={[50, 0]}
          startScroll={1250}
          endScroll={1400}
        >
          <div className="skill-grid-card">
            <div className="grid-card-titles-container">
              <p className="grid-card-title">{skillGroups.backend?.title}</p>
              <p className="grid-card-subtitle">
                {skillGroups.backend?.subtitle}
              </p>
            </div>
            <div className="grid-card-badges-container">
              {skillGroups.backend?.skills.map((skill) => {
                return (
                  <p className="grid-card-badge" key={skill.name}>
                    {skill.name}
                  </p>
                )
              })}
            </div>
          </div>
        </Parallax>
        <Parallax
          opacity={[0, 2]}
          translateY={[50, 0]}
          startScroll={1300}
          endScroll={1450}
        >
          <div className="skill-grid-card">
            <div className="grid-card-titles-container">
              <p className="grid-card-title">{skillGroups.editor?.title}</p>
              <p className="grid-card-subtitle">
                {skillGroups.editor?.subtitle}
              </p>
            </div>
            <div className="grid-card-badges-container">
              {skillGroups.editor?.skills.map((skill) => {
                return (
                  <p className="grid-card-badge" key={skill.name}>
                    {skill.name}
                  </p>
                )
              })}
            </div>
          </div>
        </Parallax>
        <Parallax
          opacity={[0, 2]}
          translateY={[50, 0]}
          startScroll={1400}
          endScroll={1550}
        >
          <div className="skill-grid-card">
            <div className="grid-card-titles-container">
              <p className="grid-card-title">{skillGroups.general?.title}</p>
              <p className="grid-card-subtitle">
                {skillGroups.general?.subtitle}
              </p>
            </div>
            <div className="grid-card-badges-container">
              {skillGroups.general?.skills.map((skill) => {
                return (
                  <p className="grid-card-badge" key={skill.name}>
                    {skill.name}
                  </p>
                )
              })}
            </div>
          </div>
        </Parallax>
        <Parallax
          opacity={[0, 2]}
          translateY={[50, 0]}
          startScroll={1450}
          endScroll={1600}
        >
          <div className="skill-grid-card">
            <div className="grid-card-titles-container">
              <p className="grid-card-title">{skillGroups.language?.title}</p>
              <p className="grid-card-subtitle">
                {skillGroups.language?.subtitle}
              </p>
            </div>
            <div className="grid-card-badges-container">
              {skillGroups.language?.skills.map((skill) => {
                return (
                  <p className="grid-card-badge" key={skill.name}>
                    {skill.name}
                  </p>
                )
              })}
            </div>
          </div>
        </Parallax>
      </div>

      <div className="parallax-container">
        <Parallax translateX={[-70, 0]}>
          <Image
            src={sections.skills?.images[0].source}
            className="mx-auto"
            alt="skills image a"
            width={450}
            height={450}
          />
        </Parallax>
      </div>

      <div className="parallax-container ml-8 xl:mt-56 xl:-ml-64">
        <Parallax opacity={[0, 2]}>
          <p className="section-subtitle-small xl:section-subtitle mx-auto">
            {sections.skills?.subtitleOpt}
          </p>
          <CTA text={sections.skills?.cta} href={socialData.github} />
        </Parallax>
      </div>

      <div className="parallax-container mt-5 xl:grid xl:w-3/4 xl:grid-cols-2">
        <Parallax speed={8}>
          <a
            className="skill-grid-card project-logm mt-0 cursor-pointer"
            href="https://github.com/coffeeologist/logm"
            target="_blank"
          ></a>
        </Parallax>
        <Parallax speed={8}>
          <a
            className="skill-grid-card project-nc mt-0 cursor-pointer"
            href="https://github.com/coffeeologist/newsCloud"
            target="_blank"
          ></a>{' '}
        </Parallax>
      </div>
    </div>
  )
}

export default SectionSkills
