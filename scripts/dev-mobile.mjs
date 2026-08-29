import { spawn } from "node:child_process";

const command = process.platform === "win32" ? "corepack.cmd" : "corepack";

const child = spawn(
  command,
  ["pnpm", "--filter", "@ativ/web", "exec", "next", "dev", "--port", "3001"],
  {
    stdio: "inherit",
    shell: false,
    env: {
      ...process.env,
      ATIV_NEXT_DIST: ".next-mobile",
    },
  },
);

child.on("exit", (code) => {
  process.exit(code ?? 0);
});
