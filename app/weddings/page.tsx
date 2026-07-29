import { ContentPage } from "@/app/components/ContentPage"; import { pages } from "@/app/lib/site-content"; import { pageMetadata } from "@/app/lib/metadata";
export const metadata = pageMetadata({ title: "Weddings", description: pages.weddings.intro, path: "/weddings" });
export default function WeddingsPage() { return <ContentPage content={pages.weddings} form="Start a wedding conversation" includeFaq/>; }
