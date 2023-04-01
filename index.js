const tutorials = [
  "What Does The This Keyword Mean?",
  "What Is The Constructor OO Pattern?",
  "Implementing Blockchain Web API",
  'The Test Driven Development Workflow',
  "What Is NaN And How Can We Check For It",
  "What Is The Difference Between StopPropagation And PreventDefault?",
  "Immutable State And Pure Functions",
  "What Is The Difference Between == And ===?",
  "What Is The Difference Between Event Capturing And Bubbling?",
  "What Is JSONP?"
];

const titleCased = () => {
  return tutorials
  return tutorials.map(source => {
    let individualWords = source.split(' ');
    //console.log('this is console.log of individualWord', individualWord)
    let capitalizedWord = individualWords.map(individualWord =>   individualWord.charAt(0).toUpperCase()+individualWord.slice(1));
    //console.log('my console.log: ', capitalizedWord)
    let titleCasedArray = capitalizedWord.join(' ');
    return titleCasedArray

  }
  )
}

titleCased(tutorials)
