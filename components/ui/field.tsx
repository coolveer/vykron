import { cn } from "@/lib/utils";

export const fieldControlClasses =
  "w-full rounded-sm border border-ink/15 bg-paper px-4 py-3 text-body text-ink placeholder:text-slate/50 transition-colors duration-200 focus:border-signal focus:outline-none";

export function Field({
  label,
  htmlFor,
  error,
  optional,
  className,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  optional?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <label
        htmlFor={htmlFor}
        className="flex items-baseline justify-between font-mono text-mono-xs uppercase text-slate"
      >
        {label}
        {optional ? <span className="text-slate/50 normal-case">Optional</span> : null}
      </label>
      {children}
      {error ? (
        <p role="alert" className="text-small text-error">
          {error}
        </p>
      ) : null}
    </div>
  );
}
