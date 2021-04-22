import '../styles/globals.css'

import { PopUpProvider } from '../contexts/PopupContext'

function MyApp({ Component, pageProps }) {
  return (
    <PopUpProvider>
      <Component {...pageProps} />
    </PopUpProvider>
  )
}

export default MyApp
