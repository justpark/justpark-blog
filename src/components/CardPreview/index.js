import styled from 'styled-components';

const CardPreview = styled.div`
  background: #fff;
  border: 1px solid #e0e6ed;
  box-shadow: 0 1px 5px rgba(0,0,0,0.05);
  padding: 75px 100px;
  max-width: 25%;
  margin-right: 1%;
  margin-left:1%;
  margin-bottom: 2%;
 

  @media only screen and (max-width: 870px) {
    border-left: none;
    border-right: none;
    padding: 75px 15px;
  }
`;

export default CardPreview;