import React, { useEffect, useState } from "react";
import InputFlags from "./InputFlags";
import SelectorFlags from "./SelectorFlags";
import DisplayFlags from "./DisplayFlags";
import styled from "styled-components";
import loading from "../assets/loading.gif";

const WrapperFlags = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`;
const FirstRowContainer = styled.div`
  max-width: 1400px;
  display: flex;
  justify-content: space-between;
  height: 140px;
  flex-wrap: wrap;
  align-items: center;
  position: relative;

  @media (max-width: 1400px) and (min-width: 212px) {
    margin: 0 20px;
  }

  @media (max-width: 425px) and (min-width: 212px) {
    justify-content: center;
    min-width: 193px;
  }
  @media (max-width: 193px) {
    justify-content: flex-start;
    margin: 0;
  }
`;

const SecondRowContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  max-width: 1400px;
  flex-wrap:wrap;

  @media (max-width: 1359px){
    justify-content:center;
  }
`;

const Error = styled.p`
  margin: 0 auto;
  font-size: 3em;
  font-weight: 600;
  color: ${({ theme }) => theme.text};
`;

const Loading = styled.img.attrs({
  src: `${loading}`,
})`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 300px;
`;

function Flags() {
  const [data, setData] = useState("");
  const [error, setError] = useState("");
  const [inputField, setInputField] = useState("");
  const [filteredCountries, setfilteredCountries] = useState("");
  const [region, setRegion] = useState("filter");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const filterRegion = () => {
      switch (region) {
        case "africa":
          setfilteredCountries(
            Array.isArray(data) && data.filter((el) => el.region === "Africa")
          );
          break;
        case "asia":
          setfilteredCountries(
            Array.isArray(data) && data.filter((el) => el.region === "Asia")
          );
          break;
        case "europe":
          setfilteredCountries(
            Array.isArray(data) && data.filter((el) => el.region === "Europe")
          );
          break;
        case "oceania":
          setfilteredCountries(
            Array.isArray(data) && data.filter((el) => el.region === "Oceania")
          );
          break;
        default:
          setfilteredCountries(data);
      }
    };

    filterRegion();
  }, [region, data]);

  useEffect(() => {
    setLoading(true);
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
      setLoading(false);
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
        <SelectorFlags setRegion={setRegion} />
      </FirstRowContainer>
      {loading ? (
        <Loading />
      ) : (
        <SecondRowContainer>
          {Array.isArray(filteredCountries) &&
            filteredCountries.map((flag) => (
              <DisplayFlags
                flag={flag}
                key={flag.numericCode}
                region={region}
              />
            ))}
          <Error>{error}</Error>
        </SecondRowContainer>
      )}
    </WrapperFlags>
  );
}

export default Flags;
