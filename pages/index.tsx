import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <aside style={{display:'flex'}}>

      <h1 className='welcomeW text-[15em]'>PopSF</h1>
      <h3 style={{paddingTop: "1.1em", paddingRight: "5em"}} className='rothek text-[3em]'>SF`s Population, Stories, and Serendipity</h3>
      </aside>
    </main>
  )
}
