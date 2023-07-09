import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({questionArr, handleDeleteUpdate}) {

  console.log("there:", questionArr)


  function handleDeleteItem(deletedItem) {
    console.log("Delete me!!", deletedItem)
    const updatedItems = questionArr.filter((item) => item.id !== deletedItem.id);
    handleDeleteUpdate(updatedItems);
  }

  let listElements = questionArr.map((item)=> {
    return (
    <QuestionItem
    key= {item.id} 
    question={item} 
    handleDeleteItem={handleDeleteItem}/>
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
