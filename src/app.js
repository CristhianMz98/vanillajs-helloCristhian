import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon']; 
let extensions = ['.com', '.es', '.org'];

for (let p of pronoun) {
  for (let a of adj) {
    for (let n of noun) {
      for (let e of extensions) {
        console.log(p + a + n + e);
      }    
    }    
  }
}
