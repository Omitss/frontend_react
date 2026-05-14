import React from 'react'

function ScoresTable({scores}) { // {scores}의미 : scores의 키값과 vlaue값이 같음
  return (
    <div>
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
    </div>
  )
}

export default ScoresTable
