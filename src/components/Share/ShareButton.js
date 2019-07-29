import styled from 'styled-components';

const ShareButton = styled.a`
  border: 2px solid #21303e;
  background-color: #fff;
  border-radius: 15px;
  display: inline-block;
  margin: 5px;
  padding: 5px 15px;
  text-decoration: none;

  svg {
    display: inline-block;
    height: 20px;
    stroke: #1fa637;
    vertical-align: middle;
    width: 20px;
  }

  &:hover {
    border-color: #1fa637;
  }
`;

export default ShareButton;