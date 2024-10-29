function get(src,path){
   let Tab = path.split(".")

let a= src
for (let i = 0; i < Tab.length; i++) {
    if (a == null) {
        return undefined
    }
    a=a[Tab[i]]
  
}
    return a
}

