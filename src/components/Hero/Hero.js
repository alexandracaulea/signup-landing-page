import styled from 'styled-components/macro';
import { ReactComponent as CurvedShape } from '../../assets/curved-shape.svg';
import './Hero.css';

const Hero = () => {
  return (
    <Wrapper>
      <Title>Daily articles about HTML, CSS and JavaScript.</Title>
      <Subtitle>Trusted by over 10,000 other developers</Subtitle>
      <Form method="POST" name="subscribe-form" action="#">
        <EmailInput
          type="email"
          aria-label="Email Address"
          placeholder="Enter your email address"
          spellCheck="false"
        />
        <SubscribeButton>Subscribe</SubscribeButton>
      </Form>
      <CurvedShape className="curved-shape" />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  grid-column: 1 / -1;
  grid-row: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #8e2de2;
  background-image: var(--purple--gradient);
  text-align: center;
  color: var(--light--color);
`;

const Title = styled.h1`
  padding: 0 0.5rem;
  margin-top: 3rem;
  margin-bottom: 0;
  font-size: 1.4rem;
  font-size: calc(1.375rem + 1.6vw);
  line-height: 1.3;
  font-weight: 700;
`;

const Subtitle = styled.h2`
  font-size: 1.2rem;
  font-size: calc(0.3rem + 1.6vw);
  font-weight: normal;
`;

const Form = styled.form`
  margin-top: 50px;
  height: 50px;
  width: 100%;
  padding: 0 1em;
`;

const EmailInput = styled.input`
  width: 100%;
  max-width: 350px;
  height: 50px;
  margin: 0 10px 20px 0;
  padding: 0.5em 0.7em;
  border: none;
  border-radius: 3px;
  font-family: inherit;
  font-size: 0.85em;
  color: var(--dark--color);

  &::-webkit-input-placeholder {
    color: inherit;
  }
  &::-moz-placeholder {
    color: inherit;
  }
  &:-ms-input-placeholder {
    color: inherit;
  }
  &:-moz-placeholder {
    color: inherit;
  }
`;

const SubscribeButton = styled.button`
  height: 50px;
  padding: 0.5em 1.5rem;
  font-size: 0.85em;
  letter-spacing: 1px;
  border: none;
  border-radius: 3px;
  --darker--blue: #0f4c75;
  background-color: var(--darker--blue);
  color: var(--light--color);
  cursor: pointer;
  transition: background-color 0.25s ease-in-out;

  &:hover {
    background-color: var(--hot--pink);
  }

  &:active {
    background-color: #4160bb;
  }
`;

export default Hero;
