import { Title } from "@/components/ui/title";
import { CliCommands } from "@/components/fe-test/cli-commands";
import { IntroCopy } from "@/components/fe-test/intro-copy";
import { SuccessCriteria } from "@/components/fe-test/success-criteria";
import { UsefulLinks } from "@/components/fe-test/useful-links";
import { GridContainer } from "@/components/grid-container";

export default function HomePage() {
  return (
    <GridContainer>
      <Title>Moot FE Tech Test</Title>

      <IntroCopy />

      <div className="flex h-full w-full flex-col">
        <div className="my-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
          <SuccessCriteria />
          <div className="flex flex-col gap-4">
            <UsefulLinks />
            <CliCommands />
          </div>
        </div>
      </div>
    </GridContainer>
  );
}
