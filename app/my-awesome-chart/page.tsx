import { Title } from "@/components/ui/title";
import { Chart } from "@/components/chart";
import { GridContainer } from "@/components/grid-container";

export default function AwesomeChart() {
  return (
    <GridContainer>
      <Title>My Awesome Chart</Title>

      <div className="flex h-full w-full flex-col">
        <Chart />
      </div>
    </GridContainer>
  );
}
