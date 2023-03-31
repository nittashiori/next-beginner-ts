export default function TestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div>サイドバー</div>
      <div>{children}</div>
    </div>
  );
}