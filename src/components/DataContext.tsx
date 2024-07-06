import * as React from 'react'
import type { Data } from '@/data/types'
import dataJson from '@/data/data.json'

export const parseData = () => {
  return dataJson as Data
}

const defaultData: Data = {
  metadata: {
    title: '',
    description: '',
    faviconSource: '',
  },
  footer: {
    copyright: '',
    lastUpdated: '',
  },
  socialData: {
    linkedin: '',
    github: '',
    email: '',
  },
  skillGroups: {},
  sections: {
    splash: {
      title: '',
      subtitle: '',
      images: [],
    },
    journey: {
      title: '',
      subtitle: '',
      images: [],
    },
    skills: {
      title: '',
      subtitle: '',
      images: [],
    },
    projects: {
      title: '',
      subtitle: '',
      images: [],
    },
    creatives: {
      title: '',
      subtitle: '',
      images: [],
    },
    hobbies: {
      title: '',
      subtitle: '',
      images: [],
    },
    contact: {
      title: '',
      subtitle: '',
      images: [],
    },
  },
}

export const DataContext: React.Context<Data> =
  React.createContext<Data>(defaultData)
