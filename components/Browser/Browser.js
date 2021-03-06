import styled from 'react-emotion';
import BrowserHeader from './BrowserHeader';
import BrowserBody from './BrowserBody';
import { mediaQueries } from './../../config';

const MainBrowser = styled('div')({
  marginTop: 0,
  transition: 'margin-top 1.5s cubic-bezier(0.62, 0.07, 0.36, 1)',
  '.loaded &': {
    marginTop: '-15vh',
  },
});

const Browser = styled('div')({
  marginBottom: 0,
  [mediaQueries.small]: {
    marginBottom: 24,
  },
});

export default ({ image, main = false, alt, svg }) =>
  main ? (
    <MainBrowser>
      <BrowserHeader />
      <BrowserBody image={image} alt={alt} svg={svg} />
    </MainBrowser>
  ) : (
    <Browser>
      <BrowserHeader />
      <BrowserBody image={image} alt={alt} svg={svg} />
    </Browser>
  );
