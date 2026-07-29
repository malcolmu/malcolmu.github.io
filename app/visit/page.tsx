import { ContentPage } from "@/app/components/ContentPage"; import { pages } from "@/app/lib/site-content"; import { pageMetadata } from "@/app/lib/metadata";
export const metadata = pageMetadata({ title: "Visit", description: pages.visit.intro, path: "/visit" });
export default function VisitPage() { return <ContentPage content={pages.visit} form="Ask about your visit"/>; }
