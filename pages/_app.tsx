import '../styles/globals.css'

import { PopUpProvider } from '../contexts/PopUpContext'
import { ContatoProvider } from '../contexts/ContatoContext'

function MyApp({ Component, pageProps }) {
  return (
    <PopUpProvider>
      <ContatoProvider>
        <Component {...pageProps} />
      </ContatoProvider>
    </PopUpProvider>
  )
}

export default MyApp
