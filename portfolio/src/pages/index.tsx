import dynamic from 'next/dynamic';
import {FC, memo} from 'react';
import { parseData, DataContext } from '@/components/DataContext';

import Page from '../components/Page';
import Block from '../components/Block';
import SectionSplash from '../components/SectionSplash';
import SectionJourney from '../components/SectionJourney';

const data = parseData();

const Home: FC = (() => {
  return (
    <DataContext.Provider value={data}>
      <Page>
        <SectionSplash />
        <SectionJourney />
      </Page>
    </DataContext.Provider>
  );
});

export default Home;
