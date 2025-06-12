export function DefaultRow({ children }: { children: React.ReactNode }) {
  return <div className="flex gap-4 flex-col md:flex-row">{children}</div>;
}
