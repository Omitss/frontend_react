import './App.css'

const style = {
  width: "500px",
  height: "300px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center"
}


function App() {
  const handleChange = (event) =>{
    console.log(event.target.name) //event.target 이란? 이벤트가 걸리고 있는 태그
  }
  return (
    <form>
      <div>이름: 
        <input 
          type="text" 
          name="이름" 
          value=""
          onChange={handleChange}
          />
      </div>
      <div>국어: 
        <input 
          type="number" 
          name="국어" 
          value="" 
          onChange={handleChange}
        />
      </div>
      <div>영어: 
        <input 
          type="number" 
          name="영어" 
          value="" 
          onChange={handleChange}
        />
      </div>
      <div>수학: 
        <input 
          type="number" 
          name="수학" 
          value="" 
          onChange={handleChange}
          />
      </div>
      <div>과학: 
        <input 
          type="number" 
          name="과학" 
          value="" 
          onChange={handleChange}
        />
        </div>
      <button>제출</button>
    </form>
  )
}

export default App;