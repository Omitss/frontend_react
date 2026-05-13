import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'


const scores = [ // table구조 == JSON구조
  {이름 : "John", 국어: 90, 영어: 90, 수학:80, 과학 : 90}, // {}한줄 == row, 하나 하나가 object == 객체임
  {이름 : "peter", 국어: 90, 영어: 90, 수학:80, 과학 : 90},
  {이름 : "susan", 국어: 90, 영어: 90, 수학:80, 과학 : 90},
  {이름 : "Sue", 국어: 90, 영어: 90, 수학:80, 과학 : 90}
]

const sources = [0,1,2,3]
tmp = []
for(let item of sources){
  tmp.push(item*2)
}

sources.map(item=>(item*2))

function App() {

  return ( 
   
    <table>
     
      <tr>
        <th>이름</th>
        <th>국어</th>
        <th>영어</th>
        <th>수학</th>
        <th>과학</th>
      </tr>
      {/* map()함수를 이용해서 코드를 효과적으로 줄임 */}
      {[0,1,2,3].map(idx=> (
      <tr>            
        <td>{scores[idx].이름}</td>
        <td>{scores[idx].국어}</td>
        <td>{scores[idx].영어}</td>
        <td>{scores[idx].수학}</td>
        <td>{scores[idx].과학}</td>  
      </tr>
      ))
    }
    </table>
  )
}

export default App

