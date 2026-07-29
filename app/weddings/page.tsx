import type { Metadata } from "next"; import { ContentPage } from "@/app/components/ContentPage"; import { pages } from "@/app/lib/site-content";
export const metadata: Metadata = { title: "Weddings", description: pages.weddings.intro };
export default function WeddingsPage() { return <ContentPage content={pages.weddings} form="Start a wedding conversation" includeFaq/>; }
