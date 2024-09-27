export default function Container({children}:
    {children: React.ReactNode }) {
  return <div className="max-w-[100%] mx-auto bg-white min-h-screen flex flex-col">{children}</div>;
}
