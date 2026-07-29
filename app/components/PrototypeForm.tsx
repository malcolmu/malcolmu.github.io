"use client";
import { FormEvent, useId, useState } from "react";
import { ArrowIcon } from "@/app/components/ArrowIcon";
export function PrototypeForm({ title = "Send an enquiry", fields = ["Your name", "Email address", "Tell us a little more"] }: { title?: string; fields?: string[] }) {
  const [sent, setSent] = useState(false);
  const formId = useId();
  function submit(e: FormEvent) { e.preventDefault(); setSent(true); }
  return (
    <form className="prototype-form" onSubmit={submit} aria-describedby={`${formId}-description`}>
      <p className="section-label">Prototype form</p>
      <h2>{title}</h2>
      <p id={`${formId}-description`}>This form is for layout only and will not send your details.</p>
      {fields.map((field, index) => {
        const fieldId = `${formId}-field-${index}`;
        const isMessage = field.includes("little");
        const isEmail = field === "Email address";
        const isName = field === "Your name";

        return (
          <label key={field} htmlFor={fieldId}>
            {field}
            {isMessage ? (
              <textarea id={fieldId} name="message" />
            ) : (
              <input
                id={fieldId}
                name={isEmail ? "email" : isName ? "name" : `field-${index}`}
                type={isEmail ? "email" : "text"}
                autoComplete={isEmail ? "email" : isName ? "name" : undefined}
              />
            )}
          </label>
        );
      })}
      <button className="button button--dark" type="submit">{sent ? "Prototype only — not sent" : "Send enquiry"} <ArrowIcon /></button>
      <p className="sr-only" role="status" aria-live="polite">{sent ? "This prototype form has not sent or stored your details." : ""}</p>
    </form>
  );
}
