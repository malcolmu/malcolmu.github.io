"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { EventCard } from "@/app/components/EventCard";
import { SiteHeader } from "@/app/components/SiteHeader";
import { eventCategories, events, formatTime, type EventCategory } from "@/app/lib/events";

const monthStart = new Date(2026, 7, 1);
const dayLabels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const toLocalKey = (date: Date) => `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;

function eventIsOnDate(event: typeof events[number], key: string) {
  return key >= event.date && key <= (event.endDate ?? event.date);
}

export function EventsPage() {
  const [month, setMonth] = useState(monthStart);
  const [selectedDate, setSelectedDate] = useState("2026-08-08");
  const [filter, setFilter] = useState<EventCategory | "All">("All");
  const [mode, setMode] = useState<"calendar" | "agenda">("calendar");

  const filteredEvents = useMemo(
    () => events.filter((event) => filter === "All" || event.category === filter),
    [filter],
  );

  const monthDays = useMemo(() => {
    const year = month.getFullYear();
    const monthIndex = month.getMonth();
    const startOffset = (new Date(year, monthIndex, 1).getDay() + 6) % 7;
    return Array.from({ length: 42 }, (_, index) => new Date(year, monthIndex, 1 - startOffset + index));
  }, [month]);

  const updateUrl = (nextDate: string, nextMode = mode) => {
    const url = new URL(window.location.href);
    url.searchParams.set("date", nextDate);
    url.searchParams.set("view", nextMode);
    window.history.replaceState({}, "", `${url.pathname}?${url.searchParams.toString()}`);
  };

  const chooseDate = (date: Date) => {
    const key = toLocalKey(date);
    setSelectedDate(key);
    updateUrl(key);
  };

  const changeMonth = (step: number) => {
    const next = new Date(month.getFullYear(), month.getMonth() + step, 1);
    setMonth(next);
    const selected = new Date(`${selectedDate}T12:00:00`);
    if (selected.getMonth() !== next.getMonth() || selected.getFullYear() !== next.getFullYear()) {
      const first = toLocalKey(next);
      setSelectedDate(first);
      updateUrl(first);
    }
  };

  const changeMode = (nextMode: "calendar" | "agenda") => {
    setMode(nextMode);
    updateUrl(selectedDate, nextMode);
  };

  const selectedEvents = filteredEvents.filter((event) => eventIsOnDate(event, selectedDate));
  const allUpcoming = filteredEvents.filter((event) => event.date >= toLocalKey(month));
  const monthTitle = new Intl.DateTimeFormat("en-GB", { month: "long", year: "numeric" }).format(month);
  const selectedLabel = new Intl.DateTimeFormat("en-GB", { weekday: "long", day: "numeric", month: "long" }).format(new Date(`${selectedDate}T12:00:00`));

  return (
    <main className="events-page">
      <SiteHeader />
      <section className="events-intro wrap" aria-labelledby="events-title">
        <p className="kicker">What’s on</p>
        <div className="events-intro__top">
          <h1 id="events-title">There’s always<br /><em>something happening.</em></h1>
          <p>Music, heritage, moments of stillness and good times in the garden. Find your next reason to come in.</p>
        </div>
      </section>

      <section className="calendar-shell" aria-labelledby="calendar-title">
        <div className="wrap">
          <div className="calendar-toolbar">
            <div className="month-nav">
              <button type="button" onClick={() => changeMonth(-1)} aria-label="Previous month">←</button>
              <h2 id="calendar-title">{monthTitle}</h2>
              <button type="button" onClick={() => changeMonth(1)} aria-label="Next month">→</button>
            </div>
            <div className="view-switch" aria-label="Events view">
              <button type="button" className={mode === "calendar" ? "is-active" : ""} onClick={() => changeMode("calendar")} aria-pressed={mode === "calendar"}>Calendar</button>
              <button type="button" className={mode === "agenda" ? "is-active" : ""} onClick={() => changeMode("agenda")} aria-pressed={mode === "agenda"}>Agenda</button>
            </div>
          </div>
          <div className="filters" aria-label="Filter events by category">
            <button type="button" className={filter === "All" ? "is-active" : ""} aria-pressed={filter === "All"} onClick={() => setFilter("All")}>All events</button>
            {eventCategories.map((category) => <button type="button" key={category} className={filter === category ? "is-active" : ""} aria-pressed={filter === category} onClick={() => setFilter(category)}>{category}</button>)}
          </div>

          {mode === "calendar" ? (
            <>
              <div className="calendar-grid" role="group" aria-label={`${monthTitle} events calendar`}>
                {dayLabels.map((label) => <div key={label} className="calendar-grid__weekday">{label}</div>)}
                {monthDays.map((day) => {
                  const key = toLocalKey(day);
                  const dayEvents = filteredEvents.filter((event) => eventIsOnDate(event, key));
                  const isCurrentMonth = day.getMonth() === month.getMonth();
                  const isSelected = key === selectedDate;
                  return (
                    <button type="button" key={key} className={`calendar-day ${isCurrentMonth ? "" : "calendar-day--outside"} ${isSelected ? "is-selected" : ""}`} onClick={() => chooseDate(day)} aria-label={`${new Intl.DateTimeFormat("en-GB", { weekday: "long", day: "numeric", month: "long" }).format(day)}${dayEvents.length ? `, ${dayEvents.length} events` : ", no events"}`} aria-pressed={isSelected}>
                      <span className="calendar-day__number">{day.getDate()}</span>
                      <span className="calendar-day__dots" aria-hidden="true">{dayEvents.slice(0, 3).map((event) => <i key={event.id} className={`dot dot--${event.category.toLowerCase().replace(" ", "-")}`} />)}</span>
                      <span className="calendar-day__events">{dayEvents.slice(0, 2).map((event) => <span key={event.id}>{event.title}</span>)}</span>
                      {dayEvents.length > 2 && <span className="calendar-day__more">+{dayEvents.length - 2} more</span>}
                    </button>
                  );
                })}
              </div>
              <section className="selected-agenda" aria-live="polite" aria-labelledby="selected-day-title">
                <div>
                  <p className="section-label">Selected date</p>
                  <h3 id="selected-day-title">{selectedLabel}</h3>
                </div>
                <div className="selected-agenda__events">
                  {selectedEvents.length ? selectedEvents.map((event) => <Link key={event.id} href={event.slug === "sound-bath-experience" ? "/whats-on/sound-bath-experience" : "#event-details"} className="agenda-row"><span>{formatTime(event.time)}</span><strong>{event.title}</strong><em>{event.category}</em><b aria-hidden="true">↗</b></Link>) : <p>No events are scheduled for this day. Try another date or show all events.</p>}
                </div>
              </section>
            </>
          ) : (
            <section className="agenda-list" aria-label="Events agenda">
              {allUpcoming.map((event) => <EventCard key={event.id} event={event} compact />)}
            </section>
          )}
        </div>
      </section>

      <section className="events-footer-callout">
        <div className="wrap">
          <p className="section-label">Looking for a quiet visit?</p>
          <h2>The church is more than its programme.</h2>
          <a className="text-link" href="#visit">Plan your visit <span aria-hidden="true">↗</span></a>
        </div>
      </section>
    </main>
  );
}
