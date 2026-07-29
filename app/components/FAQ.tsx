"use client";

import { useId, useState } from "react";

export function FAQ({ items }: { items: readonly (readonly [string, string])[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const baseId = useId();

  return (
    <section className="faq">
      <p className="section-label">Questions, answered</p>
      <h2>A little more detail.</h2>
      <div className="faq__items">
        {items.map(([question, answer], index) => {
          const isOpen = openIndex === index;
          const panelId = `${baseId}-panel-${index}`;

          return (
            <section className={`faq-item ${isOpen ? "is-open" : ""}`} key={question}>
              <button
                type="button"
                className="faq-item__trigger"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <span>{question}</span>
                <span className="faq-item__icon" aria-hidden="true">{isOpen ? "−" : "+"}</span>
              </button>
              <div
                id={panelId}
                className="faq-item__panel"
                aria-hidden={!isOpen}
              >
                <div className="faq-item__panel-inner">
                  <p>{answer}</p>
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </section>
  );
}
