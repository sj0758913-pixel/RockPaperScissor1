let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissior = document.querySelector("#scissior");
let Score1 = document.querySelector("#youScore");
let Score2 = document.querySelector("#compScore");
let Draw = document.querySelector("#Draw");
let btn = document.querySelector(".btn");

let val;
let count = 0;
let fact = 0;
const randomimg = () => {
    arr = [rock, paper, scissior];
    const idx = Math.floor(Math.random() * arr.length);
    val = arr[idx];
    console.log(val);
};

randomimg();

const userSelect = () => {
    let rockclick = rock.addEventListener("click", () => {
        Draw.innerText = " ";
        if (val === rock) {
            Draw.style.color = "rgb(10, 10, 61)";
            Draw.innerText = "Draw";
            randomimg();
        } else if (val === paper) {
            count++;
            Score2.innerText = count;
            randomimg();
        } else {
            fact++;
            Score1.innerText = fact;
            randomimg();
        }
    });
    let paperclick = paper.addEventListener("click", () => {
        Draw.innerText = " ";
        if (val === rock) {
            fact++;
            Score1.innerText = fact;
            randomimg();
        } else if (val === paper) {
            Draw.style.color = "rgb(10, 10, 61)";
            Draw.innerText = "Draw";
            randomimg();
        } else {
            count++;
            Score2.innerText = count;
            randomimg();
        }

    });
    let scissiorclick = scissior.addEventListener("click", () => {
        Draw.innerText = " ";
        if (val === rock) {
            count++;
            Score2.innerText = count;
            randomimg();
        } else if (val === paper) {
            fact++;
            Score1.innerText = fact;
            randomimg();
        } else {
            Draw.style.color = "rgb(10, 10, 61)";
            Draw.innerText = "Draw";
            randomimg();
        }
    });
};

userSelect();

const Reset = () => {
    btn.addEventListener("click", () => {
        Draw.innerText = " ";
        count = 0;
        fact = 0
        Score1.innerText = fact;
        Score2.innerText = count;
    });
};

Reset();