import React, { useEffect, useState } from "react";

function NationDetails({ match }) {
  const [detail, setDetail] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const FetchItem = async () => {
      const data = await fetch(
        `https://restcountries.eu/rest/v2/alpha/${match.params.id}`
      );

      if (!data.ok) {
        const mssg = `error ${data.status}`;
        setError(mssg);
      }

      const detail = await data.json();
      return detail;
    };
    FetchItem()
      .then((data) => setDetail(data))
      .catch((err) => console.log(err));
  }, []);

  return <div>NationDetails</div>;
}

export default NationDetails;
