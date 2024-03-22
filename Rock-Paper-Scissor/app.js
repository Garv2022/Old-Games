let compScore = 0;
let userScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    //rock, paper, scissor
    const options = ["rock", "paper", "scissors"];
    // for range 0-9: Math.floor(Math.random()*10 )
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    msg.innerText = "Game was Draw. Play Again!";
    msg.style.backgroundColor = "#001854";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win!! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lose ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    //Generate user choice -> modular
    const compChoice = genCompChoice();

    if (userChoice === compChoice) {
        //draw game
        drawGame();
    } else {
        let userWin;
        if (userChoice === "rock") {
            //scissors , paper
            userWin = compChoice === "scissors" ? true : false;
        } else if (userChoice === "paper") {
            //rock, scissors
            userWin = compChoice === "rock" ? true : false;
        } else {
            //paper, rock
            userWin = compChoice === "paper" ? true : false;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
