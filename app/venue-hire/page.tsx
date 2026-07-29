import { ContentPage } from "@/app/components/ContentPage"; import { pages } from "@/app/lib/site-content"; import { pageMetadata } from "@/app/lib/metadata";
export const metadata = pageMetadata({ title: "Venue hire", description: pages.hire.intro, path: "/venue-hire" });
export default function HirePage() { return <ContentPage content={pages.hire} form="Tell us about your event"/>; }
