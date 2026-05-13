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

// // 구 시대적 맵핑방식
// const sources = [0,1,2,3]
// tmp = []
// for(let item of sources){
//   tmp.push(item*2)
// }

// //지금의 맵핑 방식(JS문법)
// sources.map(item=>(item*2))

function App() {

  return ( 
   
    <table>
     
      <tr>
        {// scores[0]이라는 object를 Object.keys(scores[0])로 list로 만듬
        // 왜 list로 만들어? for문을 도는 것은 list임. Object는 for문을 돌 수 없음 
        // 그래서 Object.keys로 key값만, Object.values로 values값만 추출해서 map이라는 함수로 자동적으로 list로 만들어 주는 거임

        // 2문장으로 코드가 많이 줄어듬
        
          Object.keys(scores[0]).map( key=>(
              <th>{key}</th>
          ))
        }      
      </tr>      
      {// 매개변수 괄호 (key) vs key
        //매개변수가 2개 이상일 때: map((key, index) => (...))
        //매개변수가 1개: map(key => (...))
      }
      {scores.map(item=> (
      <tr>            
        {
        Object.values(item).map(
          (value) => (<td>{value}</td>)
        )
        }
      </tr>
      ))
    }
    </table>
  )
}

export default App