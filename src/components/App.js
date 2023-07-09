import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");

  const [questionArr, setQuestionArr] = useState([])

  function handleQuestionUpdate(tempObj){
    console.log("question list updates")
    console.log(tempObj)
    setQuestionArr([...questionArr, tempObj])
    console.log("afterupdate:", questionArr)
  }
  console.log("afterupdate:", questionArr)

  function handleDeleteUpdate(update){
    setQuestionArr(update)
  }
 

  useEffect(()=> {
    fetch("http://localhost:4000/questions")
    .then(r => r.json())
    .then(data => {
      //console.log(data);
      setQuestionArr(data);
      //console.log("here", questionArr)
    })
  }, [])

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm questionUpdate={handleQuestionUpdate}/> : <QuestionList questionArr={questionArr} handleDeleteUpdate={handleDeleteUpdate} />}
    </main>
  );
}

export default App;
