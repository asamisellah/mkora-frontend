import Header from './components/header'
import Navigation from './components/navigation'
import Survey from './pages/survey'

export default function Home() {
  return (
    <div className='flex min-h-screen flex-col'>
      <nav>
        <Navigation></Navigation>
      </nav>

      <main className="container">
        <header className='header'>
          <Header></Header>
        </header>

        <section className='survey backdrop-blur-md border border-solid border-neutral-300'>
          <Survey></Survey>
        </section>
      </main>
    </div>

  )
}
