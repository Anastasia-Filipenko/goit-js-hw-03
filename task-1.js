function slugify(title) { 
    const arrTitle = Array.from(title.toLowerCase())
    for (let i = 0; i < arrTitle.length; i++){
        if (arrTitle[i].includes(' ')) {
            arrTitle[i] = '-'

        }
   
    } 
    return arrTitle.join('')
}

console.log(slugify("Arrays for begginers")); // "arrays-for-begginers"
console.log(slugify("English for developer")); // "english-for-developer"
console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"