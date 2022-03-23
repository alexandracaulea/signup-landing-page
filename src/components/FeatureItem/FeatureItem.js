import styled from 'styled-components';
import { ReactSVG } from 'react-svg';

const FeatureItem = ({ title, details, iconUrl }) => {
  return (
    <li>
      <ReactSVG src={iconUrl} />
      <Title>{title}</Title>
      <Details>{details}</Details>
    </li>
  );
};

const Title = styled.h3`
  margin-top: 0.5em;
`;

const Details = styled.p`
  line-height: 1.5;
`;

export default FeatureItem;
