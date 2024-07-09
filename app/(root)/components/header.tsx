export default function Header({ children }: { children: string }) {
  return (
    <h1 className="text-3xl text-[#A98A4D] font-bold uppercase relative inline-block tracking-widest my-4">
      {children}
      <span className="text-stroke-title">{children}</span>
    </h1>
  );
}
