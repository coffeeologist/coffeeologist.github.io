import {memo} from 'react';

const Page = memo(({children, title, description}) => {
  return children;
});

export default Page;