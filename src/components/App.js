import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");

  const [questionArr, setQuestionArr] = useState([])

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
      {page === "Form" ? <QuestionForm /> : <QuestionList questionArr = {questionArr} />}
    </main>
  );
}

export default App;
