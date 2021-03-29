import React, { useEffect, useState } from "react";
import InputFlags from "./InputFlags";
import SelectorFlags from "./SelectorFlags";
import DisplayFlags from "./DisplayFlags";
import styled from "styled-components";

const WrapperFlags = styled.div`
  width: 1400px;
  margin: 0 auto;
`;
const FirstRowContainer = styled.div`
  width: inherit;
  display: flex;
  justify-content: space-between;
  height: 15vh;
  align-items: center;
  position: relative;
`;

const SecondRowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width:inherit;
  
`;

function Flags() {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  console.log(data);
  useEffect(() => {
    let abort = new AbortController();
    const fetchData = async () => {
      const response = await fetch(`https://restcountries.eu/rest/v2/all`, {
        signal: abort.signal,
      });

      if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        setError(message);
      }
      const flags = await response.json();
      return flags;
    };

    fetchData()
      .then((data) => setData(data))
      .catch((error) => {
        console.log(error);
      });
    return () => abort.abort();
  }, []);

  return (
    <WrapperFlags>
      <FirstRowContainer>
        <InputFlags />
        <SelectorFlags />
      </FirstRowContainer>
      <SecondRowContainer>
        {data.map((flag) => (
          <DisplayFlags flag={flag} key={flag.numericCode} />
        ))}
      </SecondRowContainer>
    </WrapperFlags>
  );
}

export default Flags;
