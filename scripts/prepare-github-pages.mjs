import { cp, mkdir, readdir, rename, rm, writeFile } from "node:fs/promises";
import path from "node:path";

const repoRoot = process.cwd();
const outDir = path.join(repoRoot, "out");
const stagingDir = path.join(repoRoot, ".out-pages-tmp");
const siteSubpath = "slboc";
const nestedOutDir = path.join(outDir, siteSubpath);

await rm(stagingDir, { recursive: true, force: true });
await rename(outDir, stagingDir);

await mkdir(nestedOutDir, { recursive: true });

const entries = await readdir(stagingDir, { withFileTypes: true });

for (const entry of entries) {
  const sourcePath = path.join(stagingDir, entry.name);
  const targetPath = path.join(nestedOutDir, entry.name);

  await cp(sourcePath, targetPath, { recursive: true });
}

const redirectHtml = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="robots" content="noindex, nofollow" />
    <title>Redirecting…</title>
    <meta http-equiv="refresh" content="0; url=/${siteSubpath}/" />
    <script>
      window.location.replace('/${siteSubpath}/');
    </script>
  </head>
  <body>
    <p>Redirecting to <a href="/${siteSubpath}/">/${siteSubpath}/</a>…</p>
  </body>
</html>
`;

await writeFile(path.join(outDir, "index.html"), redirectHtml, "utf8");

await rm(stagingDir, { recursive: true, force: true });
