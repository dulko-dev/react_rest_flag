import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import loading from "../assets/loading.gif";
import { Link } from "react-router-dom";

const WrapperDetail = styled.div`
  max-width: 1400px;
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
  position: relative;
  display: flex;
  justify-content: center;
  margin-top: 75px;

  @media (max-width: 950px) {
    flex-direction: column;
  }
`;
const FlagBox = styled.div`
  max-width: 600px;
  max-height: 400px;
  border: 15px solid ${({ theme }) => theme.nav};
  margin-left: 20px;

  @media (max-width: 950px) and (min-width: 201px) {
    max-width: 950px;
    max-height: 100%;
    margin-right: 20px;
  }
  @media (max-width: 200px) {
    min-width: 200px;
  }
`;
const FlagImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const TextBox = styled.div`
  position: relative;
  margin-left: 50px;
  max-width: 600px;
  display: flex;
  flex-direction: column;

  @media (max-width: 1073px) and (min-width: 949px) {
    position: static;
  }

  @media (max-width: 950px) and (min-width: 949px) {
    margin-left: 25px;
  }
`;

const Title = styled.h2`
  font-size: 2.2em;
  padding-bottom: 20px;

  @media (max-width: 950px) {
    padding-top: 20px;
  }

  @media (max-width: 476px) {
    font-size: 1.4em;
  }
`;

const Text = styled.p`
  max-width: 100%;
  padding-bottom: 15px;
  color: ${({ theme }) => theme.sub};

  @media (max-width: 476px) {
    font-size: 0.8em;
  }

  &:last-child {
    padding-top: 35px;
    max-width: 600px;
    @media (max-width: 1250px) {
      display: flex;
      flex-wrap: wrap;
    }
    @media (max-width: 1073px) and (min-width: 950px) {
      position: absolute;
      bottom: -150px;
      left: 25px;
    }
  }
`;

const SpanText = styled.span`
  width: 100%;
  font-weight: 600;
  padding-left: 10px;
  color: ${({ theme }) => theme.text};

  @media (max-width: 1073px) {
    padding-top: 10px;
  }
`;

const SpanTextBorders = styled(SpanText)`
  @media (max-width: 1250px) {
    padding-left: 0;
    padding-top: 10px;
  }
`;

const BordersBorder = styled.span`
  background-color: ${({ theme }) => theme.nav};
  border: 1px solid ${({ theme }) => theme.border};
  padding: 2px 22px;
  margin-right: 5px;
  cursor: pointer;
  display: inline-block;
  margin-top: 5px;
  margin-bottom: 5px;
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

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.text};
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

const Error = styled.p`
  margin: 0 auto;
  font-size: 3em;
  font-weight: 600;
  color: ${({ theme }) => theme.text};
`;

function NationDetails({ match }) {
  const [detail, setDetail] = useState("");
  const [error, setError] = useState("");
  const backSite = useHistory();
  const [load, setLoad] = useState(false);


  useEffect(() => {
    const abort = new AbortController();
    const FetchItem = async () => {
      setLoad(true);
      const data = await fetch(
        `https://restcountries.com/v3.1/alpha/${match.params.id}`,
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
  }, [match.params.id]);

  console.log(detail);

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
        <>
          {detail.length > 0 &&
            detail.map((detail) => (
              <ContainerDetail>
                <FlagBox>
                  <FlagImg src={detail.flags.png} />
                </FlagBox>
                <TextBox>
                  <Title>{detail.name.official}</Title>
                  <Text>
                    {/* Native Name:<SpanText>{detail.nativeName}</SpanText> */}
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
                    Capital:
                    <SpanText>
                      {detail.capital != undefined && detail.capital[0]}
                    </SpanText>
                  </Text>
                  <Text>
                    Currency symbol:
                    <SpanText>{detail.currencies.PLN.name}</SpanText>
                  </Text>
                  <Text>
                    Languages:
                    <SpanText>{detail.languages["pol"]}</SpanText>
                  </Text>
                  <Text>
                    Borders:
                    {detail.borders && detail.borders.length === 0 && (
                      <SpanText>
                        Sorry, but{" "}
                        <span style={{ color: "#90323D" }}>{detail.name}</span>{" "}
                        doesn't border with any countries
                      </SpanText>
                    )}
                    <SpanTextBorders>
                      {detail.borders &&
                        detail.borders.map((el, index) => (
                          <StyledLink to={`/${el}`} key={index}>
                            <BordersBorder>{el}</BordersBorder>
                          </StyledLink>
                        ))}
                    </SpanTextBorders>
                  </Text>
                </TextBox>
                <Error>{error}</Error>
              </ContainerDetail>
            ))}
        </>
      )}
    </WrapperDetail>
  );
}

export default NationDetails;
