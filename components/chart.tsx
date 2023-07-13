"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { VictoryChart } from "victory";

export function Chart() {
  const [ratesOne, setRatesOne] = useState("");
  const [ratesTwo, setRatesTwo] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);

  const reqUrl1 = "https://api.frankfurter.app/2023-01-01..2023-01-31?from=GBP&to=USD";
  const reqUrl2 = "https://api.frankfurter.app/2013-01-01..2013-01-31?from=GBP&to=USD";

  useEffect(() => {
    const fetchDataOne = async () => {
      try {
        const response = await axios.get(reqUrl1);
        const responseData = response.data;
        setRatesOne(responseData.rates);
      } catch (error) {
        console.log(error);
      }
    };

    const fetchDataTwo = async () => {
      try {
        const response = await axios.get(reqUrl2);
        const responseData = response.data;
        setRatesTwo(response.data.rates);
      } catch (error) {
        console.log(error);
      }
    };

    Promise.all([fetchDataOne(), fetchDataTwo()]).then(() => {
      setIsLoaded(true);
    });
  }, []);

  console.log("rates one and two", ratesOne, ratesTwo);

  return <div>chart</div>;
}
