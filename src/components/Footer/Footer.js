import styled from 'styled-components/macro';

const Footer = () => {
  return (
    <Wrapper>
      <p>
        <PolicyLink href="#">Privacy Policy</PolicyLink>
        <PolicyLink href="#">Terms of Service</PolicyLink>
      </p>
      <Copyright>
        Project made by{' '}
        <SocialLink
          href="https://www.alexandracaulea.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Alexandra Caulea
        </SocialLink>
        . View source on{' '}
        <SocialLink
          href="https://github.com/alexandracaulea/working-with-apis/tree/master/Sign%20up%20Landing%20Page"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </SocialLink>
      </Copyright>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  margin: 2rem 1rem;
  font-size: 0.85em;
  color: var(--dark--color);

  @media (min-width: 1200px) {
    max-width: 70vw;
    margin: 0 auto;
  }
`;

const Copyright = styled.p`
  margin-top: 3rem;
  margin-bottom: 3rem;
  text-align: center;
  font-size: 1rem;
`;

const PolicyLink = styled.a`
  display: inline-block;
  padding: 0.5em 1em;
  color: currentColor;
  &:hover {
    color: var(--dark--blue);
  }
`;

const SocialLink = styled.a`
  display: inline-block;
  padding: 0;
  text-decoration: none;
  color: #a94e76;
  border-bottom: 1px dashed #a94e76;
  &:hover {
    color: var(--dark--blue);
    border-color: var(--dark--blue);
  }
`;

export default Footer;
