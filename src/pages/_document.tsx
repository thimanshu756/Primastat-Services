import { Html, Head, Main, NextScript } from 'next/document'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PrimaStat',
  description: 'Transforming data into insights'
};

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
        <script
          src="https://assets.calendly.com/assets/external/widget.js"
          type="text/javascript"
          async
        />
        </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
