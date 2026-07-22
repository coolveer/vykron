"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  budgetOptions,
  contactSchema,
  projectTypeOptions,
  type ContactFormValues,
} from "@/lib/contact-schema";
import { siteConfig } from "@/lib/site.config";
import { cn } from "@/lib/utils";
import { Field, fieldControlClasses } from "@/components/ui/field";
import { Button } from "@/components/ui/button";

type SubmitState = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [state, setState] = useState<SubmitState>("idle");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (values: ContactFormValues) => {
    setState("submitting");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = await response.json();

      if (data.ok) {
        setState("success");
        reset();
        return;
      }

      if (data.error === "no_email_service") {
        const subject = encodeURIComponent(`Project brief from ${values.name}`);
        const body = encodeURIComponent(
          [
            `Name: ${values.name}`,
            `Email: ${values.email}`,
            `Company: ${values.company || "-"}`,
            `Budget: ${values.budget}`,
            `Project type: ${values.projectType}`,
            "",
            values.message,
          ].join("\n"),
        );
        window.location.assign(`mailto:${siteConfig.email}?subject=${subject}&body=${body}`);
        setState("success");
        reset();
        return;
      }

      setState("error");
    } catch {
      setState("error");
    }
  };

  if (state === "success") {
    return (
      <div className="rounded-md border border-mint/30 bg-mint/10 p-8">
        <p className="font-mono text-mono-xs uppercase text-mint">
          Brief received
        </p>
        <p className="mt-3 text-body-lg text-ink">
          We reply within {siteConfig.responseTime}. If you do not hear from
          us by then, check spam, then email {siteConfig.email} directly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-6">
      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute -left-[9999px] h-px w-px overflow-hidden"
        {...register("website")}
      />

      <Field label="Name" htmlFor="name" error={errors.name?.message}>
        <input
          id="name"
          type="text"
          autoComplete="name"
          className={fieldControlClasses}
          {...register("name")}
        />
      </Field>

      <Field label="Email" htmlFor="email" error={errors.email?.message}>
        <input
          id="email"
          type="email"
          autoComplete="email"
          className={fieldControlClasses}
          {...register("email")}
        />
      </Field>

      <Field label="Company" htmlFor="company" optional error={errors.company?.message}>
        <input
          id="company"
          type="text"
          autoComplete="organization"
          className={fieldControlClasses}
          {...register("company")}
        />
      </Field>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <Field label="Budget range" htmlFor="budget" error={errors.budget?.message}>
          <select
            id="budget"
            defaultValue=""
            className={fieldControlClasses}
            {...register("budget")}
          >
            <option value="" disabled>
              Select a range
            </option>
            {budgetOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>

        <Field label="Project type" htmlFor="projectType" error={errors.projectType?.message}>
          <select
            id="projectType"
            defaultValue=""
            className={fieldControlClasses}
            {...register("projectType")}
          >
            <option value="" disabled>
              Select a service
            </option>
            {projectTypeOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Message" htmlFor="message" error={errors.message?.message}>
        <textarea
          id="message"
          rows={6}
          placeholder="Project goals, key use case, timeline, and launch target."
          className={cn(fieldControlClasses, "resize-none")}
          {...register("message")}
        />
      </Field>

      {state === "error" ? (
        <p role="alert" className="text-small text-error">
          Something went wrong sending your brief. Email us directly at{" "}
          <a href={`mailto:${siteConfig.email}`} className="underline">
            {siteConfig.email}
          </a>{" "}
          and we will pick it up from there.
        </p>
      ) : null}

      <Button
        type="submit"
        variant="primary"
        arrow="right"
        disabled={state === "submitting"}
        className="w-full justify-center disabled:opacity-60"
      >
        {state === "submitting" ? "Sending" : "Send brief"}
      </Button>
    </form>
  );
}
