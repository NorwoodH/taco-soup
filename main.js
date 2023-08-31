/*

var harryPotterTitles = ["and the Sorcerer's Stone", "and the Chamber of Secrets", "and the Prisoner of Azkaban", "and the Goblet of Fire", "and the Order of the Phoenix", "and the Half-Blood Prince", "and the Deathly Hallows"];
for(var i = 0; i < harryPotterTitles.length; i++){
    if (harryPotterTitles[i]) {
        console.log(`Harry Potter and ${harryPotterTitles[i]}`)
    }
  }

*/

/*
// student grades

var grades = [92, 91, 75, 66, 52, 90, 83, 85, 64, 90, 72, 88, 77, 98, 100, 73, 92]

let fCount = 0
let dCount = 0
let cCount = 0
let bCount = 0
let aCount = 0
let commonLetterGrade = ""
let percentageGrades = 0

for(var i = 0; i < grades.length; i++)
if(grades[i] >= 0 && grades[i] < 69){
  fCount++;
} else if(grades[i] >= 70 && grades[i] <76){
  dCount++;
} else  if(grades[i] >=77 && grades[i] <84 ){
  cCount++;
}else if(grades[i] >= 85 && grades[i] <92){
  bCount++;
} else if(grades[i] >= 93 && grades[i] <=100){
  aCount++;
}
  console.log(`Number of students who got F's ${fCount}`)
  console.log(`Number of students who got D's ${dCount}`)
  console.log(`Number of students who got C's ${cCount}`)
  console.log(`Number of students who got B's ${bCount}`)
  console.log(`Number of students who got A's ${aCount}`)


console.log(`In this class there were: (${Math.max}aCount) A\'s}`)
console.log(`There were (${Math.max}bCount)B\'s`)
console.log(`and (cCount)C\'s)

*/

// Two, Four, Six, Eight - Who do we appreciate?! CHEER

/*
let startCount = 2;
let countBy = 2;
let outPutString = "";
function incNumb(countBy) {
  for (var i = 1; i <= 4; i++) {
    if(startCount == 8){
outPutString +=  ` ${startCount} Who do we appreciate?!` 
    }else{
    outPutString += startCount + ' ';
    startCount += 2;
    }
  }
}
console.log(startCount);
console.log(incNumb(startCount));
console.log(outPutString);
*/

// Interrupting Cow
/*
var sentenceArray = ["the", "cow", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];
var result = "";

for (var i = 0; i < sentenceArray.length; i++) {
    result += sentenceArray[i];

    if (i === 2 || i === 5 || i === 8) {
        result += " MOOOOOOOO";
    }

    if (i !== sentenceArray.length - 1) {
        result += " ";
    }
}
console.log(result);

*/

/// cow but different?
/*
var sentenceArray = ["the", "cow", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];
var result = [];

for (var i = 0; i < sentenceArray.length; i += 4) {
    var words = sentenceArray.slice(i, i + 4);
    if (words.length === 4) {
        words.splice(2, 0, "MOOOOOOOO");
    }
    result.push(...words);
}

console.log(result.join(" "));
*/

// The Beatles

const beatles = {
  albums: ["Abbey Road", "Sgt Peppers Lonely Heart's Club Band", "Revolver", "Magical Mystery Tour"],
  history: {
      formed: 1960,
      disbanded: 1970
  },
  members: [
      {
          name: "George Harrison",
          birth: 1943,
          death: 2001
      },
      {
          name: "Paul McCartney",
          birth: 1942,
          death: null
      },
      {
          name: "John Lennon",
          birth: 1940,
          death: 1980
      },
      {
          name: "Ringo Starr",
          birth: 1940,
          death: null
      }
  ]
};

for (const member of beatles.members) {
  const birthYear = member.birth;
  const deathYear = member.death !== null ? member.death : 'present';
  const yearsActive = `${beatles.history.formed} to ${beatles.history.disbanded}`;
  const albumName = beatles.albums[Math.floor(Math.random() * beatles.albums.length)]; // Randomly selecting an album for illustration

  const output = `${member.name} was in the Beatles from ${yearsActive}. He was born in ${birthYear}. He contributed heavily to the ${albumName} Album.`;
  console.log(output);
}

