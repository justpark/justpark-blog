import React from 'react';
import Link from 'gatsby-link';

import Wrapper from './Wrapper';
import imgSrc from '../../main.png';

function HeaderImage() {
  return (
    <Wrapper>
      <a href="https://www.justpark.com/">
        <img src={imgSrc} alt="" />
      </a>
    </Wrapper>
  );
}

export default HeaderImage;
