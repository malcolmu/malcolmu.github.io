import type { Metadata } from "next"; import { ContentPage } from "@/app/components/ContentPage"; import { pages } from "@/app/lib/site-content";
export const metadata: Metadata = { title: "Garden Bar & Café", description: pages.garden.intro };
export default function GardenPage() { return <ContentPage content={pages.garden} form="Ask the Garden Bar team"/>; }
