import { ContentPage } from "@/app/components/ContentPage"; import { pages } from "@/app/lib/site-content"; import { pageMetadata } from "@/app/lib/metadata";
export const metadata = pageMetadata({ title: "Get involved", description: pages.involved.intro, path: "/get-involved" });
export default function InvolvedPage() { return <ContentPage content={pages.involved} form="Register your interest"/>; }
