function replica(cible, ...objects){
        objects.forEach((elm)=>{
            for (var key in elm){
                if (typeof elm[key]==="object" &&  !(elm[key] instanceof RegExp)){
                   
                      replica(cible[key] ,elm[key])
                }else{
                  cible[key]=elm[key]
                 }
            }

        })

        return cible
}



