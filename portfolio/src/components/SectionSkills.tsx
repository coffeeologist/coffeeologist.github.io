import { Parallax } from 'react-scroll-parallax'
import { DataContext } from './DataContext'
import React from 'react'
import Image from 'next/image'
import CTA from './CTA'
import Label from './Label'

const SectionSkills = () => {
  const { sections } = React.useContext(DataContext)
  const { socialData } = React.useContext(DataContext)
  const { skillGroups } = React.useContext(DataContext)

  return (
    <div>
      <Label text="Skills" height={1700} />
      <div className="parallax-root">
        <div className="parallax-container w-screen ">
          <p className="section-title-small xl:section-title text-center">
            {sections.skills?.title}
          </p>
        </div>
        <div className="parallax-container w-screen xl:mb-10">
          <p className="section-subtitle-small xl:section-subtitle text-center">
            {sections.skills?.subtitle}
          </p>
        </div>
        <div className="parallax-container w-full"></div>

        <div className="parallax-container xl:w-3/4 grid xl:grid-cols-3 mb-10">
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
        </div>

        <div className="parallax-container">
          <Image
            src={sections.skills?.images[0].source}
            className="mx-auto"
            alt="skills image a"
            width={450}
            height={450}
          />
        </div>

        <div className="parallax-container ml-8 xl:mt-56 xl:-ml-64">
          <p className="section-subtitle-small xl:section-subtitle mx-auto">
            {sections.skills?.subtitleOpt}
          </p>
          <CTA text={sections.skills?.cta} href={socialData.github} />
        </div>

        <div className="parallax-container mt-5 xl:grid xl:w-3/4 xl:grid-cols-2">
          <a
            className="skill-grid-card project-logm mt-0 cursor-pointer"
            href="https://github.com/coffeeologist/logm"
            target="_blank"
          ></a>
          <a
            className="skill-grid-card project-nc mt-0 cursor-pointer"
            href="https://github.com/coffeeologist/newsCloud"
            target="_blank"
          ></a>
        </div>
      </div>
    </div>
  )
}

export default SectionSkills
