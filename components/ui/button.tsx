import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonTone = "light" | "dark";

const base =
  "group relative inline-flex w-fit items-center gap-2.5 font-mono text-mono uppercase tracking-wide transition-colors duration-200 ease-quint focus-visible:outline-2 focus-visible:outline-signal focus-visible:outline-offset-2";

const variantStyles: Record<ButtonVariant, Record<ButtonTone, string>> = {
  primary: {
    light: "rounded-sm bg-signal px-6 py-3.5 text-white hover:bg-signal-bright",
    dark: "rounded-sm bg-signal px-6 py-3.5 text-white hover:bg-signal-bright",
  },
  secondary: {
    light:
      "rounded-sm border border-ink/15 px-6 py-3.5 text-ink hover:border-ink/40",
    dark:
      "rounded-sm border border-paper/20 px-6 py-3.5 text-paper hover:border-paper/50",
  },
  ghost: {
    light: "text-ink hover:text-signal",
    dark: "text-paper hover:text-signal-bright",
  },
};

function SlideLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="relative inline-grid overflow-hidden">
      <span className="col-start-1 row-start-1 transition-transform duration-300 ease-quint group-hover:-translate-y-full">
        {children}
      </span>
      <span
        aria-hidden
        className="col-start-1 row-start-1 translate-y-full transition-transform duration-300 ease-quint group-hover:translate-y-0"
      >
        {children}
      </span>
    </span>
  );
}

type CommonProps = {
  children: React.ReactNode;
  variant?: ButtonVariant;
  tone?: ButtonTone;
  arrow?: "right" | "up-right" | "none";
  className?: string;
};

type ButtonAsLink = CommonProps & {
  href: string;
  external?: boolean;
  onClick?: () => void;
};

type ButtonAsButton = CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

export function Button(props: ButtonAsLink | ButtonAsButton) {
  const {
    children,
    variant = "primary",
    tone = "light",
    arrow = "right",
    className,
  } = props;

  const classes = cn(base, variantStyles[variant][tone], className);
  const ArrowIcon = arrow === "up-right" ? ArrowUpRight : ArrowRight;

  const content = (
    <>
      <SlideLabel>{children}</SlideLabel>
      {arrow !== "none" ? (
        <ArrowIcon
          aria-hidden
          strokeWidth={1.5}
          className="size-4 shrink-0 transition-transform duration-200 ease-quint group-hover:translate-x-1"
        />
      ) : null}
    </>
  );

  if ("href" in props && props.href) {
    const { href, external, onClick } = props;
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onClick}
          className={classes}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} onClick={onClick} className={classes}>
        {content}
      </Link>
    );
  }

  const buttonProps = props as ButtonAsButton;
  const { type = "button", ...rest } = buttonProps;

  return (
    <button
      type={type}
      className={classes}
      {...omitCommonProps(rest)}
    >
      {content}
    </button>
  );
}

function omitCommonProps(rest: ButtonAsButton) {
  // These are consumed above to build `classes` and `content`; this strips
  // them so only real DOM attributes reach the native <button>.
  /* eslint-disable @typescript-eslint/no-unused-vars */
  const { children, variant, tone, arrow, className, ...domProps } = rest;
  /* eslint-enable @typescript-eslint/no-unused-vars */
  return domProps;
}
