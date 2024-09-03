export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid h-screen grid-cols-1 place-items-center">
      {children}
    </div>
  );
}
