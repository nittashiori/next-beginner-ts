import { Logo } from "src/components/Atoms/Logo"
import { SectionTitle } from "src/components/Atoms/SectionTitle"
import { MaterialIcon } from "src/components/Atoms/MaterialIcon"
import { TextLink } from "src/components/Atoms/TextLink"

export default function Page() {
  return (
    <>
      <h1>Hello, Next.js!</h1>
      <Logo
        href="/"
        link
       />
       <SectionTitle>タイトルが入ります</SectionTitle>
       <MaterialIcon fontSize={2.4} color="#000000">work</MaterialIcon>
       <TextLink href="https://google.com">リンクが入ります</TextLink>
    </>
  );
}