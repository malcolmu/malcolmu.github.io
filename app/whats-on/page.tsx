import { EventsPage } from "@/app/components/EventsPage";
import { pageMetadata } from "@/app/lib/metadata";

export const metadata = pageMetadata({
  title: "What’s on",
  description: "Events, performances, heritage activities and gatherings at St Luke’s Bombed Out Church.",
  path: "/whats-on",
});

export default function WhatsOnPage() {
  return <EventsPage />;
}
