// LogoComponent.js

import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components' ;


const LogoImage = styled.img`
/* Specify the maximum width for screens wider than 1900px */
@media (min-width: 2401px) {
  max-width: 10vw;
}

/* Adjust the width for screens between 992px and 1900px (Bootstrap's lg breakpoint) */
@media (min-width: 992px) and (max-width: 2400px) {
    /* Define the width for this breakpoint, e.g., 10vw */
    width: 15vw;
}

  /* Adjust the width for screens between 992px and 1900px (Bootstrap's lg breakpoint) */
@media (min-width: 992px) and (max-width: 1900px) {
    /* Define the width for this breakpoint, e.g., 10vw */
    width: 20vw;
}
  
/* Adjust the width for screens between 576px and 991px (Bootstrap's md breakpoint) */
@media (min-width: 576px) and (max-width: 991px) {
    /* Define the width for this breakpoint, e.g., 8vw */
    width: 30vw;
}

/* Adjust the width for screens smaller than 576px (Bootstrap's sm breakpoint) */
@media (min-width: 100px) and (max-width: 575px) {
    /* Define the width for this breakpoint, e.g., 6vw */
    width: 40vw;
}
`
;

const LogoComponent = ({ url }) => {
  return (
      <LogoImage src={url} alt="Logo" />
  );
};

const mapStateToProps = (state) => {
  return {
    url: state.logo.url,
  };
};

export default connect(mapStateToProps)(LogoComponent);
