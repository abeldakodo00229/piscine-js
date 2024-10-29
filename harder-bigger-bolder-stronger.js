function generateLetters(){
    let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    for(let i=0;i<120;i++){
        let str = letters.charAt(Math.floor(Math.random()*letters.length))
        let elm = document.createElement('div')
        elm.innerHTML = str
        elm.style.fontSize = (i+11)+'px';

        if (i < 40 ){
            elm.style.fontWeight = "300";
        } else if (i < 80) {
            elm.style.fontWeight = "400";
        } else {
            elm.style.fontWeight = "600";
        }
        document.body.append(elm)
       
    }
}

export { generateLetters }

