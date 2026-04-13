import { useState } from 'react'
import './App.css'
import logo from './assets/capa gyro.jpg'
import seta from './assets/seta1.png'

export default function App() {
  const [count, setCount] = useState(0)

  return  (
    <>
    <main> 
      <header>
      <img className='seta' src={seta} alt="" />
      <img className='gyro'src={logo} alt="" />
      <h1>Jojo's Bizarre Adventure: Steel Ball Run</h1>
      </header>
      <section>
      </section>
    </main>
    </>
  )
}

