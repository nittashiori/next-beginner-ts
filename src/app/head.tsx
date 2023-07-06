const siteName = "START"
const description = "株式会社STARTは、幸せにつながるお仕事を紹介する人材紹介会社です。人材紹介サービス『スタート』や人材紹介SNS『ゴール』を運営し、またWebデザインを学べるスクール『Webの学校』を開講しています。"
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://next-beginner-ts.vercel.app';
const url = "/"
const image = "/ogp.png"

export default function Head() {
  return (
    <>
      {/* <title>Next.js 13</title> */}
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <link rel="icon" href="/favicon.ico" />
      {/* <title>{siteName}</title> */}
      {/* <meta name="description" content={description} /> */}
      {/* <link rel="canonical" href="https://next-beginner-ts-nittashiori.vercel.app/"></link>
      <meta name="og:locale" property="og:locale" content="ja_JP" />
      <meta name="og:site_name" property="og:site_name" content={siteName} />
      <meta name="og:type" property="og:type" content="website" />
      <meta name="og:title" property="og:title" content={siteName} />
      <meta name="og:description" property="og:description" content={description} />
      <meta name="og:url" property="og:url" content={`${baseUrl}${url}`} />
      <meta name="og:image" property="og:image" content={`${baseUrl}${image}`} />
      <meta name="og:image:secure_url" property="og:image:secure_url" content={`${baseUrl}${image}`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@leapmind_inc" />
      <meta name="twitter:title" content={siteName} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${baseUrl}${image}`} /> */}
    </>
  )
}