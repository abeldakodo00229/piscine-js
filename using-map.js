function citiesOnly(object){

let result =object.map(({ city}) => ({ city }));
let res = []
for (let i=0;i<result.length;i++){
    res.push(result[i]['city'])
}
return res
}

function upperCasingStates(array){
    return array.map((num) => num.replace(/\b\w/g, (match) => match.toLocaleUpperCase()));
   
}

function fahrenheitToCelsius(array){
    return array.map(
        (temp) =>
            Math.floor((Number(temp.slice(0, -2)) - 32) * (5 / 9)).toString() + "°C"
    )
}
function trimTemp(array) {
    return array.map((temp) => {
        temp.temperature = temp.temperature.replaceAll(" ", "");
        return temp;
    });
}

function tempForecasts(array) {
    return array.map((temp) => {
        return `${
            Math.floor(
                (Number(temp.temperature.slice(0, -2)) - 32) * (5 / 9)
            ).toString() + "°Celsius"
        } in ${temp.city}, ${temp.state
            .split(" ")
            .map((word) => {
                return word[0].toUpperCase() + word.slice(1);
            })
            .join(" ")}`;
    });
}


// console.log(citiesOnly([
//     {
//       city: 'Los Angeles',
//       temperature: '  101 °F   ',
//     },
//     {
//       city: 'San Francisco',
//       temperature: ' 84 ° F   ',
//     },
//   ])) // -> ['Los Angeles', 'San Francisco']

//   console.log(upperCasingStates(['alabama', 'new jersey'])) // -> ['Alabama', 'New Jersey']
//   console.log(fahrenheitToCelsius(['68°F', '59°F', '25°F'])) // -> ['20°C', '15°C', '-4°C']
 
//   console.log(trimTemp([
//     { city: 'Los Angeles', temperature: '  101 °F   ' },
//     { city: 'San Francisco', temperature: ' 84 ° F   ' },
//   ])) /* -> [
//     { city: 'Los Angeles', temperature: '101°F' },
//     { city: 'San Francisco', temperature: '84°F' },
//   ] */