import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import loading from "../assets/loading.gif";

const WrapperDetail = styled.div`
  height: 100%;
  width: 1400px;
  margin: 0 auto;
`;

const BackButton = styled.button`
  margin-top: 50px;
  background-color: ${({ theme }) => theme.nav};
  color: ${({ theme }) => theme.text};
  padding: 10px 30px;
  border: none;
  border-radius: 7px;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px,
    rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px,
    rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
`;

const ContainerDetail = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 75px;
`;
const FlagBox = styled.div`
  margin-right: 50px;
  width: 600px;
  height: 400px;
  border: 15px solid ${({ theme }) => theme.nav};
`;
const FlagImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const TextBox = styled.div`
  position: relative;
  margin-left: 50px;
  width: 100%;
  flex-basis: 45%;
`;
const Title = styled.h2`
  font-size: 2.2em;
  padding-bottom: 20px;
`;
const Text = styled.p`
  padding-bottom: 15px;
  color: ${({ theme }) => theme.sub};
  &:last-child {
    position: absolute;
    bottom: 0;
  }
`;
const SpanText = styled.span`
  font-weight: 600;
  padding-left: 10px;
  color: ${({ theme }) => theme.text};
`;

const BordersBorder = styled.span`
  background-color: ${({ theme }) => theme.nav};
  border: 1px solid ${({ theme }) => theme.border};
  padding: 2px 22px;
  margin-right: 5px;
  cursor: pointer;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
      rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
      rgba(0, 0, 0, 0.09) 0px 32px 16px;
  }
`;

const LoadIcon = styled.img.attrs({
  src: `${loading}`,
})`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

function NationDetails({ match }) {
  const [detail, setDetail] = useState([]);
  const [error, setError] = useState("");
  const backSite = useHistory();
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const abort = new AbortController();
    const FetchItem = async () => {
      setLoad(true);
      const data = await fetch(
        `https://restcountries.eu/rest/v2/alpha/${match.params.id}`,
        { signal: abort.signal }
      );

      if (!data.ok) {
        const mssg = `error ${data.status}`;
        setError(mssg);
      }

      const detail = await data.json();
      setLoad(false);
      return detail;
    };
    FetchItem()
      .then((data) => setDetail(data))
      .catch((err) => console.log(err));
    return () => abort.abort();
  }, []);

  console.log(detail.borders);
  return (
    <WrapperDetail>
      <BackButton type="button" onClick={() => backSite.push("/")}>
        <FontAwesomeIcon
          icon={faAngleLeft}
          size="lg"
          style={{ marginRight: "15px" }}
        />
        Back
      </BackButton>

      {load ? (
        <LoadIcon />
      ) : (
        <ContainerDetail>
          <FlagBox>
            <FlagImg src={detail.flag} />
          </FlagBox>
          <TextBox>
            <Title>{detail.name}</Title>
            <Text>
              Native Name:<SpanText>{detail.nativeName}</SpanText>
            </Text>
            <Text>
              Population:<SpanText>{detail.population}</SpanText>
            </Text>
            <Text>
              Region:<SpanText>{detail.region}</SpanText>
            </Text>
            <Text>
              Sub Region:<SpanText>{detail.subregion}</SpanText>
            </Text>
            <Text>
              Capital:<SpanText>{detail.capital}</SpanText>
            </Text>
            <Text>
              Currency symbol:
              <SpanText>
                {detail.currencies &&
                  detail.currencies.map((el, index) => (
                    <span
                      style={{ paddingRight: "7px", display: "inline-block" }}
                      key={index}
                    >
                      {el.symbol}
                    </span>
                  ))}
              </SpanText>
            </Text>
            <Text>
              Languages:
              <SpanText>
                {detail.languages &&
                  detail.languages.map((el, index) => (
                    <span
                      style={{ paddingRight: "7px", display: "inline-block" }}
                      key={index}
                    >
                      {el.name}
                    </span>
                  ))}
              </SpanText>
            </Text>
            <Text>
              Borders:
              {detail.borders && detail.borders.length === 0 && (
                <SpanText>Sorry, but there are no data to display</SpanText>
              )}
              <SpanText>
                {detail.borders &&
                  detail.borders.map((el, index) => (
                    <BordersBorder key={index}>{el}</BordersBorder>
                  ))}
              </SpanText>
            </Text>
          </TextBox>
        </ContainerDetail>
      )}
    </WrapperDetail>
  );
}

export default NationDetails;
