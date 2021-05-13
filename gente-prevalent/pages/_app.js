import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import  { Main as MainLayout } from '../elements/layout' 
function MyApp({ Component, pageProps }) {
  
  return ( 
    <MainLayout>
    <Component {...pageProps } />
    </MainLayout>  
    )
}

export default MyApp
