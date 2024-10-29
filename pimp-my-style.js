import { styles } from "./pimp-my-style.data.js";
let  counter = 0;
function pimp() {
   
    let button = document.querySelector("button.button");
    if (!button.classList.contains("unpimp")) {
        button.classList.add(styles[counter]);
        counter+=1
    } else {
        counter-=1
        button.classList.remove(styles[counter]);
        if (counter === 0) {
            button.classList.toggle("unpimp");
        }
    }
    if (counter === styles.length) {
        button.classList.toggle("unpimp");
    }
}

console.log(counter)
export { pimp };