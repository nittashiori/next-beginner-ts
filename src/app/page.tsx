import { Logo } from "@/components/Atoms/Logo"
import { SectionTitle } from "@/components/Atoms/SectionTitle"
import { MaterialIcon } from "@/components/Atoms/MaterialIcon"
import { TextLink } from "@/components/Atoms/TextLink"
import { Mv } from "@/components/Atoms/Mv"
import { PageTitle } from "@/components/Atoms/PageTitle"
import { IntroTitle } from "@/components/Atoms/IntroTitle"
import { Avator } from "@/components/Atoms/Avator"
import { MessageImage } from "@/components/Atoms/MessageImage"
import { NewsItem } from "@/components/Atoms/NewsItem"
import { ListItem } from "@/components/Atoms/ListItem"
import { List } from "@/components/Molecules/List"
import { NewsList } from "@/components/Molecules/NewsList"
import { Map } from "@/components/Atoms/Map"

import { officeDate, newsData } from "@/datas/data"

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
       <NewsList
        data={newsData}
       />
       <Map />
    </>
  );
}