import clsx from "clsx";

export default function HomePage() {
  return (
    <div
      className={clsx(
        "items-center",
        "justify-items-center",
        "grid",
        "font-[family-name:var(--font-geist-sans)]",
        "grid-rows-[20px_1fr_20px]",
        "to-blue-200",
        "min-h-screen",
        "p-8",
        "pb-20",
        "gap-16"
      )}
    >
      texto para estilização
    </div>
  );
}
