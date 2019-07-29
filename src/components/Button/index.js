import styled from 'styled-components';
import Link from 'gatsby-link';

const Button = styled(Link)`
  border: 1px solid #fff;
  border-radius: 25px;
  color: #1fa637;
  display: inline-block;
  font-size: 10px;
  font-weight: 700;
  margin: 40px 10px;
  position: relative;
  padding: 5px 15px;
  text-decoration: none;
  text-transform: uppercase;

  &:hover {
    border-color: #1fa637;
  }
`;

export default Button;