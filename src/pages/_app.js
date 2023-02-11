import '@/styles/globals.css';
import { StateContext } from '@/lib/context';


export default function App({ Component, pageProps }) {
  return (
    <StateContext>   
  <Component {...pageProps} />
    </StateContext>
  )
}
