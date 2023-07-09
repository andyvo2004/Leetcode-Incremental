var gameData = {
    charTyped: 0,
    charPerClick: 1,
    tempCharPerClick: 1,
    charPerClickCost: 10,
    coders: 0,
    coderCost: 10,
    code: 'class Solution {\n' +
        ' public int[] twoSum(int[] nums, int target)\n' +
        ' { \n' +
        ' \n' +
        'int c = 1;\n' +
        ' while(true){\n' +
        ' for(int i=0; i<nums.length-c; i++){\n' +
        ' if(nums[i]+nums[i+c] == target)\n' +
        ' return new int[] {i,i+c};\n' +
        ' \n' +
        ' }\n' +
        ' c++;\n' +
        ' }\n' +
        ' \n' +
        ' }\n' +
        '}',
    next: 'class Solution {\n' +
        ' public int[] twoSum(int[] nums, int target)\n' +
        ' { \n' +
        ' \n' +
        'int c = 1;\n' +
        ' while(true){\n' +
        ' for(int i=0; i<nums.length-c; i++){\n' +
        ' if(nums[i]+nums[i+c] == target)\n' +
        ' return new int[] {i,i+c};\n' +
        ' \n' +
        ' }\n' +
        ' c++;\n' +
        ' }\n' +
        ' \n' +
        ' }\n' +
        '}'
}

function mineGold() {
    if (gameData.code.length === 0) {
        gameData.code = gameData.next;
        document.getElementById("test").innerHTML = "";
    }
    gameData.tempCharPerClick = gameData.charPerClick;
    gameData.charTyped += gameData.charPerClick;
    document.getElementById("charTyped").innerHTML = gameData.charTyped + " Gold Mined";
    if (gameData.code.substring(0, gameData.charPerClick).includes("\\")) {
        gameData.tempCharPerClick = gameData.charPerClick + 1;
    }
    for (let i = 0; i < gameData.tempCharPerClick && i < gameData.code.length; i++) {
        if (gameData.code.charAt(i) === "\\") {
            document.getElementById("test").innerHTML += <br/>;
            i++;
            gameData.tempCharPerClick++;
        } else {
            document.getElementById("test").innerHTML += gameData.code.charAt(i);
        }
    }
    if (gameData.tempCharPerClick > gameData.code.length) gameData.code = "";
    else gameData.code = gameData.code.substring(gameData.tempCharPerClick);
    /*else {
        if (gameData.code.length < gameData.tempCharPerClick) {
            document.getElementById("test").innerHTML += gameData.code.substring(0);
            gameData.code = "";
        } else {
            document.getElementById("test").innerHTML += gameData.code.substring(0, gameData.tempCharPerClick);
            console.log(gameData.code.substring(0, gameData.tempCharPerClick));
            gameData.code = gameData.code.substring(gameData.tempCharPerClick);
        }
    }*/
}

function mineGoldLoop() {
    gameData.charTyped += gameData.coders;
    document.getElementById("charTyped").innerHTML = gameData.charTyped + " Gold Mined";
}

function buyGoldPerCLick() {
    if (gameData.charTyped >= gameData.charPerClickCost) {
        gameData.charTyped -= gameData.charPerClickCost;
        gameData.charPerClick += 1;
        gameData.charPerClickCost *= 2;
    }
    document.getElementById("charTyped").innerHTML = gameData.charTyped + " Gold Mined";
    document.getElementById("perClickUpgrade").innerHTML =
        "Upgrade Pickaxe (Currently Level " + gameData.charPerClick + ") Cost: " + gameData.charPerClickCost + " Gold";
}

function buyMiner() {
    if (gameData.charTyped >= gameData.coderCost) {
        gameData.charTyped -= gameData.coderCost;
        gameData.coders += 1;
        gameData.coderCost *= 4;
    }
    document.getElementById("charMined").innerHTML = gameData.charTyped + " Gold Mined";
    document.getElementById("coderUpgrade").innerHTML =
        "Buy Miner (Currently " + gameData.coders + ") Cost: " + gameData.coderCost + " Gold";
}

var mainGameLoop = window.setInterval(function() {
    mineGoldLoop()
}, 1000);

