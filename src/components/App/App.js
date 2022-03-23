import styled from 'styled-components';
import GlobalStyles from '../GlobalStyles';
import PageGrid from '../PageGrid';
import Header from '../Header';
import Hero from '../Hero';
import ProductFeatures from '../ProductFeatures';
import ProductTestimonial from '../ProductTestimonial';
import Footer from '../Footer';
import { ReactComponent as HeroIllustration } from '../../assets/hero-illustration.svg';

function App() {
  return (
    <>
      <Header />
      <Main>
        <Hero />
        <IllustrationWrapper>
          <HeroIllustration />
        </IllustrationWrapper>
        <ProductFeatures />
        <ProductTestimonial />
      </Main>
      <Footer />
      <GlobalStyles />
    </>
  );
}

const Main = styled(PageGrid)``;

const IllustrationWrapper = styled.div`
  grid-column: 2 / 3;
  grid-row: 2;
  justify-self: center;
  text-align: center;
  margin-top: -100px;
  width: 100%;
  height: 100%;

  @media (min-width: 600px) {
    margin-top: -150px;
  }

  svg {
    display: inline-block;
    max-width: 500px;
  }
`;

export default App;
