// + Translate word
//   - does the word begin with a consonant or a vowel?
//   - consonant
//     * do nothing
//   - vowel
//     * Add 'way' to end of word



function translateWord(word) {
  let translatedWord = word

  const firstLetter = word.substring(0, 1)
  const wordStartsWithVowel = vowelDetector(firstLetter)
  if (wordStartsWithVowel) {
    translatedWord = word + "way"
  }
  return translatedWord
}

function vowelDetector(letter) {
  let letterIsVowel = false
  const vowels = ['a', 'e', 'i', 'o', 'u']
  for (let i = 0; i < vowels.length; i += 1) {
    let vowel = vowels[i]
    console.log(vowel)
    if (letter === vowel) {
      letterIsVowel = true
      console.log("Bingo!")
      break
    }
  }
  return letterIsVowel
}

