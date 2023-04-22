export type Data {
  metadata: Metadata,
  socialData: SocialData,
  skillGroups: SkillGroup[],
  sections: Section[]
}

export type Metadata {
  title: string;
  description: string;
  faviconSource: string;
}

export type SocialData {
  linkedin: string;
  github: string;
  email: string;
}

export type SkillGroup {
  title: string;
  subtitle: string;
  skills: Skill[];

}

export type Skill {
  name: string;
  color: string;
}

export type Section {
  title: string;
  subtitle: string;
  images: ImageSource[];
}

export type ImageSource {
  source: string;
}

