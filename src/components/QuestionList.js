import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({questionArr}) {

  console.log("there:", questionArr)

  const listElements = questionArr.map((item)=> {
    return (
    <QuestionItem question={item} />
    )
  })



  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{listElements}</ul>
    </section>
  );
}

export default QuestionList;
