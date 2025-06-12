export default function DefaultCell({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="w-min h-min bg-white p-4 rounded-sm">{children}</div>;
}
