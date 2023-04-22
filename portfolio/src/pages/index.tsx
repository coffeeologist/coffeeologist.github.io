import dynamic from 'next/dynamic';
import {FC, memo} from 'react';
import { parseData, DataContext } from '@/components/DataContext';

import Page from '../components/Page';
import Block from '../components/Block';
import Section from '../components/Section';

const data = parseData();

const Home: FC = memo(() => {
  return (
    <DataContext.Provider value={data}>
      <Page>
        <Block />
      </Page>
    </DataContext.Provider>
  );
});

export default Home;
