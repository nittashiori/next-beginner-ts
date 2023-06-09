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
import { ServiceItem } from "@/components/Molecules/ServiceItem"

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
       <Map src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1619.828264459327!2d139.80965663891598!3d35.7100689710485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188ed0d12f9adf%3A0x7d1d4fb31f43f72a!2z5p2x5Lqs44K544Kr44Kk44OE44Oq44O8!5e0!3m2!1sja!2sjp!4v1686267784377!5m2!1sja!2sjp" />
       <ServiceItem
        href="/"
        icon="work"
        title="人材紹介業"
        description="新規サイトの制作はもちろんサイトリニューアルやランディングページの制作も可能です。"
       />
    </>
  );
}