var gameData = {
    charTyped: 0,
    problemSolved: 0,
    charPerClick: 1,
    tempCharPerClick: 1,
    charPerClickCost: 10,
    coders: 0,
    coderCost: 1,
    closed: 0,
    code: '',
    id: '1',
    title: 'two-sum',
    next: 'class Solution {\n' +
        '    // O(N)\n' +
        '    public int[] twoSum(int[] nums, int target) {\n' +
        '        \n' +
        '        int[] res = new int[2];\n' +
        '\n' +
        '        for (int i = 1; i < nums.length; i++) {\n' +
        '\n' +
        '            for (int j = 0; j+i<nums.length; j++) {\n' +
        '                \n' +
        '                if(nums[j]+nums[j+i]==target) {\n' +
        '                    res[0]=j;\n' +
        '                    res[1]=j+i;\n' +
        '                    return res;\n' +
        '                }\n' +
        '            }\n' +
        '        }\n' +
        '        return res;\n' +
        '    \n' +
        '    }\n' +
        '}',
    content: '<p>Given an array of integers <code>nums</code>&nbsp;and an integer <code>target</code>, return <em>indices of the two numbers such that they add up to <code>target</code></em>.</p>\n' +
        '\n' +
        '<p>You may assume that each input would have <strong><em>exactly</em> one solution</strong>, and you may not use the <em>same</em> element twice.</p>\n' +
        '\n' +
        '<p>You can return the answer in any order.</p>\n' +
        '\n' +
        '<p>&nbsp;</p>\n' +
        '<p><strong class="example">Example 1:</strong></p>\n' +
        '\n' +
        '<pre>\n' +
        '<strong>Input:</strong> nums = [2,7,11,15], target = 9\n' +
        '<strong>Output:</strong> [0,1]\n' +
        '<strong>Explanation:</strong> Because nums[0] + nums[1] == 9, we return [0, 1].\n' +
        '</pre>\n' +
        '\n' +
        '<p><strong class="example">Example 2:</strong></p>\n' +
        '\n' +
        '<pre>\n' +
        '<strong>Input:</strong> nums = [3,2,4], target = 6\n' +
        '<strong>Output:</strong> [1,2]\n' +
        '</pre>\n' +
        '\n' +
        '<p><strong class="example">Example 3:</strong></p>\n' +
        '\n' +
        '<pre>\n' +
        '<strong>Input:</strong> nums = [3,3], target = 6\n' +
        '<strong>Output:</strong> [0,1]\n' +
        '</pre>\n' +
        '\n' +
        '<p>&nbsp;</p>\n' +
        '<p><strong>Constraints:</strong></p>\n' +
        '\n' +
        '<ul>\n' +
        '\t<li><code>2 &lt;= nums.length &lt;= 10<sup>4</sup></code></li>\n' +
        '\t<li><code>-10<sup>9</sup> &lt;= nums[i] &lt;= 10<sup>9</sup></code></li>\n' +
        '\t<li><code>-10<sup>9</sup> &lt;= target &lt;= 10<sup>9</sup></code></li>\n' +
        '\t<li><strong>Only one valid answer exists.</strong></li>\n' +
        '</ul>\n' +
        '\n' +
        '<p>&nbsp;</p>\n' +
        '<strong>Follow-up:&nbsp;</strong>Can you come up with an algorithm that is less than&nbsp;<code>O(n<sup>2</sup>)&nbsp;</code>time complexity?'
}

document.getElementById("content").innerHTML = gameData.content;
document.getElementById("title").innerHTML = gameData.id + ". " + correctTitle(gameData.title);
function type() {
    if (gameData.code.length === 0) {
        gameData.code = gameData.next;
        document.getElementById("code").innerHTML = "";
        document.getElementById("content").innerHTML = gameData.content;
        if (gameData.charTyped !== 0) {
            gameData.problemSolved++;
            document.getElementById("solved").innerHTML = gameData.problemSolved + " Problems Solved";
        }
        document.getElementById("title").innerHTML = gameData.id + ". " + correctTitle(gameData.title);
    }
    gameData.tempCharPerClick = gameData.charPerClick;
    gameData.charTyped += gameData.charPerClick;
    document.getElementById("charTyped").innerHTML = gameData.charTyped + " Characters Typed";
    if (gameData.code.substring(0, gameData.charPerClick).includes("\\")) {
        gameData.tempCharPerClick = gameData.charPerClick + 1;
    }
    for (let i = 0; i < gameData.tempCharPerClick && i < gameData.code.length; i++) {
        if (gameData.code.charAt(i) === "\\") {
            document.getElementById("code").innerHTML += "<br/>";
            i++;
            gameData.tempCharPerClick++;
            console.log("hello" + " \\ " + gameData.code.charAt(i));
        } else {
            document.getElementById("code").innerHTML += gameData.code.charAt(i);
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

function workerLoop() {
    gameData.charTyped += gameData.coders;
    document.getElementById("charTyped").innerHTML = gameData.charTyped + " Characters Typed";
}

function buyCharPerCLick() {
    if (gameData.charTyped >= gameData.charPerClickCost) {
        gameData.charTyped -= gameData.charPerClickCost;
        gameData.charPerClick += 1;
        gameData.charPerClickCost *= 2;
    }
    document.getElementById("charTyped").innerHTML = gameData.charTyped + " Characters Typed";
    document.getElementById("perClickUpgrade").innerHTML =
        "Purchase Keyboard (Currently " + gameData.charPerClick + ") Cost: " + gameData.charPerClickCost + " Characters";
}

function buyWorker() {
    if (gameData.problemSolved >= gameData.coderCost) {
        gameData.coders += 1;
        gameData.coderCost *= 2;
    }
    document.getElementById("coderUpgrade").innerHTML =
        "Buy Programmer (Currently " + gameData.coders + ") Requirement: " + gameData.coderCost + " Problems Solved";
}

function correctTitle(title) {
    title = title.substring(0, 1).toUpperCase() + title.substring(1);
    for (let i = 1; i < title.length - 1; i++) {
        if (title.substring(i, i+1) === "-") {
            title = title.substring(0, i) + " " + title.substring(i + 1, i + 2).toUpperCase() + title.substring(i + 2);
        }
    }
    return title;
}

var mainGameLoop = window.setInterval(function() {
    workerLoop()
}, 1000);

function openStore() {
    document.getElementById("store").style.width = "250px";
    document.getElementById("page").onclick = function onclick() {
        closeStore()
    };
    document.body.onkeydown = function onkeydown() {
    };
}

function closeStore() {
    if (gameData.closed === 0) {
        gameData.closed++;
    } else {
        document.getElementById("store").style.width = "0";
        document.getElementById("page").onclick = function onclick() {
        };
        document.body.onkeydown = function onkeydown() {
            type()
        };
        gameData.closed = 0;
    }
}