import type { Metadata } from "next"; import { ContentPage } from "@/app/components/ContentPage"; import { pages } from "@/app/lib/site-content";
export const metadata: Metadata = { title: "Venue hire", description: pages.hire.intro };
export default function HirePage() { return <ContentPage content={pages.hire} form="Tell us about your event"/>; }
