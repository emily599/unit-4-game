var randomNumber = Math.floor((Math.random() * 120) + 19);
var newrandomNumber = Math.floor((Math.random() * 120) + 19);
var numberOptions = [Math.floor((Math.random() * 12) + 1), Math.floor((Math.random() * 12) + 1), Math.floor((Math.random() * 12) + 1), Math.floor((Math.random() * 12) + 1)];
var totalScore = 0;
var wins = 0;
var losses = 0;
var crystalImages = ["https://vignette.wikia.nocookie.net/marvel-contestofchampions/images/c/c3/Crystal_iso8.png/revision/latest?cb=20151121235324", "https://vignette.wikia.nocookie.net/marvel-contestofchampions/images/1/1c/2-Star_Crystal.png/revision/latest?cb=20150825213642", "https://vignette.wikia.nocookie.net/marvel-contestofchampions/images/b/b4/Crystal_quest.png/revision/latest?cb=20151122000045", "https://vignette.wikia.nocookie.net/marvel-contestofchampions/images/d/d8/Crystal_cosmic.png/revision/latest?cb=20151121233932"];

$("#targetNumber").html("Target Score: " + randomNumber);


for (var i = 0; i < numberOptions.length; i++) {
    var imageCrystal = $("<img>");
    imageCrystal.addClass("crystal-image");
    imageCrystal.attr("src", crystalImages[i]);
    imageCrystal.attr("data-crystalvalue", numberOptions[i]);


    $("#crystals").append(imageCrystal);
}



function clear() {
    totalScore = 0; //resetting total score

    randomNumber = Math.floor((Math.random() * 120) + 19); //resetting value of target score
    $("#targetNumber").html("Target Score: " + randomNumber);

    numberOptions = [Math.floor((Math.random() * 12) + 1), Math.floor((Math.random() * 12) + 1), Math.floor((Math.random() * 12) + 1), Math.floor((Math.random() * 12) + 1)];
    debugger;
    var imageCrystals = $(".crystal-image");
    for (var i = 0; i < numberOptions.length; i++) {
        debugger;
        imageCrystals[i].setAttribute("data-crystalvalue", numberOptions[i]);

    }






    //resetting value of crystals????

}


$(".crystal-image").on("click", function () {
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    totalScore += crystalValue;
    $("#totalscorenumber").text(totalScore);

    if (totalScore === randomNumber) {
        wins++;
        $("#winorlose").text("You win!");
        $("#wins").text("Wins: " + wins);

        clear();
    }
    else if (totalScore >= randomNumber) {
        losses++;
        $("#winorlose").text("You lose!");
        $("#losses").text("Losses: " + losses);

        clear();

    }



}
);


