import styled from 'styled-components/macro';

const ProductTestimonial = () => {
  return (
    <Wrapper>
      <Quote>
        <Content>
          "I began my journey to become a front end developer about 1 year ago,
          and I would spend every day reading your newsletter articles. It is an
          invaluable resource, thank you."
        </Content>
        <Footer>John C., CEO LOPYI</Footer>
        <Link href="/subscribe">Subscribe</Link>
      </Quote>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  grid-row: 4;
  grid-column: 1 / -1;
  text-align: center;
  padding: 1em;
  @media (min-width: 1200px) {
    margin: 3rem 0;
  }
`;

const Quote = styled.blockquote`
  margin: 0;
`;

const Content = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  line-height: 1.5;
  max-width: 750px;
  margin: 0 auto 1rem;
  background: #ef32d9;
  color: var(--dark--black);
  --blue--gradient: linear-gradient(to right, #89fffd, #ef32d9);
  background: var(--blue--gradient);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Footer = styled.footer`
  margin-top: 2em;
  color: #666;
  font-size: 0.85em;
`;

const Link = styled.a`
  --darker--blue: #0f4c75;
  margin-top: 30px;
  display: inline-block;
  padding: 15px 20px;
  font-size: 0.85em;
  letter-spacing: 1px;
  text-decoration: none;
  color: var(--light--color);
  border-radius: 3px;
  background-color: var(--darker--blue);
  transition: box-shadow 0.25s ease-in-out;

  &:hover {
    box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.25);
  }
`;

export default ProductTestimonial;
