// console.log("hello");
let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let showwinner = document.querySelector(".showwinner");
let msg = document.querySelector("#msg");
let newgame = document.querySelector(".newgame")
let main = document.querySelector("main")
let turnO = true;
let player = document.querySelector(".playername");
let back = document.querySelector(".back");


const winpattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8],
];
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        // console.log("the box was clicked");
        if (turnO) {
            // playerO
            box.classList.add("red");
            console.log('box',box);
            
            box.innerText = ("O");
            turnO = false;
            // box.classList.add("playername")
            player.innerText = (`Next turn is of Player X`)
        }
        else {
            // PlayerX
            box.innerText = ("X");
            turnO = true;
            box.classList.add("green");
            player.innerText = (`Next turn is of Player O`)

        }
        box.disabled = true;
        box.classList.add("hover-effect");
        checkwinner();

    }
    )
});
const checkwinner = () => {
    for (let pattern of winpattern) {
   

        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1 != "" && pos2 != "" && pos3 != "" && pos1 === pos2 && pos2 === pos3) {
            // console.log(`Winner ${pos1}`);
           setTimeout(() => {
            show(pos1);
           }, 2000); 
            disablebox();
        }
    }
}
show = (name) => {
    showwinner.classList.remove("hidden");
    // console.log(msg);
    msg.innerText = (`Congratulations!! The Winner is Player"${name}"`);
    main.classList.add("hidden");
    document.body.style.backgroundColor="black" 

    // showwinner.innerText(name);
};
disablebox = () => {
    for (let box of boxes) {
        box.disabled = true;
    }

}

resetgame = () => {
    document.body.style.backgroundColor="rgba(3, 79, 63, 0.879)" 
    enable();
    showwinner.classList.add("hidden");
    turnO = true;
    main.classList.remove("hidden");
    boxes.forEach(box => {
        box.classList.remove("red");
        box.classList.remove("hover-effect")
        box.classList.remove("green");
        
    });
    // player.classList.add("hidden");
    player.innerText = ("Next turn is of Player O");
    
}
newgame.addEventListener("click", resetgame);
reset.addEventListener("click", resetgame);
enable = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}
backtogame = () => {
    main.classList.remove("hidden");
    showwinner.classList.add("hidden");
    player.innerText = ("Game Ended, click on reset button to start a new game");
    document.body.style.backgroundColor="rgba(3, 79, 63, 0.879)" 
    boxes.forEach(box => {
        
        box.classList.add("hover-effect")
        
        
    });
    
}
back.addEventListener("click", backtogame);
// backtogame(pos1);            


