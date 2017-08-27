document.addEventListener('DOMContentLoaded', function() {
  window.onload = function () {
        getTodaysLinks();
  }
}, false);

getTodaysLinks = function(){
  let today = new Date().getDate();
  let principleUrl= getTodaysPrincipleURL(today);
  chrome.tabs.create({ url: principleUrl});
  let kataUrl= getTodaysKataURL(today);
  chrome.tabs.create({ url: kataUrl});
}

getTodaysPrincipleURL = function (DayOfTheMonth){
  var sourceURL = "http://principles-wiki.net/principles:";
  let PrincipleNameArray = [

    "Dependency Iversion Principle",
    "Dont repeat yourself",
    "Generaliztation Principle",
    "Fail Fast",
    "High Cohesion",
    "Keep it simple and stupid",
    "Liskov Substitution Principle",
    "More is more complex",
    "Open Closed Principle",
    "Principle of least surprise",
    "Separation of concerns",
    "Single level of abstraction",
    "single responsibility principle",
    "You Ain t gonna need it"
  ];
  var todaysPrincipleURL=sourceURL + PrincipleNameArray[DayOfTheMonth % PrincipleNameArray.length];
  todaysPrincipleURL = todaysPrincipleURL.replace(new RegExp(" ", "g"), "_");
  return todaysPrincipleURL;
}

getTodaysKataURL = function(DayOfTheMonth){
  let KataLinkArray = [
    "http://codingdojo.org/kata/BankOCR",
    "http://codingdojo.org/kata/FizzBuzz",
    "http://codingdojo.org/kata/Potter",
    "http://codingdojo.org/kata/RomanNumerals",
    "http://codingdojo.org/kata/RomanCalculator",
    "http://codingdojo.org/kata/NumbersInWords",
    "http://codingdojo.org/kata/Args",
    "http://codingdojo.org/kata/Anagram",
    "http://codingdojo.org/kata/DepthFirstSearch",
    "http://codingdojo.org/kata/NumberToLCD",
    "http://codingdojo.org/kata/Bowling",
    "http://codingdojo.org/kata/GameOfLife",
    "http://codingdojo.org/kata/Minesweeper",
    "http://codingdojo.org/kata/PacMan",
    "http://codingdojo.org/kata/PokerHands",
    "http://codingdojo.org/kata/Reversi",
    "http://codingdojo.org/kata/Tennis",
    "http://codingdojo.org/kata/TexasHoldEm",
    "http://codingdojo.org/kata/TradingCardGame",
    "http://codingdojo.org/kata/Yahtzee",
    "http://codingdojo.org/kata/Range",
    "http://codingdojo.org/kata/DictionaryReplacer",
    "http://codingdojo.org/kata/WordWrap",
    "http://codingdojo.org/kata/QotdCgi",
    "http://codingdojo.org/kata/JEEWebAuthentication"
  ];
  var todaysKataURL=KataLinkArray[DayOfTheMonth % KataLinkArray.length];
  return todaysKataURL;
}

function areEqual(a,b, TestCaseName){

  if(a==b){
    return true;
  }else {
    return("Fail: Test "+TestCaseName+" expected:"+a+", received:"+b);
  }
}

function testGetTodaysPrincipleURL_Input0(func){
  input = 0;
  output = func(input);
  expected="http://principles-wiki.net/principles:Dependency_Iversion_Principle";
  return areEqual(expected, output, "testGetTodaysPrincipleURL_Input0");
}

function testgetTodaysKataURL_Input0(func){
  input = 0;
  output = func(input);
  expected="http://codingdojo.org/kata/BankOCR";
  return areEqual(expected, output, "testgetTodaysKataURL_Input0");
}

function runAllTests(){
    let resultsArray = [];
    let allTestsPassed = true;
    resultsArray.push(testGetTodaysPrincipleURL_Input0(getTodaysPrincipleURL));
    resultsArray.push(testgetTodaysKataURL_Input0(getTodaysKataURL));

    for(var i = 0; i<resultsArray.length;i++){
      if(resultsArray[i]!=true){
        alert(resultsArray[i]);
        allTestsPassed = false;
      }
    }

    if(allTestsPassed){
      alert("All Tests passed!");
    }
}
