let userScore = 0;
let CompScore = 0;

let user_Score = document.querySelector("#user_Score");
let comp_Score = document.querySelector("#comp_Score");

let zeroi = document.querySelector("#zero");
let one = document.querySelector("#one");
let two = document.querySelector("#two");
let three = document.querySelector("#three");
let four = document.querySelector("#four");
let five = document.querySelector("#five");
let six = document.querySelector("#six");
let seven = document.querySelector("#seven");
let eight = document.querySelector("#eight");
let display = document.querySelector(".score_Board");

const checkForUser = () => {  //user
    if (zeroi.innerText == "X" && one.innerText == "X" && two.innerText == "X") {
        return 1;
    }
    else if (three.innerText == "X" && four.innerText == "X" && five.innerText == "X") {
        return 1;
    }
    else if (six.innerText == "X" && seven.innerText == "X" && eight.innerText == "X") {
        return 1;
    }
    else if (zeroi.innerText == "X" && three.innerText == "X" && six.innerText == "X") {
        return 1;
    }
    else if (one.innerText == "X" && four.innerText == "X" && seven.innerText == "X") {
        return 1;
    }
    else if (two.innerText == "X" && five.innerText == "X" && eight.innerText == "X") {
        return 1;
    }
    else if (zeroi.innerText == "X" && four.innerText == "X" && eight.innerText == "X") {
        return 1;
    }
    else if (two.innerText == "X" && four.innerText == "X" && six.innerText == "X") {
        return 1;
    }
    else
        return 0;
}
    //computer
   const checkForComputer=()=>
   {
    if (zeroi.innerText == "O" && one.innerText == "O" && two.innerText == "O") {
        return 1;
    }
    else if (three.innerText == "O" && four.innerText == "O" && five.innerText == "O") {
        return 1;
    }
    else if (six.innerText == "O" && seven.innerText == "O" && eight.innerText == "O") {
        return 1;
    }
    else if (zeroi.innerText == "O" && three.innerText == "O" && six.innerText == "O") {
        return 1;
    }
    else if (one.innerText == "O" && four.innerText == "O" && seven.innerText == "O") {
        return 1;
    }
    else if (two.innerText == "O" && five.innerText == "O" && eight.innerText == "O") {
        return 1;
    }
    else if (zeroi.innerText == "O" && four.innerText == "O" && eight.innerText == "O") {
        return 1;
    }
    else if (two.innerText == "O" && four.innerText == "O" && six.innerText == "O") {
        return 1;
    }
    else
        return 0;
}

const DrawGame = () => {
    console.log("Draw");
    display.innerText = "Its a Draw!";
}

const changePic = (userChoice, CompChoice) => {
    // Update user choice immediately
    if (userChoice === "zero") {
        zeroi.innerText = "X";
    } else if (userChoice == "one") {
        one.innerText = "X";
    } else if (userChoice == "two") {
        two.innerText = "X";
    } else if (userChoice == "three") {
        document.querySelector("#three").innerText = "X";
    } else if (userChoice == "four") {
        document.querySelector("#four").innerText = "X";
    } else if (userChoice == "five") {
        document.querySelector("#five").innerText = "X";
    } else if (userChoice == "six") {
        document.querySelector("#six").innerText = "X";
    } else if (userChoice == "seven") {
        document.querySelector("#seven").innerText = "X";
    } else if (userChoice == "eight") {
        document.querySelector("#eight").innerText = "X";
    }

    // Delay the computer's choice update
    // if (id == 0) {
    //     return;
    // }
        setTimeout(() => {
            switch (CompChoice) {
                case "zero":
                    document.querySelector("#zero").innerText = "O";
                    break;
                case "one":
                    document.querySelector("#one").innerText = "O";
                    break;
                case "two":
                    document.querySelector("#two").innerText = "O";
                    break;
                case "three":
                    document.querySelector("#three").innerText = "O";
                    break;
                case "four":
                    document.querySelector("#four").innerText = "O";
                    break;
                case "five":
                    document.querySelector("#five").innerText = "O";
                    break;
                case "six":
                    document.querySelector("#six").innerText = "O";
                    break;
                case "seven":
                    document.querySelector("#seven").innerText = "O";
                    break;
                case "eight":
                    document.querySelector("#eight").innerText = "O";
                    break;
            }
        }, 1000); // Delay in milliseconds (1000 ms = 1 second)
    }
let opt = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight"];
const generate = (userChoice) => {

    //NOTE WE ALSO HAVE TO REMOVE THE USERCHOICE WORD
    let userIndex = opt.indexOf(userChoice);
    console.log(userIndex);
    opt.splice(userIndex, 1);
    console.log("opt");
    // Generate a random index between 0 and the length of the array - 1
    let choice = Math.floor(Math.random() * opt.length);

    // Get the word corresponding to the random index
    let word = opt[choice];

    // Remove the chosen word from the array
    opt.splice(choice, 1);

    // Log the index and the remaining array for debugging
    console.log("Chosen index:", choice);
    console.log("Remaining array:", opt);

    if (opt.length === 0) {
        DrawGame();
    }
    // Return the chosen word
    return word;
}
let choices = document.querySelectorAll(".first");
// choices.forEach((first) => {
//     first.addEventListener("click", () => {
//         const userChoice = first.getAttribute("id");
//         let CompChoice = generate(userChoice);
//         if (userChoice === CompChoice) { let CompChoice = generate(userChoice); }
//         changePic(userChoice, CompChoice);
//         let decide_winner_user = checkForUser();
//         let decide_winner_computer = checkForComputer();
//         if (decide_winner_user === 1) {
//             display.innerText = "YOU WON";
//             userScore++;
//             user_Score.innerText = userScore;
//         }
//         else if (decide_winner_computer === 1) {
//             display.innerText = "COMPUTER WON!!";
//             CompScore++;
//             comp_Score.innerText = CompScore;
//         }
//         else {
//             console.log("okay continue game!");
//         }
//         console.log(userChoice);
//         console.log(CompChoice);
//         // playGame(userChoice,CompChoice);
//     });
// }); 
let gameOver = false;

choices.forEach((first) => {
    first.addEventListener("click", () => {

        if (gameOver) return; //STOP GAME IF OVER
        if (first.innerText !== "") return;


        const userChoice = first.getAttribute("id");
        let CompChoice = generate(userChoice);

        changePic(userChoice, CompChoice);

        //Checking USER win immediately
        if (checkForUser() === 1) {
            display.innerText = "YOU WON";
            userScore++;
            user_Score.innerText = userScore;
            gameOver = true;
            setTimeout(resetBoard, 1800)
            return;
        }

        //Checking COMPUTER win AFTER computer move is placed
        setTimeout(() => {
            if (checkForComputer() === 1 && !gameOver) {
                display.innerText = "COMPUTER WON!!";
                CompScore++;
                comp_Score.innerText = CompScore;
                gameOver = true;
                setTimeout(resetBoard, 1800);
            }
        }, 1100); 
    });
});

function resetBoard() {
    const boxes = document.querySelectorAll(".first");
    boxes.forEach(box => {
        box.innerText = "";
    });
    display.innerText = "New Round!";

    opt = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight"];
    gameOver = false;
}

const menu_opt=document.querySelector(".group_menu");
const menu_box=document.querySelector(".container_class .content")

menu_opt.addEventListener("click",()=>
{     
    console.log("clicked")
     menu_box.style.visibility='visible';
})
//changing theme

const body=document.querySelector("body");
const mainTitle=document.querySelector(".heading");

const option1=document.querySelector("#lone");
const option2=document.querySelector("#ltwo");
const option3=document.querySelector("#lthree");
const option4=document.querySelector("#lfour")
const option5=document.querySelector("#lfive");
// const option1=document.querySelector("#lone");

option1.addEventListener("click",()=>
    {
        body.style.backgroundColor="#B1AB86";
        mainTitle.style.backgroundColor="#004030"
        mainTitle.style.color="white";
        document.querySelector("#zero").style.backgroundColor="#819067";
        document.querySelector("#one").style.backgroundColor="#FEFAE0";
        document.querySelector("#two").style.backgroundColor="#819067";
        document.querySelector("#three").style.backgroundColor="#FEFAE0";
        document.querySelector("#four").style.backgroundColor="#819067";
        document.querySelector("#five").style.backgroundColor="#FEFAE0";
        document.querySelector("#six").style.backgroundColor="#819067";
        document.querySelector("#seven").style.backgroundColor="#FEFAE0";
        document.querySelector("#eight").style.backgroundColor="#819067";
    }
)

option2.addEventListener("click",()=>
    {
        body.style.backgroundColor="#E1FFBB";
        mainTitle.style.backgroundColor="#074173"
        mainTitle.style.color="white";
        document.querySelector("#zero").style.backgroundColor="#22577A";
        document.querySelector("#one").style.backgroundColor="#59B4C3";
        document.querySelector("#two").style.backgroundColor="#22577A";
        document.querySelector("#three").style.backgroundColor="#59B4C3";
        document.querySelector("#four").style.backgroundColor="#22577A";
        document.querySelector("#five").style.backgroundColor="#59B4C3";
        document.querySelector("#six").style.backgroundColor="#22577A";
        document.querySelector("#seven").style.backgroundColor="#59B4C3";
        document.querySelector("#eight").style.backgroundColor="#22577A";
    }
)
option3.addEventListener("click",()=>
    {
        body.style.backgroundColor="#E49BA6";
        mainTitle.style.backgroundColor="#92487A"
        mainTitle.style.color="white";
        document.querySelector("#zero").style.backgroundColor="#e4c4e4ff";
        document.querySelector("#one").style.backgroundColor="#540863";
        document.querySelector("#two").style.backgroundColor="#e4c4e4ff";
        document.querySelector("#three").style.backgroundColor="#540863";
        document.querySelector("#four").style.backgroundColor="#e4c4e4ff";
        document.querySelector("#five").style.backgroundColor="#540863";
        document.querySelector("#six").style.backgroundColor="#e4c4e4ff";
        document.querySelector("#seven").style.backgroundColor="#540863";
        document.querySelector("#eight").style.backgroundColor="#e4c4e4ff";
    }
)
option4.addEventListener("click",()=>
    {
        console.log("four clicked")
        body.style.backgroundColor="#eb90b0ff";
        mainTitle.style.backgroundColor="#8E7565"
        mainTitle.style.color="white";
        document.querySelector("#zero").style.backgroundColor="#93B2B0";
        document.querySelector("#one").style.backgroundColor="#C46D75";
        document.querySelector("#two").style.backgroundColor="#93B2B0";
        document.querySelector("#three").style.backgroundColor="#C46D75";
        document.querySelector("#four").style.backgroundColor="#93B2B0";
        document.querySelector("#five").style.backgroundColor="#C46D75";
        document.querySelector("#six").style.backgroundColor="#93B2B0";
        document.querySelector("#seven").style.backgroundColor="#C46D75";
        document.querySelector("#eight").style.backgroundColor="#93B2B0";
    }
)
option5.addEventListener("click",()=>
{
    window.close();
})

function reloadPage() {
  location.reload();
}

refresh=document.querySelector("#refresh_id");
refresh.addEventListener("click",()=>
{
    console.log("hey u clicked refresh button");
    reloadPage();
})
// #B1AB86

//#FEFAE0
// code for generating random facts
    // const factBtnn = document.getElementById("factBtn");
    // const factPara = document.getElementById("factPara");

    // function getRandomFact() {
    //   fetch("https://uselessfacts.jsph.pl/random.json?language=en")
    //     .then(res => res.json())
    //     .then(data => {
    //       factPara.innerText = data.text;
    //     })
    //     .catch(() => {
    //       factPara.innerText = "Failed to load fact.";
    //     });
    // }

    // factBtnn.addEventListener("click",()=>{
    //     console.log("yep")
    //     getRandomFact();
    // })

      
    const facts = [
      "Tic-Tac-Toe is also known as Noughts and Crosses.",
      "A perfect game of Tic-Tac-Toe always ends in a draw.",
      "The game dates back to ancient Egypt.",
      "There are 255,168 possible Tic-Tac-Toe games.",
      "The center square is the most powerful opening move.",
      "Tic-Tac-Toe is often used to teach AI algorithms.",
      "The first player has a statistical advantage if played optimally."
    ];

    const factPara = document.getElementById("factPara");
    const factBtn = document.getElementById("factBtn");

    function getRandomFact() {
      const randomIndex = Math.floor(Math.random() * facts.length);
      factPara.innerText = facts[randomIndex];
    }

    factBtn.addEventListener("click", getRandomFact);