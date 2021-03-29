import React from "react";
import styled from "styled-components";

const WrapperDisplayFlags = styled.div`
  height: 300px;
  border: 15px solid #2b3945;
  border-radius: 15px;
  width: 250px;
  margin: 15px 30px;
  /* box-sizing: border-box; */
`;

const ImageFlags = styled.img`
  height: 50%;
  width: 100%;
  border-radius: 7px 7px 0 0;
`;

function DisplayFlags({ flag }) {
  return (
    <WrapperDisplayFlags>
      <ImageFlags src={flag.flag} />
    </WrapperDisplayFlags>
  );
}

export default DisplayFlags;
