export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="bg-custom">{children}</div>;
}
