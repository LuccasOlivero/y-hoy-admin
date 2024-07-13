export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <section className="max-w-screen-2xl w-full p-4 mx-auto">
      {children}
    </section>
  );
}
