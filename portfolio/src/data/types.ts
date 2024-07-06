export type Data = {
  metadata: Metadata
  footer: Footer
  socialData: SocialData
  skillGroups: {
    frontend?: SkillGroup
    backend?: SkillGroup
    language?: SkillGroup
    editor?: SkillGroup
    general?: SkillGroup
  }
  sections: {
    splash: Section
    journey: Section
    skills: Section
    projects: Section
    creatives: Section
    hobbies: Section
    contact: Section
  }
}

export type Footer = {
  copyright: string
  lastUpdated: string
}

export type Metadata = {
  title: string
  description: string
  faviconSource: string
}

export type SocialData = {
  linkedin: string
  github: string
  email: string
}

export type SkillGroup = {
  title: string
  subtitle: string
  skills: Skill[]
}

export type Skill = {
  name: string
}

export type Section = {
  title: string
  subtitle: string
  subtitleOpt?: string
  cta?: string
  images: ImageSource[]
}

export type ImageSource = {
  source: string
  width?: number
  height?: number
  description?: string
  wide?: boolean
  startExpanded?: boolean
}
