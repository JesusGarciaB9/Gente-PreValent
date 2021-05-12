import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import  { Main as MainLayout } from './layout'
function MyApp({ Component, pageProps }) {
  
  return (
    <MainLayout>
    <Component {...pageProps } />
    </MainLayout> 
    )
}

export default MyApp
