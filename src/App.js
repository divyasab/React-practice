import Student from "./Student"

const App= function (){
  const student={
    name:"Divya",
    age: "22",
    class:"react"
  }
  return(
    <>
      <Student student={student}/>

    </>
  )
    
  
}
export default App;