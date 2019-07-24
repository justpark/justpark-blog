import styled from 'styled-components';

const SocialLink = styled.a`
  border: 1px solid #fff;
  border-radius: 15px;
  color: #fff;
  display: inline-block;
  margin: 5px;
  padding: 5px 10px;
  text-decoration: none;

  svg {
    display: inline-block;
    height: 20px;
    margin-right: 5px;
    stroke: #1fa637;
    vertical-align: middle;
    width: 20px;
  }

  &:hover {
    border-color: #1fa637;
  }
`;

export default SocialLink;