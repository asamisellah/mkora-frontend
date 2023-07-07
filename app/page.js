import Image from 'next/image'
import Header from './components/header'
import Survey from './pages/survey'

export default function Home() {
  return (
    <div className='flex min-h-screen flex-col justify-between p-24'>
      <header>
        <Header></Header>
      </header>

      <main className="">
        <Survey></Survey>
      </main>
    </div>

  )
}
