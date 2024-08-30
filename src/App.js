import Student from "./Student";
import Principal from "./Principal";
import Teacher from "./Teacher";


const App= function(){
  const student={
    name:"Divya",
    age:"22",
    class:"React"
  }
  const teacher={
    name:"Rupa",
    post:"Teacher",
    salary:"40,000"
  }
  return(
    <>
      <Student student={student}/>
      =============================================
      <Principal
        name="Jagdish"
        post="Principal"
        salary="80,000"
      />
      *****************************************************
      <Teacher {...teacher} />
      ______________________________________
    </>
  )
}
export default App;