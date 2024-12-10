import React from 'react'

export const Result = ({term, secretNum}) => {

  let results;

  if(term){
    if(term > secretNum){
      results = 'Higher'
    } else if(term < secretNum){
      results = 'Lower'
    } else if(term == secretNum){
      results = 'Yipee! correct'
    }else {
      results = 'Enter Valid Input'
    }
  }

  return <p>You Guessed: {results}</p>
}
