# Programming Journey

####  A Project Implementing Basic HTML and CSS

#### By _**Sammai Gutierrez**_

## Technologies Used

* _GitHub_
* _VS Code_
* _HTML_
* _CSS_
* _GitBash_

## Description

* Take text input (string) from user/document
* Pass text input to sentence/text translator
* Translate sentence
  + Split text input into array
  + Pass each element to word translator
  + Translate word
    - does the word begin with a consonant or a vowel?
    - consonant
      * Is the first consonant "q" & the second letter is "u"?
      * yes
        + Move "q" along with "u"
      * no
        + Put the first letter of the word on the end
        + Is the first consonant "q" & the second letter is "u"?
        + yes
          - Move "q" along with "u"
        + No, then carry on the next step.
      * Add 'ay' to end of word
    - vowel
      * Add 'way' to end of word
  + Push translated word to translated words array
  + Join translated words array into translated string
* Display translated string to user in the document

### Describe: pigLatin()

Test: "It will add 'way' to the end of words that begin with a vowel."
Code: pigLatin("a");
Expected Output: "away"
  + Translate word
    - does the word begin with a consonant or a vowel?
    - consonant
      * do nothing
    - vowel
      * Add 'way' to end of word


## Setup/Installation Requirements

* _Internet browser_
* _A code editor such as VS Code._
* _An account with GitHub_

### Steps to open project:

1. _Download this repository by selecting the green button denoting code and select download_
2. _Open the folder_
3. _Open the index.html folder to open it in your browser._

## Known Bugs

* _Nothing yet_

## License

_MIT &copy; 2021 Sammai Gutierrez_

## Contact Information