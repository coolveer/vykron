import { Plus } from "lucide-react";

export function Faq({
  items,
}: {
  items: { question: string; answer: string }[];
}) {
  return (
    <div className="divide-y divide-ink/10 border-y border-ink/10">
      {items.map((item) => (
        <details key={item.question} className="group py-6">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-body-lg font-medium text-ink [&::-webkit-details-marker]:hidden">
            {item.question}
            <Plus
              strokeWidth={1.5}
              className="size-5 shrink-0 text-signal transition-transform duration-300 ease-quint group-open:rotate-45"
            />
          </summary>
          <p className="mt-4 max-w-2xl text-body text-slate">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
