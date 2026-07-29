import { pageMetadata } from "@/app/lib/metadata";
export { default } from "@/app/blog/page";

export const metadata = {
  ...pageMetadata({
  title: "News & stories",
  description: "News and stories from St Luke’s Bombed Out Church.",
  path: "/blog",
  }),
  robots: { index: false, follow: true },
};
