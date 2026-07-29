"use client";
import { FormEvent, useState } from "react";
export function PrototypeForm({ title = "Send an enquiry", fields = ["Your name", "Email address", "Tell us a little more"] }: { title?: string; fields?: string[] }) {
  const [sent, setSent] = useState(false);
  function submit(e: FormEvent) { e.preventDefault(); setSent(true); }
  return <form className="prototype-form" onSubmit={submit}><p className="section-label">Prototype form</p><h2>{title}</h2><p>This form is for layout only and will not send your details.</p>{fields.map((field) => <label key={field}>{field}{field.includes("little") ? <textarea /> : <input type={field === "Email address" ? "email" : "text"} />}</label>)}<button className="button button--dark" type="submit">{sent ? "Prototype only — not sent" : "Send enquiry"} <span aria-hidden="true">↗</span></button></form>;
}
