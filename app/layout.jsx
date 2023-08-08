
import '@styles/globals.css'
import '@styles/Style.css'
import Navbar from '@components/Navbar'
import Provider from '@components/Provider'
import Footer from '@components/footer'



export const metadata = {
  title: 'VanPetro',
  description: 'Vancouver Petrographics Ltd. since 1972.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <main className="app">
            <Navbar/>
            {children}
            <Footer/>
          </main>
        </Provider>
       
      </body>
    </html>
  )
}
