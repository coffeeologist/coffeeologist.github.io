import * as React from "react";
import type { Data } from "@/data/types";
import dataJson from '@/data/data.json';

export const parseData = () => {
  return dataJson as Data;
}

const defaultData: Data = {
  metadata: {
    title: '',
    description: '',
    faviconSource: '',
  },
  socialData: {
    linkedin: '',
    github: '',
    email: ''
  },
  skillGroups: [],
  sections: []
}

export const DataContext: React.Context<Data> = React.createContext<Data>(defaultData);