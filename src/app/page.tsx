import { Logo } from "src/components/Atoms/Logo"
import { SectionTitle } from "src/components/Atoms/SectionTitle"

export default function Page() {
  return (
    <>
      <h1>Hello, Next.js!</h1>
      <Logo
        href="/"
        link
       />
       <SectionTitle>タイトルが入ります</SectionTitle>
    </>
  );
}