    player1Name =localStorage.getItem("player1Name");
    player2Name =localStorage.getItem("player2Name");

    player1Score = 0;
    player2Score = 0;

document.getElementById("player1Name").innerHTML = player1Name + ":";
document.getElementById("player2Name").innerHTML = player2Name + ":";

document.getElementById("player1Score").innerHTML = player1Score;
document.getElementById("player2Score").innerHTML = player2Score;

document.getElementById("playerQuestion").innerHTML = "turno de pergunta -" + player1Name;
document.getElementById("playerAnswer").innerHTML = "Turno de resposta -" + player2Name;

function send() {
    get_word = document.getElementById("word").value;
    word = get_word.toLowerCase();
    console.log("Palavra em minúscula =" + word);


   charAt1 = word.charAt(1);
   console.log(charAt1);

   length_divide_2 = Math.floor(word.length/2);
   charAt2 = word.charAt(length_divide_2);
   console.log(charAt2)

   length_minus_1 = word.length - 1;
   charAt3 = word.charAt(length_minus_1);
    console.log(charAt3);


    remove_charAt1 = word.replace(charAt1, "-");
    remove_charAt2 = remove_charAt1.replace(charAt2, "-");
    remove_charAt3 = remove_charAt2.replace(charAt3,"-");
    console.log(remove_charAt3);

    question_word = "<h4 id='wordDisplay'> P. "+remove_charAt3+"</h4>";
    inputBox = "<br>Resposta : <input type='text' id='inputCheckBox'>";
    checkButton = "<br><br><button class='btn btn-info' onclick = 'check()'>Checar</button>";
    row =  question_word + inputBox + checkButton ; 
    document.getElementById("output").innerHTML = row;
document.getElementById("word").value = "";

}

answerTurn = "player2";
questionTurn = "player1";

function check()
{
    getAnswer = document.getElementById("inputCheckBox").value;
    answer = getAnswer.toLowerCase();
    console.log("resposta em caixa baixa -" + answer);
    if(answer == word)
    {
        if(answerTurn == "player1")
        {
            player1Score = player1Score + 1;
            document.getElementById("player1Score").innerHTML = player1Score
        }
        else
        {
            player2Score = player2Score + 1;
            document.getElementById("player2Score").innerHTML = player2Score
        }
    }
    if(questionTurn == "player1")
    {
        questionTurn = "player2"
        document.getElementById("playerQuestion").innerHTML = "Turno de pergunta:" + player2Name
    }
    else
    {
        questionTurn = "player1"
        document.getElementById("playerQuestion").innerHTML = "turno de pergunta:" + player2Name

    }
    if(answerTurn == "player1")
    {
        answerTurn = "player2"
        document.getElementById("playerAnswer").innerHTML = "turno de Resposta:" + player2Name
    }
    else
    {
        answerTurn = "player1"
        document.getElementById("playerAnswer").innerHTML = "turno de Resposta:" + player1Name
    }

    document.getElementById("output").innerHTML = "";
}