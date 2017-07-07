var numCorp = Math.floor(Math.random() * 322);
var numNoun = Math.floor(Math.random() * 4553);
console.log(numCorp);
console.log(numCorp);

function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                alert(allText);
            }
        }
    }
    rawFile.send(null);
}

var corpsFile = readTextFile('corporations.txt');
console.log(corpsFile);
var nounsFile = readTextFile('nouns.txt');
console.log(nounsFile);

var corpsArray = corpsFile.split('\n');
console.log(corpsArray);
var nounsArray = nounsFile.split('\n');
console.log(nounsArray);

var corp = corpsArray[numCorp];
var noun = nounsArray[numNoun];

var line = "The " + corp + " of " + noun + ".";
console.log(line);
document.getElementById("text").innerHTML = line;