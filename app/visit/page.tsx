import type { Metadata } from "next"; import { ContentPage } from "@/app/components/ContentPage"; import { pages } from "@/app/lib/site-content";
export const metadata: Metadata = { title: "Visit", description: pages.visit.intro };
export default function VisitPage() { return <ContentPage content={pages.visit} form="Ask about your visit"/>; }
