import { AppProps } from 'next/app'
import { Fragment } from 'react'

const App = ({ Component, pageProps }: AppProps) => (
    <Fragment>
        <Component {...pageProps} />
    </Fragment>
)

export default App
