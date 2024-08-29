export default function DefaultLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="container grid grid-cols-[auto_1fr] py-4">
      <header className="px-8">Sidebar</header>
      <div className="min-h-dvh border">{children}</div>
    </div>
  );
}
