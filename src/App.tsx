import { ReactHTMLElement, useState } from 'react'

import one from '../public/cards/one-min.jpg'
import two from '../public/cards/two-min.jpg'
import three from '../public/cards/three-min.jpg'
import four from '../public/cards/four-min.jpg'
import five from '../public/cards/five-min.jpg'

import one_writen from '../public/cards/one-writen-min.jpg'
/*
import one_writen from '../public/cards/one-writen-min.jpg'
import two_writen from '../public/cards/two-writen-min.jpg'
import three_writen from '../public/cards/three-writen-min.jpg'
import four_writen from '../public/cards/four-writen-min.jpg'
import five_writen from '../public/cards/five-writen-min.jpg'*/

import './App.css'

function App() {

  const [ firstClass , setFirstClass ] = useState<string | null>("")
  const [ count, setCount ] = useState(0)

  const touchCard = ( event : React.MouseEvent<HTMLImageElement> ) =>{
// event : React.MouseEvent<HTMLImageElement> -> também posso passar somente event, mas para ts isso é melhor  
let first_card = event.currentTarget.classList[0]
 event.currentTarget.className
 if(count == 0){
  setFirstClass(first_card)
  setCount(1)
  console.log("Primeira imagem clicada:", first_card);
 }
 else if(count == 1){
  console.log("Segunda imagem clicada:", first_card);

  if(firstClass === first_card){
    console.log("Encontrei meu par!");
  }
  else{
    console.log("Não encontrei meu par!");
  }

  //Faz o jogo voltar de novo
  setFirstClass(null)
  setCount(0)
 }

}

  return (
  <div className='main'>
      <img src={one} alt="" className='one_card' onClick={touchCard}/>
      <img src={two} alt="" className='two_card' onClick={touchCard}/>
      <img src={three} alt="" className='three_card' onClick={touchCard}/>
      <img src={four} alt="" className='four_card' onClick={touchCard}/>
      <img src={five} alt="" className='five_card' onClick={touchCard}/>

      <img src={one} alt="" className='one_card' onClick={touchCard}/>
      <img src={two} alt="" className='two_card' onClick={touchCard}/>
      <img src={three} alt="" className='three_card' onClick={touchCard}/>
      <img src={four} alt="" className='four_card' onClick={touchCard}/>
      <img src={five} alt="" id='last_card' className='five_card' onClick={touchCard}/>
    {/*
      <img src={one_writen} alt="" />
      <img src={two_writen} alt="" />
      <img src={three_writen} alt="" />
      <img src={four_writen} alt="" />
      <img src={five_writen} alt="" />*/}
  </div>
  )
}

export default App
