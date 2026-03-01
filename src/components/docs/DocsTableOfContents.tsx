interface TOCProps {
  headings: { id: string; text: string; level: number }[];
  activeId: string;
}

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function DocsTableOfContents({ headings, activeId }: TOCProps) {
  if (headings.length === 0) return null;

  return (
    <aside className="hidden xl:block w-56 shrink-0">
      <div className="sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto py-6 px-4">
        <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">
          On This Page
        </h4>
        <ul className="space-y-1">
          {headings.map((h) => (
            <li key={h.id}>
              <button
                onClick={() => scrollToId(h.id)}
                className={`block w-full text-left text-sm py-1 transition-colors duration-200 ${
                  h.level === 3 ? "pl-4" : "pl-0"
                } ${
                  activeId === h.id
                    ? "text-primary font-medium"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {h.text}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
