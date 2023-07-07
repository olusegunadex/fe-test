import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const links = [
  {
    url: "https://nextjs.org/docs/app",
    text: "Next.js app router docs",
  },
  {
    url: "https://nextjs.org/docs/getting-started/react-essentials#server-components",
    text: "Next.js server and client components docs",
  },
  {
    url: "https://formidable.com/open-source/victory/docs",
    text: "Victory chart docs",
  },
  {
    url: "https://tailwindcss.com/docs/utility-first",
    text: "Tailwind v3.x docs",
  },
  {
    url: "https://ui.shadcn.com/docs",
    text: "shadcn/ui Component library",
  },
  {
    url: "https://www.frankfurter.app/docs/",
    text: "Frankfurter (currency exchange) API docs",
  },
];

export const UsefulLinks = () => (
  <Card>
    <CardHeader>
      <CardTitle>Useful links</CardTitle>
      <CardDescription>You may wish to familarise yourself with the following:</CardDescription>
    </CardHeader>
    <CardContent>
      <ul className="list-disc pl-10">
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.url} target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </CardContent>
  </Card>
);
