import '@styles/global.css';

import Nav from '@components/Nav'
import Provider from '@components/Provider'

export const metadata = {
  title: "Prompt Bouderga",
  descrription: 'Découvrir & partager des IA Prompts'
}

const RootLayout = ({ children }) => {
  return (
    <html lang="fr">
      <body>
        <Provider>
          <div className='main'>
            <div className="gradient" />
          </div>

          <main className='app'>
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  )
}

export default RootLayout
