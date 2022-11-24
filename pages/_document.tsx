import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'
import type { DocumentInitialProps } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const initilaProps = await Document.getInitialProps(ctx)
    return {...initilaProps}
  }

  render(): JSX.Element {
    return (
      <Html lang={this.props.locale?.split('-')[0]}>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;400;500;700;900&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument