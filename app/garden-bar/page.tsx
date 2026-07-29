import { ContentPage } from "@/app/components/ContentPage"; import { pages } from "@/app/lib/site-content"; import { pageMetadata } from "@/app/lib/metadata";
export const metadata = pageMetadata({ title: "Garden Bar & Café", description: pages.garden.intro, path: "/garden-bar" });
export default function GardenPage() { return <ContentPage content={pages.garden} form="Ask the Garden Bar team"/>; }
