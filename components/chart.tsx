"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { VictoryChart, VictoryGroup, VictoryLine } from "victory";

export function Chart() {
  const [ratesOne, setRatesOne] = useState("");
  const [ratesTwo, setRatesTwo] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  const [normData, setNormData] = useState([]);

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

  interface Rate {
    USD: number;
  }
  interface NormalizedRate {
    y2: number;
    y1: number;
  }

  useEffect(() => {
    if (isLoaded && ratesOne && ratesTwo) {
      const normalizedRates: { [key: string]: NormalizedRate } = {};

      Object.keys(ratesOne).forEach((dateKey: string) => {
        const compDateKey: string = dateKey.replace("2023", "2013");
        if (ratesTwo[compDateKey]) {
          normalizedRates[dateKey] = {
            y2: ratesTwo[compDateKey].USD,
            y1: ratesOne[dateKey].USD,
          };
        }
      });

      setNormData(normalizedRates);
    }
  }, [isLoaded]);

  return (
    <>
      {ratesOne && ratesTwo ? (
        <div>
          <VictoryChart domainPadding={20} minDomain={{ y: 1.1 }} maxDomain={{ y: 1.72 }}>
            <VictoryGroup>
              <VictoryLine
                data={Object.entries(normData).map(([x, y]) => ({ x, y: y.y1 }))}
                x="x"
                y="y"
                style={{
                  data: { stroke: "#c43a31", strokeWidth: 1 },
                  parent: { border: "1px solid #ccc" },
                }}
              />

              <VictoryLine
                data={Object.entries(normData).map(([x, y]) => ({ x, y: y.y2 }))}
                x="x"
                y="y"
                style={{
                  data: { stroke: "#c5c5c5", strokeWidth: 1, strokeDasharray: "3, 3" },
                }}
              />
            </VictoryGroup>
          </VictoryChart>
        </div>
      ) : (
        <h4>Loading...</h4>
      )}
    </>
  );
}
