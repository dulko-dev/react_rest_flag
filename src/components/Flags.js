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
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 1400px;
`;

function Flags() {
  const [data, setData] = useState("");
  const [error, setError] = useState("");
  const [inputField, setInputField] = useState("");
  const [filteredCountries, setfilteredCountries] = useState("");

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

  useEffect(() => {
    setfilteredCountries(
      Array.isArray(data) &&
        data.filter((country) => {
          return country.name.toLowerCase().includes(inputField.toLowerCase());
        })
    );
  }, [inputField, data]);

  return (
    <WrapperFlags>
      <FirstRowContainer>
        <InputFlags setInputField={setInputField} inputField={inputField} />
        <SelectorFlags />
      </FirstRowContainer>
      <SecondRowContainer>
        {Array.isArray(filteredCountries) &&
          filteredCountries.map((flag) => (
            <DisplayFlags flag={flag} key={flag.numericCode} />
          ))}
      </SecondRowContainer>
    </WrapperFlags>
  );
}

export default Flags;
