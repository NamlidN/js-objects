let edelMetallPreise = [
  { name: "Gold", preiseGramEuro: 42.91, veraenderung: "+0.12%" },
  { name: "Silber", preiseGramEuro: 0.51, veraenderung: "+1.02%" },
  { name: "Platin", preiseGramEuro: 25.74, veraenderung: "+0.41%" },
  { name: "Palladium", preiseGramEuro: 50.93, veraenderung: "0.00%" },
  { name: "Rhodium", preiseGramEuro: 160.12, veraenderung: "-0.10%" },
  { name: "Iridium", preiseGramEuro: 42.84, veraenderung: "0.00%" },
  { name: "Ruthenium", preiseGramEuro: 7.36, veraenderung: "0.00%" },
  { name: "Rhenium", preiseGramEuro: 37.22, veraenderung: "-0.53%" },
  { name: "Osmium", preiseGramEuro: 11.54, veraenderung: "0.00%" }
];
let metall = [];
let preiseGramEuro = [];
let veraenderung = [];
let metall2 = [];
let preiseGramEuro2 = [];
let veraenderung2 = [];


edelMetallPreise.forEach((a) => {
  metall.push(a.name);
preiseGramEuro.push(a.preiseGramEuro)
veraenderung.push(a.veraenderung)
});


metall.map(a =>{

metall2.push(a);
});

preiseGramEuro.map(a =>{

  preiseGramEuro2.push(a);
});
veraenderung.map(a =>{

  veraenderung2.push(a);
})


console.log(metall);
console.log(metall2);
console.log(preiseGramEuro);
console.log(preiseGramEuro2);
console.log(veraenderung);
console.log(veraenderung2);


//??????????????????????????????????????????????????????????????????? ??????????????????????????????  
//TODO----__-__-__-_--_--_-__-_----__-_--_----_-      __-__-- - __-__--             
let fil_PGR
fil_PGR = preiseGramEuro.filter(
  element => typeof element === 50
  
);
console.log(fil_PGR);
let WW
preiseGramEuro.filter(function(preiseGramEuro){
  let WW = preiseGramEuro >= 50


  console.log(WW);
 });
