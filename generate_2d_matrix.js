// taken from https://stackoverflow.com/a/7924240
function occurrences(string, subString, allowOverlapping) {  
  string += "";
  subString += "";
  if (subString.length <= 0) return (string.length + 1);

  var n = 0,
      pos = 0,
      step = allowOverlapping ? 1 : subString.length;

  while (true) {
      pos = string.indexOf(subString, pos);
      if (pos >= 0) {
          ++n;
          pos += step;
      } else break;
  }
  return n;
}

var res =
`Au centre|Plutôt verticale
Plutôt à gauche|Plutôt horizontale
Plutôt à droite|Plutôt horizontale
Très à gauche|Plutôt horizontale
Très à gauche|Horizontale, certainement
Plutôt à gauche|Plutôt verticale
Au centre|Plutôt horizontale
Plutôt à droite|Plutôt horizontale
Plutôt à droite|Plutôt horizontale
Plutôt à gauche|Horizontale, certainement
Très à gauche|Peu d'importance
Très à gauche|Plutôt horizontale
Très à droite|Horizontale, certainement
Plutôt à gauche|Plutôt horizontale
Très à gauche|Plutôt verticale
Très à gauche|Plutôt verticale
Très à gauche|Plutôt horizontale
Plutôt à droite|Plutôt horizontale
Plutôt à droite|Plutôt horizontale
Plutôt à gauche|Plutôt horizontale
Plutôt à gauche|Horizontale, certainement
Plutôt à gauche|Plutôt horizontale
Plutôt à gauche|Plutôt horizontale
Plutôt à droite|Peu d'importance
Plutôt à droite|Horizontale, certainement
Plutôt à droite|Verticale, certainement
Au centre|Plutôt horizontale
Au centre|Plutôt horizontale
Très à gauche|Horizontale, certainement
Plutôt à gauche|Peu d'importance
Plutôt à gauche|Verticale, certainement
Très à gauche|Verticale, certainement
Très à droite|Horizontale, certainement
Très à droite|Horizontale, certainement
Plutôt à gauche|Plutôt horizontale
Plutôt à droite|Plutôt horizontale
Au centre|Horizontale, certainement
Plutôt à gauche|Horizontale, certainement
Très à gauche|Horizontale, certainement
Plutôt à droite|Horizontale, certainement
Plutôt à droite|Plutôt verticale
Plutôt à gauche|Peu d'importance
Au centre|Plutôt horizontale
Plutôt à droite|Plutôt horizontale
Plutôt à gauche|Plutôt horizontale
Au centre|Plutôt horizontale
Plutôt à gauche|Peu d'importance
Au centre|Horizontale, certainement
Plutôt à droite|Plutôt horizontale
Plutôt à droite|Peu d'importance
Au centre|Horizontale, certainement
Plutôt à droite|Horizontale, certainement
Au centre|Plutôt horizontale
Très à gauche|Horizontale, certainement
Plutôt à gauche|Horizontale, certainement
Plutôt à gauche|Plutôt horizontale
Au centre|Horizontale, certainement
Plutôt à gauche|Plutôt horizontale
Plutôt à gauche|Plutôt horizontale
Au centre|Peu d'importance
Très à gauche|Plutôt horizontale
Plutôt à gauche|Plutôt horizontale
Plutôt à droite|Horizontale, certainement
Plutôt à gauche|Plutôt verticale
Plutôt à gauche|Horizontale, certainement
Plutôt à gauche|Plutôt horizontale
Plutôt à droite|Peu d'importance
Plutôt à gauche|Horizontale, certainement
Plutôt à gauche|Plutôt horizontale
Plutôt à droite|Horizontale, certainement
Plutôt à droite|Peu d'importance
Plutôt à droite|Plutôt verticale
Plutôt à gauche|Plutôt horizontale
Au centre|Plutôt horizontale
Très à gauche|Plutôt horizontale
Plutôt à gauche|Peu d'importance
Très à gauche|Horizontale, certainement
Plutôt à droite|Plutôt horizontale
Plutôt à droite|Peu d'importance
Plutôt à droite|Plutôt horizontale
Plutôt à gauche|Plutôt horizontale
Plutôt à droite|Plutôt horizontale
Au centre|Horizontale, certainement
Très à droite|Plutôt horizontale
Plutôt à droite|Peu d'importance
Plutôt à droite|Plutôt horizontale
Très à gauche|Plutôt horizontale
Plutôt à gauche|Plutôt horizontale
Plutôt à droite|Plutôt horizontale
Très à gauche|Verticale, certainement
Plutôt à droite|Plutôt horizontale
Au centre|Horizontale, certainement
Au centre|Horizontale, certainement
Au centre|Plutôt horizontale`;
            
let matrix = Array(5).fill().map(()=>Array(5).fill());

const structures = ["Horizontale, certainement","Plutôt horizontale","Peu d'importance","Plutôt verticale","Verticale, certainement"];
const politics = ["Très à gauche","Plutôt à gauche","Au centre","Plutôt à droite","Très à droite"];

structures.forEach((structure, structureIdx) => {
  politics.forEach((politic, politicIdx) => {
    count = occurrences(res, `${politic}|${structure}`);
    matrix[Math.abs(structureIdx -4)][politicIdx] = count;
  })
});

matrix