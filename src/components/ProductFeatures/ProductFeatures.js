import styled from 'styled-components/macro';
import data from '../../data';
import FeatureItem from '../FeatureItem/FeatureItem';

const ProductFeatures = () => {
  return (
    <Wrapper>
      <List>
        {data.map(({ id, title, details, iconUrl }) => (
          <FeatureItem
            key={id}
            title={title}
            details={details}
            iconUrl={iconUrl}
          />
        ))}
      </List>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  grid-row: 3;
  grid-column: 1 / -1;
  margin: 1.75rem 0;
  padding: 2em 1em 0;
`;

const List = styled.ul`
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, auto));
  grid-gap: 20px;

  @media (min-width: 1200px) {
    max-width: 70vw;
  }
`;

export default ProductFeatures;
