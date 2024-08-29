
const Student = function(props){
    return(
        <>
            <div>{props.student.name}</div>
            <div>{props.student.age}</div>
            <div>{props.student.class}</div>
        </>
    );
};

export default Student;