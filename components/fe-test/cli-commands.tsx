import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const commands = [
  "npm run dev",
  "npm run build",
  "npm run preview",
  "npm run lint",
  "npm run lint:fix",
  "npm run format:check",
  "npm run format:write",
  "npm run typecheck",
];

export const CliCommands = () => (
  <Card>
    <CardHeader>
      <CardTitle>Available CLI Commands</CardTitle>
    </CardHeader>
    <CardContent>
      <ul className="list-disc pl-10 font-mono">
        {commands.map((command, index) => (
          <li key={index}>{command}</li>
        ))}
      </ul>
    </CardContent>
  </Card>
);
