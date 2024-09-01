import { SideImage } from "./_components/side-image";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid min-h-screen grid-cols-1 place-items-center gap-4 lg:grid-cols-2">
      <SideImage />
      {children}
    </div>
  );
}
