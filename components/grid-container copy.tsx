import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GridContainer = ({ children }: Props) => {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 transition-opacity md:py-10">
      <div className="flex flex-col items-start gap-2">{children}</div>
    </section>
  );
};

export { GridContainer };
