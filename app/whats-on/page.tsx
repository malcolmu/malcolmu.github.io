import type { Metadata } from "next";
import { EventsPage } from "@/app/components/EventsPage";

export const metadata: Metadata = {
  title: "What’s on",
  description: "Events, performances, heritage activities and gatherings at St Luke’s Bombed Out Church.",
};

export default function WhatsOnPage() {
  return <EventsPage />;
}
