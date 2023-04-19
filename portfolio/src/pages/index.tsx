import dynamic from 'next/dynamic';
import {FC, memo} from 'react';

import Page from '../components/Layout/Page';
import Block from '../components/Sections/Block';

const Home: FC = memo(() => {
  return (
    <Page description="Amy Liu's personal portfolio page" title="amyliu portfolio">
      <Block />
    </Page>
  );
});

export default Home;
