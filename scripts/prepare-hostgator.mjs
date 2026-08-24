import { cp, mkdir, rm, stat } from "node:fs/promises";
import path from "node:path";

const workspace = process.cwd();
const source = path.resolve(workspace, "apps/web/out");
const destination = path.resolve(workspace, "dist/hostgator");
const allowedRoot = path.resolve(workspace, "dist");

if (!destination.startsWith(`${allowedRoot}${path.sep}`)) {
  throw new Error(`Refusing to write outside dist: ${destination}`);
}

const sourceStats = await stat(source).catch(() => null);
if (!sourceStats?.isDirectory()) {
  throw new Error("Static export not found. Run the web build first.");
}

await rm(destination, { recursive: true, force: true });
await mkdir(destination, { recursive: true });
await cp(source, destination, { recursive: true });

console.log(`HostGator artifact prepared at ${destination}`);
