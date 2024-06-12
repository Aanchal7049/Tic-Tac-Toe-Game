let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newgamebtn = document.querySelector("#new-btn");
let msgconiter = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn0 = true;

let arr = ["apple", "banana", "litchi"];

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8],
];

const resetGame = () => {
    turn0 = true;
    enabledBoxes();
    msgconiter.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click", () =>{
        console.log("box was clicked");
        if(turn0){
            box.innerText = "0";
            turn0 = false;
        } else {
            box.innerText = "X";
            turn0 = true;

        }
        box.disabled = true;

        checkWinner();

        
    });
});

const disabledBoxes = () => {
for(let box of boxes) {
    box.disabled = true;
}
};

const enabledBoxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
    };



const showWinner = (winner) => {
    msg.innerText = `congratulations, winner is ${winner}`;
    msgconiter.classList.remove("hide");
    disabledBoxes();
}

const checkWinner = () => {
    for( let pattern of winPatterns) {
        console.log([pattern[0]].innerText,
             [pattern[1]].innerText,
              [pattern[2]].innerText
            );

            let pos1val = boxes[pattern[0]].innerText;
            let pos2val = boxes[pattern[1]].innerText;
            let pos3val = boxes[pattern[2]].innerText;

            if(pos1val != "" && pos2val != "" && pos3val != "") {
                if(pos1val === pos2val && pos2val === pos3val) {
                    console.log("winner",pos1val);
                    showWinner(pos1val);
                }
            }
    }
}

newgamebtn.addEventListener("click", reset);
resetbtn.addEventListener("click", resetGame);


