function nasa(N){
    let str =""
    str+=1+''
    for (let i=2;i<=N;i++){
        
        if (i%3===0 && i%5===0){
            str+=" NASA"
        }else if (i%3===0){
            str+=" NA"
        }else if(i%5===0){
            str+=" SA"
        }else{
            str+=' '+i
        }
    }
    return str
}

