function matchCron(cron,date){
    let tab = cron.split(" ")
    let minute = tab[0]
    let hour = tab[1]
    let dayOfMonth = tab[2]
    let month = tab[3]
    let dayWeek = tab[4]    
    let bool = false

    if(minute === '*' || minute == date.getMinutes()){
        bool = true
    }else{
        return false
    }
    if(hour === '*' || hour == date.getHours())  {
        bool = true
    }else{
        return false
    }
    if(dayOfMonth === '*' || dayOfMonth == date.getDate()){
        bool = true
    }else{
        return false
    }
    if(month === '*'|| month == date.getMonth()+1){
        bool = true
    }else{
        return false
    }
    if(dayWeek === '*'){
        bool = true
    }else if(dayWeek === 7 && date.getDay === 0){
        bool = true
    }else if(date.getDay !== 0 && Number(dayWeek) === date.getDay()){
        bool = true
    }else{
       
        return false
    }
    return bool
}