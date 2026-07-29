import type { Metadata } from "next"; import { ContentPage } from "@/app/components/ContentPage"; import { pages } from "@/app/lib/site-content";
export const metadata: Metadata = { title: "Get involved", description: pages.involved.intro };
export default function InvolvedPage() { return <ContentPage content={pages.involved} form="Register your interest"/>; }
