export default function Button({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-md text-sm font-medium bg-blue text-white h-10 px-4 py-2 ${className}`}>
      {children}
    </button>
  );
}
