var gameData = {
    gold: 0,
    goldPerClick: 1,
    goldPerClickCost: 10,
    miners: 0,
    minerCost: 10
}

const cors = require("cors");
app.use(cors());
app.options('*', function (req,res) { res.sendStatus(200); });

function mineGold() {
    gameData.gold += gameData.goldPerClick;
    document.getElementById("goldMined").innerHTML = gameData.gold + " Gold Mined";
    retrieveSolution(1, 0).then(sol => {
        console.log(sol);
        document.getElementById("test").innerHTML = sol.data.codeWithRuntime.code;
    })
}

function mineGoldLoop() {
    gameData.gold += gameData.miners;
    document.getElementById("goldMined").innerHTML = gameData.gold + " Gold Mined";
}

function buyGoldPerCLick() {
    if (gameData.gold >= gameData.goldPerClickCost) {
        gameData.gold -= gameData.goldPerClickCost;
        gameData.goldPerClick += 1;
        gameData.goldPerClickCost *= 2;
    }
    document.getElementById("goldMined").innerHTML = gameData.gold + " Gold Mined";
    document.getElementById("perClickUpgrade").innerHTML =
        "Upgrade Pickaxe (Currently Level " + gameData.goldPerClick + ") Cost: " + gameData.goldPerClickCost + " Gold";
}

function buyMiner() {
    if (gameData.gold >= gameData.minerCost) {
        gameData.gold -= gameData.minerCost;
        gameData.miners += 1;
        gameData.minerCost *= 4;
    }
    document.getElementById("goldMined").innerHTML = gameData.gold + " Gold Mined";
    document.getElementById("minerUpgrade").innerHTML =
        "Buy Miner (Currently " + gameData.miners + ") Cost: " + gameData.minerCost + " Gold";
}

var mainGameLoop = window.setInterval(function() {
    mineGoldLoop()
}, 1000);

