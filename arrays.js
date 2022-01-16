// 1. Using the countries array create the following array of arrays. The country name, the first three letters of the country name and the length of the country name.

const countries = [
  'ALBANIA',
  'BOLIVIA',
  'CANADA',
  'DENMARK',
  'ETHIOPIA',
  'FINLAND',
  'GERMANY',
  'HUNGARY',
  'IRELAND',
  'JAPAN',
  'KENYA'
]

function createArrayOfArrays(countries){
   let arr = [];
   for (let i=0; i < countries.length; i++){
     arr.push([countries[i].charAt(0).toUpperCase()+countries[i].slice(1).toLowerCase(), countries[i].slice(0, 3).toUpperCase(), countries[i].length]);
   }
   return arr;
}

console.log(createArrayOfArrays(countries));

