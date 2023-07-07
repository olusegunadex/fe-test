import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Title = ({ children }: Props) => {
  return (
    <h1 className="mb-8 text-3xl font-semibold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
      {children}
    </h1>
  );
};

export { Title };
