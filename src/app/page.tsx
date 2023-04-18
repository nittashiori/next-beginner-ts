import { Logo } from "src/components/Atoms/Logo"
import { SectionTitle } from "src/components/Atoms/SectionTitle"
import { MaterialIcon } from "src/components/Atoms/MaterialIcon"
import { TextLink } from "src/components/Atoms/TextLink"
import { Mv } from "src/components/Atoms/Mv"
import { PageTitle } from "src/components/Atoms/PageTitle"
import { IntroTitle } from "src/components/Atoms/IntroTitle"
import { Avator } from "src/components/Atoms/Avator"
import { MessageImage } from "src/components/Atoms/MessageImage"
import { NewsItem } from "src/components/Atoms/NewsItem"
import { ListItem } from "src/components/Atoms/ListItem"
import { List } from "src/components/Molecules/List"

import { officeDate } from "src/datas/outline"

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
       <Mv />
       <PageTitle>ページタイトル</PageTitle>
       <IntroTitle>{`IntroTitleが\n入ります`}</IntroTitle>
       <Avator src="avator.png" alt="ceo" />
       <MessageImage src="office.png" alt="officeイメージ" />
       <NewsItem
         href="/"
         date="2022.04.01"
         text="ニュース1"
       />
       <ListItem
         title="社名"
         detail="株式会社START"
       />
       <List
        data={officeDate}
       />
    </>
  );
}