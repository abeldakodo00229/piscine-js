function hasCity(country,array){
    return function(city){
        for (let i=0;i<array.length;i++){
            if (array[i]===city){
                return city + ' is a city from ' + country
            }
        }
        return city + ' is not a city from ' + country
    }
}