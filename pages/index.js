import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Test CF Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to test blog!" />
        <p className="description">
          This is a test blog.
        </p>
      </main>

      <Footer />
    </div>
  )
}
