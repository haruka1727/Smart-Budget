export function DefaultView({ children }: { children: React.ReactNode }) {
  return (
    <div className="py-4 h-screen">
      <div className="flex h-full w-full bg-blue-200 p-4 flex-col gap-4 overflow-y-scroll no-scrollbar whitespace-nowrap rounded-md">
        {children}
      </div>
    </div>
  );
}
