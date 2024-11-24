import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function Rout() {
  const [time, setTime] = useState([]);

  useEffect(() => {
    getApi();
  }, []);
  async function getApi() {
    let url = await fetch("https://jsonplaceholder.typicode.com/users/");
    let response = await url.json();
    setTime(response);
  }

  return (
    <>
      {time.map((value) => {
        return (
          <h2 key={value.id}>
            {value.name} - {value.id}
          </h2>
        );
      })}
    </>
  );
}

export default Rout;
