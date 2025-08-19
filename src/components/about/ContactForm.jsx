import React, { useState } from "react";

/**
 * ContactForm
 * - Uses Formspree (no backend needed)
 * - Client-side validation
 * - Loading + success + error states
 * - Honeypot field for spam
 */
export default function ContactForm() {
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/xkgzadbl"; // <-- replace with your endpoint

  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ ok: null, msg: "" });

  // simple validators
  const isEmail = (s) => /^\S+@\S+\.\S+$/.test(s);

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus({ ok: null, msg: "" });

    // client-side validation
    if (!values.name.trim()) return setStatus({ ok: false, msg: "Please enter your name." });
    if (!isEmail(values.email)) return setStatus({ ok: false, msg: "Please enter a valid email." });
    if (!values.message.trim()) return setStatus({ ok: false, msg: "Please enter a message." });

    setLoading(true);
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          message: values.message,
          _subject: "[TEST] New message from portfolio",
        }),
      });

      // CORS 문제면 여기서 throw 날 수 있음
      const data = await res.json().catch(() => ({}));

      if (res.ok) {
        setStatus({ ok: true, msg: "Thanks! Your message has been sent." });
        setValues({ name: "", email: "", message: "" });
      } else {
        const errMsg = data?.errors?.[0]?.message || "Trouble in the process. please Try again later.";
        setStatus({ ok: false, msg: errMsg });
        console.error("Formspree error:", res.status, data);
      }
    } catch (err) {
      setStatus({ ok: false, msg: "Network Error. (CORS/확장프로그램 가능성) 콘솔을 확인해 주세요." });
      console.error("Fetch failed:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      action={FORMSPREE_ENDPOINT}
      method="POST"
      className="w-full max-w-xl mx-auto flex flex-col gap-4 bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm"
    >
      <h2 className="text-2xl font-bold">Contact Me</h2>

      {/* Honeypot (hidden) - bots will fill this; humans won’t */}
      <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

      {/* (Optional) Subject override */}
      <input type="hidden" name="_subject" value="New message from your portfolio" />

      {/* Name */}
      <div className="flex flex-col">
        <label htmlFor="name" className="text-sm font-medium mb-1">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          onChange={onChange}
          defaultValue={values.name}
          required
          className="rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Your name"
        />
      </div>

      {/* Email */}
      <div className="flex flex-col">
        <label htmlFor="email" className="text-sm font-medium mb-1">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={onChange}
          defaultValue={values.email}
          required
          className="rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="you@example.com"
        />
      </div>

      {/* Message */}
      <div className="flex flex-col">
        <label htmlFor="message" className="text-sm font-medium mb-1">Message</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          onChange={onChange}
          defaultValue={values.message}
          required
          className="rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="How can I help?"
        />
      </div>

      {/* Status message */}
      {status.ok === true && (
        <p className="text-sm text-emerald-600 bg-emerald-50 dark:bg-emerald-900/20 px-3 py-2 rounded">
          {status.msg}
        </p>
      )}
      {status.ok === false && (
        <p className="text-sm text-red-600 bg-red-50 dark:bg-red-900/20 px-3 py-2 rounded">
          {status.msg}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-60 transition"
      >
        {loading ? "Sending..." : "Send message"}
      </button>
    </form>
  );
}
