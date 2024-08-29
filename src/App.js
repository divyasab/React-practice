import Student from "./Student"
import Principal from "./Principal"
import Teacher from "./Teacher"

const App= function (){
  const student={
    name:"Divya",
    age: "22",
    class:"react"
  }
  const teacher={
    name:"Rupa",
    post:"Teacher",
    salary:"30,000"
  }
  return(
    <>
      <Student student={student}/>
      ************************************
      <Principal
        name="jagdish"
        post="principal"
        salary="50,000"
      />
      =========================================
      < Teacher {...teacher}/>
      __________________________________________________
    </>
  )
    
  
}
export default App;