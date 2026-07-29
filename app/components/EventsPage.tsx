"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowIcon } from "@/app/components/ArrowIcon";
import { EventCard } from "@/app/components/EventCard";
import { PageHero } from "@/app/components/PageHero";
import { SiteFooter } from "@/app/components/SiteFooter";
import { eventCategories, events, formatTime, type EventCategory } from "@/app/lib/events";
import { assetPath } from "@/app/lib/site-path";

const monthStart = new Date(2026, 7, 1);
const dayLabels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const toLocalKey = (date: Date) => `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
const TODAY = new Date(2026, 6, 28, 12);
const todayKey = toLocalKey(TODAY);

function eventIsOnDate(event: typeof events[number], key: string) {
  return key >= event.date && key <= (event.endDate ?? event.date);
}

export function EventsPage() {
  const [month, setMonth] = useState(monthStart);
  const [selectedDate, setSelectedDate] = useState("2026-08-02");
  const [filter, setFilter] = useState<EventCategory | "All">("All");
  const [mode, setMode] = useState<"calendar" | "agenda">("calendar");
  const [showMonthPicker, setShowMonthPicker] = useState(false);

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
    setShowMonthPicker(false);
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

  const goToToday = () => {
    setMonth(new Date(TODAY.getFullYear(), TODAY.getMonth(), 1));
    setSelectedDate(todayKey);
    setShowMonthPicker(false);
    updateUrl(todayKey);
  };

  const chooseMonth = (value: string) => {
    const [yearText, monthText] = value.split("-");
    const year = Number(yearText);
    const monthIndex = Number(monthText) - 1;
    if (Number.isNaN(year) || Number.isNaN(monthIndex)) return;

    const next = new Date(year, monthIndex, 1);
    setMonth(next);
    setShowMonthPicker(false);

    const selected = new Date(`${selectedDate}T12:00:00`);
    if (selected.getFullYear() !== year || selected.getMonth() !== monthIndex) {
      const first = toLocalKey(next);
      setSelectedDate(first);
      updateUrl(first);
    }
  };

  const selectedEvents = filteredEvents.filter((event) => eventIsOnDate(event, selectedDate));
  const allUpcoming = filteredEvents.filter((event) => event.date >= toLocalKey(month));
  const nextThree = events.slice(0, 3);
  const monthTitle = new Intl.DateTimeFormat("en-GB", { month: "long", year: "numeric" }).format(month);
  const monthValue = `${month.getFullYear()}-${String(month.getMonth() + 1).padStart(2, "0")}`;
  const selectedLabel = new Intl.DateTimeFormat("en-GB", { weekday: "long", day: "numeric", month: "long" }).format(new Date(`${selectedDate}T12:00:00`));

  return (
    <main className="events-page">
      <PageHero
        eyebrow="What’s on"
        title="There’s always something happening."
        intro="Music, heritage, moments of stillness and good times in the garden. Find your next reason to come in."
        image={assetPath("/images/garden-crowd.jpg")}
        alt="People gathering in the sunny gardens beside St Luke’s for an event."
      >
        <a className="button button--light" href="#calendar">Explore the calendar <ArrowIcon direction="down" /></a>
      </PageHero>

      <section className="next-events" aria-labelledby="next-events-title">
        <div className="wrap programme__head">
          <div><p className="section-label">Coming up next</p><h2 id="next-events-title">The next three.</h2></div>
        </div>
        <div className="wrap event-grid">
          {nextThree.map((event) => <EventCard key={event.id} event={event} />)}
        </div>
      </section>

      <section className="calendar-shell" id="calendar" aria-labelledby="calendar-title">
        <div className="wrap">
          <div className="calendar-toolbar">
            <div className="month-nav">
              <button type="button" onClick={() => changeMonth(-1)} aria-label="Previous month"><ArrowIcon direction="left" /></button>
              <div className={`month-nav__picker ${showMonthPicker ? "is-open" : ""}`}>
                <h2 id="calendar-title">
                  <button
                    type="button"
                    className="month-nav__label"
                    aria-expanded={showMonthPicker}
                    aria-controls="calendar-month-picker"
                    onClick={() => setShowMonthPicker((open) => !open)}
                  >
                    <span>{monthTitle}</span>
                    <ArrowIcon direction="down" />
                  </button>
                </h2>
                {showMonthPicker ? (
                  <label className="month-nav__popover" id="calendar-month-picker">
                    <span className="sr-only">Choose month and year</span>
                    <input
                      type="month"
                      value={monthValue}
                      onChange={(event) => chooseMonth(event.target.value)}
                      aria-label="Choose month and year"
                    />
                  </label>
                ) : null}
              </div>
              <button type="button" onClick={() => changeMonth(1)} aria-label="Next month"><ArrowIcon direction="right" /></button>
              <button type="button" className="month-nav__today" onClick={goToToday}>Today</button>
            </div>
            <div className="view-switch" role="group" aria-label="Events view">
              <button type="button" className={mode === "calendar" ? "is-active" : ""} onClick={() => changeMode("calendar")} aria-pressed={mode === "calendar"}>Calendar</button>
              <button type="button" className={mode === "agenda" ? "is-active" : ""} onClick={() => changeMode("agenda")} aria-pressed={mode === "agenda"}>Agenda</button>
            </div>
          </div>
          <div className="filters" role="group" aria-label="Filter events by category">
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
                  const dayLabel = new Intl.DateTimeFormat("en-GB", { weekday: "long", day: "numeric", month: "long" }).format(day);
                  return (
                    <div key={key} className={`calendar-day ${isCurrentMonth ? "" : "calendar-day--outside"} ${isSelected ? "is-selected" : ""}`}>
                      <button type="button" className="calendar-day__select" onClick={() => chooseDate(day)} aria-label={`Select ${dayLabel}${dayEvents.length ? `, ${dayEvents.length} events` : ", no events"}`} aria-pressed={isSelected}>
                        <span className="calendar-day__number">{day.getDate()}</span>
                        <span className="calendar-day__dots" aria-hidden="true">{dayEvents.slice(0, 3).map((event) => <i key={event.id} className={`dot dot--${event.category.toLowerCase().replace(" ", "-")}`} />)}</span>
                      </button>
                      <span className="calendar-day__events">
                        {dayEvents.slice(0, 2).map((event) => (
                          <Link key={event.id} href={`/whats-on/${event.slug}`} className="calendar-event-link">
                            <span>{event.title}</span>
                            <span className="calendar-event-popover">
                              <small>{event.category}</small>
                              <strong>{event.title}</strong>
                              <span>{formatTime(event.time)}–{formatTime(event.endTime ?? event.time)}</span>
                              <span>{event.location}</span>
                              <em>{event.price}</em>
                            </span>
                          </Link>
                        ))}
                      </span>
                      {dayEvents.length > 2 && <span className="calendar-day__more">+{dayEvents.length - 2} more</span>}
                    </div>
                  );
                })}
              </div>
              <section className="selected-agenda" aria-live="polite" aria-labelledby="selected-day-title">
                <div>
                  <p className="section-label">Selected date</p>
                  <h3 id="selected-day-title">{selectedLabel}</h3>
                </div>
                <div className="selected-agenda__events">
                  {selectedEvents.length ? selectedEvents.map((event) => <Link key={event.id} href={`/whats-on/${event.slug}`} className="agenda-row"><span>{formatTime(event.time)}</span><strong>{event.title}</strong><em>{event.category}</em><ArrowIcon /></Link>) : <p>No events are scheduled for this day. Try another date or show all events.</p>}
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
          <Link className="text-link" href="/visit">Plan your visit <ArrowIcon /></Link>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
