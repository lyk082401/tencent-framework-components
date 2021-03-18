import Head from 'next/head'

const Home = () => (
  <div className="container">
    <Head>
      <title>Serverless - Next.js</title>
      <meta name="description" content="Serverless Next.js 应用"/>
      <meta name="keywords" content="next,next.js,serverless,无服务"/>
      <link rel="icon" href={`${process.env.STATIC_URL}/favicon.ico`} />
    </Head>

    <main>
      <h1 className="title">欢迎访问 Next.js 应用</h1>

      <p className="description">
        <a href="https://cloud.tencent.com/product/sls" target="_blank" rel="noopener noreferrer">
          腾讯云 Serverless
        </a>
        为您提供服务
      </p>
    </main>
  </div>
)

export default Home
