import styled from '@emotion/styled';

const SolarSchemaWrapper = styled.div`
  display: ${ props => (props.isHomepage ? 'none' : 'block') };
  @media ${ props => props.theme.media.md } {
    display: ${ props => (props.isHomepage ? 'block' : 'none') };
  }
`;

export default SolarSchemaWrapper;
