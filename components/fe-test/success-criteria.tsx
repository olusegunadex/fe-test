import Link from "next/link";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const SuccessCriteria = () => (
  <Card>
    <CardHeader>
      <CardTitle>Success Criteria</CardTitle>
      <CardDescription>
        Feel free to time limit this task as needed &ndash; we suggest around 2 hours maximum.
      </CardDescription>
    </CardHeader>
    <CardContent>
      <ol className="flex list-decimal flex-col gap-3 pl-8">
        <li>
          We&apos;d like you to add a new Victory chart on the{" "}
          <Link href={`/my-awesome-chart`} className="underline hover:no-underline">
            /my-awesome-chart
          </Link>{" "}
          route. Here&apos;s a{" "}
          <a href="/chart-reference.png" className="font-bold underline hover:no-underline">
            reference image
          </a>{" "}
          if useful.
        </li>
        <li>
          For time-series data, please use the following JSON data source which contains GBP to USD exchange rates from
          January 2023:
          <code>
            <a
              href="https://api.frankfurter.app/2023-01-01..2023-01-31?from=GBP&to=USD"
              target="_blank"
              rel="noopener nofollow"
              className="my-2 block rounded-md bg-slate-300/20 p-3 px-4 text-xs hover:bg-slate-300/30"
            >
              https://api.frankfurter.app/2023-01-01..2023-01-31?from=GBP&to=USD
            </a>
          </code>
        </li>
        <li>
          Using 31 days of historical data from January 2023, let&apos;s plot this data on a chart with the date being
          on the x-axis.
        </li>
        <li>
          We&apos;ll request this API data from the <code>my-awesome-chart/page.tsx</code> server component &ndash;
          worth checking the docs at this point if new to Next.js 13.4+.
          <br />
          <strong>Hint:</strong> When you have the time-series data , you may need to transform it into a different
          format for <strong>VictoryLine</strong> to work correctly.
          <p className="mt-4 whitespace-pre rounded-md bg-slate-300/20 font-mono text-xs">
            {`
          {
            x: "date"
            y: value
          }
          `}
          </p>
        </li>
        <li>
          Create a new chart component which we&apos;ll use as container.
          <br />
          <strong>Important:</strong> This will need to be a <em>client</em> component for Victory to work correctly
          (search for <em>&quot;use client&quot;</em> in the Next.js docs). Pass the data to the chart component via
          props.
        </li>
        <li>
          Import Victory in the chart component (Victory is already installed in the project) and use the{" "}
          <strong>VictoryLine</strong> chart type, and label the axes accordingly.
        </li>
        <li>
          Let&apos;s add a second line so we can compare our 2023 GBP to USD exchange rates to the same time period 10
          years ago:
          <code>
            <a
              href="https://api.frankfurter.app/2013-01-01..2013-01-31?from=GBP&to=USD"
              target="_blank"
              rel="noopener nofollow"
              className="my-2 block rounded-md bg-slate-300/20 p-3 px-4 text-xs hover:bg-slate-300/30"
            >
              https://api.frankfurter.app/2013-01-01..2013-01-31?from=GBP&to=USD
            </a>
          </code>
          <p>Request this data as you did previously, and pass it into your chart component.</p>
        </li>
        <li>
          If you have time, you&apos;re welcome to style the chart to your liking and add any additional Victory
          features like tooltips, a legend, line animations etc, but this is not required.
        </li>
      </ol>
    </CardContent>
  </Card>
);
