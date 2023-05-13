import { useState } from 'react'
import NavBar from './components/shared/NavBar'
import Main from './components/shared/Main'
import Footer from './components/shared/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='w-screen h-screen bg-[#EBEBEB] container mx-auto px-4'>
        <NavBar></NavBar>
        <Main></Main>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
