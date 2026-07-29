export const siteBasePath = "/slboc";

export function assetPath(path: string) {
  if (!path.startsWith("/")) return path;
  return `${siteBasePath}${path}`;
}
