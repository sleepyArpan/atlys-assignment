export default function Card({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`border-solid border-2 rounded border-[#35373B] py-6 px-5 flex flex-col bg-gray-500 ${className}`}>
      {children}
    </div>
  );
}
