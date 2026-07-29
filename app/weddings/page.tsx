import { ContentPage } from "@/app/components/ContentPage"; import { pages } from "@/app/lib/site-content";
export default function WeddingsPage() { return <ContentPage content={pages.weddings} form="Start a wedding conversation" includeFaq/>; }
