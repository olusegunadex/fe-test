"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { VictoryAxis, VictoryChart, VictoryGroup, VictoryLegend, VictoryLine } from "victory";

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
        <div style={{ maxWidth: "100%" }}>
          <VictoryChart domainPadding={{ y: 2 }} minDomain={{ y: 1.1 }} maxDomain={{ y: 1.72 }}>
            <VictoryLegend
              x={250}
              y={30}
              orientation="horizontal"
              gutter={10}
              style={{ border: { stroke: "black" }, title: { fontSize: 20 }, labels: { fontSize: 4 } }}
              data={[{ name: "Jan 2023: GBP to USD", symbol: { fill: "#7373f3" } }, { name: "Jan 2013: GBP to USD" }]}
            />
            <VictoryAxis
              tickFormat={(x) => x}
              style={{
                tickLabels: { fontSize: 4 },
                ticks: { stroke: "grey", size: 2 },
                axisLabel: {
                  fontSize: 6,
                },
                axis: {
                  stroke: "#000",
                  strokeWidth: 3,
                },
              }}
              label="Date"
            />
            <VictoryAxis
              dependentAxis
              tickFormat={(y) => `${y}`}
              style={{
                tickLabels: { fontSize: 4 },
                axis: {
                  stroke: "#000",
                  strokeWidth: 1,
                  padding: { left: 2, right: 2 },
                },
                grid: { stroke: "#f6f6f6" },
                ticks: { stroke: "grey", size: 2 },
                axisLabel: {
                  fontSize: 6,
                },
              }}
              label="GBP to USD"
            />
            <VictoryGroup>
              <VictoryLine
                data={Object.entries(normData).map(([x, y]) => ({ x, y: y.y1 }))}
                x="x"
                y="y"
                style={{
                  data: { stroke: "#7373f3", strokeWidth: 1 },
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
