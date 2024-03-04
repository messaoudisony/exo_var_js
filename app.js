const age1 = 16; 
const age2 = 20; 
const age3 = 40; 

if((age1 === age2) && (age1 === age3)){
   console.log("Les trois variables sont identiques")
}else if ((age1 === age2) || (age1 === age3)) {
    console.log("Deux des variables sont identiques")
}else {
    console.log("toutes les variables sont différentes")
}