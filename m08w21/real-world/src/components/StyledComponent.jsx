import styled from 'styled-components';

const Header = styled.h2`
  color: purple;
  text-decoration: underline;
`;

const Footer = styled.footer`
  color: ${(props) => props.pineapple ? 'salmon' : 'green'};
`;

const StyledComponent = () => {
  return (
    <div>
      <h2>How do I look?</h2>
      <Header>Do I look better?</Header>
      <Footer>No styles</Footer>
      <Footer required={false} pineapple >Conditional style</Footer>
    </div>
  );
};

export default StyledComponent;