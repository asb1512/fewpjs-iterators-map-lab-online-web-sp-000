const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return tutorials.map(tutorial => {
    let arrayOfStrings = tutorial.split(' ')
    let capitalizedArray = []
    for (const str of arrayOfStrings) {
      capitalizedArray.push(str.replace(str[0], str[0].toUpperCase())
      )
    }
    return capitalizedArray.join(' ')
  })
}
