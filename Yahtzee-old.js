<!-- Created by: Zahidul Islam -->

// Roll count
var count=0;
    
// Total score
var totalScore=0;
    
// Bonus
var bonus=0;

// Random number for die
var rNum = new Array(5);

// Holds current score
var currScore = new Array(13);

// Allow to score
var canScore = new Array(13)
canScore.fill(true,0,13);

// Hold final score
var finalScore = new Array(13);

// Reveal final score
var revealFinalScore = false;
    
// ****************
// Roll Dice
// ****************
function roll()
{
	// Roll limit
	if(count == 3)
	{
		return;
	}
	
	count++;
	
	// Roll Count Status
	document.getElementById("countNum").innerHTML = count;

    // Clear Current Scores
     currScore.fill(0,0,13);
    
    // Update dice
    for(i = 0; i < 5; i++)
    {
	   if(document.getElementById("hold"+i).checked == false)
	   {
          rNum[i] = Math.floor(Math.random()*6)+1;
		  document.getElementById("d"+i).src="images/dice"+rNum[i]+".gif";		
	   }
    }
 
	if(count > 0 && count < 4)
	{
		addScore(rNum[0],rNum[1],rNum[2],rNum[3],rNum[4]);

	}
	

}
/*
// ****************
// Current Scores
// ****************
function addScore(s1,s2,s3,s4,s5)
{
    // Current die values
	var num = [s1,s2,s3,s4,s5];
	
    // Sort array
	num.sort();

    // 1's - 6's scores
    for(i=1;i<=6;i++)
    {
        for(j=0;j<5;j++)
        {
            if(num[j] == i)
            {   
                currScore[i-1] += i;
            }
        }
    }
 
	// 3 of a kind
	if(num[0] == num[1] && num[1] == num[2] ||
       num[1] == num[2] && num[2] == num[3] ||
       num[2] == num[3] && num[3] == num[4])
    {
        currScore[6] = s1+s2+s3+s4+s5;
    }
    
	// 4 of a kind
	if(num[0] == num[1] && num[1] == num[2] && num[2] == num[3] ||
       num[1] == num[2] && num[2] == num[3] && num[3] == num[4])
    {
        currScore[7] = s1+s2+s3+s4+s5;
    }

	// Fullhouse
	if(num[0] == num[1] && num[2] == num[3] && num[2] == num[4] && num[0] != num[2] ||
       num[0] == num[1] && num[0] == num[2] && num[3] == num[4] && num[0] != num[3])
    {
        currScore[8] = 25;
    }

	// Small Straight
    for(i=0;i<4;i++)
    {   
        // remove duplicate value
        if(num[i] == num[i+1])
        {
            delete num[i];
        }
    }
    
    if(num[0] < num[1] && num[1] < num[2] &&
       num[2] < num[3])
    {
        currScore[9] = 30;
    }
	
	// Large Straight
    if(num[0] < num [1] && num[1] < num[2] && num[2] < num [3] && num[3] < num[4])
    {
        currScore[10] = 40;
    }
    
	// Yahtzee
    if(s1 == s2 && s1 == s3 && s1 == s4 && s1 == s5)
    {	
        if(currScore[11] != 50)
        {
            currScore[11] = 50;
        }
        else
        {
            currScore[11] += 100;
        }
    }

	// Chance
	currScore[12] = s1+s2+s3+s4+s5;   
}

// ****************
// Update Score
// ****************
function updateScore(i)
{
	// Finalize score
	if(count>0 && canScore[i] == true)
	{
	   document.getElementById("score" + i).innerHTML = currScore[i];
       canScore[i] = false;
	   reset();   
	}

    var valid = 0;
    
    // Check if player scores all boxes 
    for(i=0;i<13;i++)
    {
        if(canScore[i] == false)
        {
            valid++;
        }

    }
    
    // Reveal final score
    if(valid==13)
    {
       finalizeScore();
        
    }
}
    
// ****************	
// Total Score
// ****************
function finalizeScore()
{  
  // Total score
  for(i=0;i<13;i++)
  {  
     totalScore += parseInt(document.getElementById("score"+i).innerHTML);
  }
    
  // Bonus points
  for(i=0;i<5;i++)
  {
      bonus += parseInt(document.getElementById("score"+i).innerHTML);
      if(bonus >= 63)
      {
          totalScore = totalScore + 35;
      }
  }
    
  // Display Score
  document.getElementById("totalScore").innerHTML = totalScore;

  // Stop roll button
  count = 3;
}
    
// ****************
// Reset
// ****************
function reset()
{
    // reset checkboxes
    for(i=0;i<5;i++)
    {
        document.getElementById("hold"+i).checked = false;
    }
	   
    // reset dice
    for(i=0;i<5;i++)
    {
        document.getElementById("d"+i).src="images/dice0.gif";	
    }
    
    // reset count
	count = 0;
	document.getElementById("countNum").innerHTML = count;
}

// ****************
// Preview Score
// ****************
function mouseOver(x) 
{
    if(canScore[x] == true && count != 0)
    {
        document.getElementById("score"+x).innerHTML = currScore[x];
    }
}

// ****************
// Clear Score (If not scored)
// ****************
function mouseOut(x)
{
    if(canScore[x] == true)
    {    
        document.getElementById("score"+x).innerHTML = "";
    }
}   
*/