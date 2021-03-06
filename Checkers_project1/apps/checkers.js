// console.log('test');
// console.log($);


//****LIMIT WHAT THE PLAYER CAN DO TO GUIDE THEM TO THE CORRECT PROGRAM FLOW!



// 1.click;
// 2. select piece; confirm
// 3.click again;<< problem is here... would require a new onClick event assignment... OR could just limit assignment to playable/non playables instead... but means there is no onClick even for the wrong pieces...
// 4. select destination;
// 5. Run evaluations
// 6. Make move(s)
// 7. Next players turn
// 8. Loop.
//  ---- Alternative to changing the eventHandler is to have three separate ones tied to 3 different dynamic arrays that are constanty updating... unless you tie player pieces to images you can re-append the images and the onclick event would always follow.
// If player & playable   3 arrays constantly beign update...still has to happen
// If image re-append no changes
// If total board -reassign once in program float... re-assignment happend each time...
// Leaves open to many useless possibilities for clicking squares. Limit users control flow and for game progression.


//NEED TO MAP GAME PLAY IN GREATER DETAIL!

// ====FUNCTIONS HERE====

const getEvenOdd = (countEvaluated, outputClass)=>{
      if(countEvaluated%2 === 0){
           return outputClass = 'even';
      }else{
          return outputClass = 'odd';
      }  // determines squareClass2 = odd or even
}


const startGame =() =>{
      //simply need something to indicate that the game as began so turns can be counted.
}
const whichTurn = () =>{
  //count the number of turns taken
  //on first turn run a random number generator to determine which player goes first.
  //alternate every turn there after TOGGLE True/FALSE
  //NEEDS PASS THE PLAYER INTO THE SELECT PIECE FUNCTION!
  // !!!Returns playerArray
}

const validateSelection = (player, eventObject)=>{

    if($.inArray(event.currentTarget, player)>=0){
      //give currentTarget a glow..
      //change onclick event to pull destination
      console.log($(event.currentTarget));
      return  $selctionDiv =$(event.currentTarget)

    }else{
      alert('This is not Your piece.')
    }
}

const selectPiece = (event)=>{
        //somewhere between here and whichTurn you want to limit/ terminate program if the piece seleceted doesn't belong to the player.
        //This function should ONLY run once the selection has been validated.
        console.log($('event.CurrentTarget'));
}

const selectDestination = ()=>{
  console.log('is anything happening?');
  // check if img is appended
    if(event.currentTarget.children === $('img')){
      console.log("You cannot move here this place is taken");
    }else{
      console.log('no img- execute evaluation');
      return $destinatonDiv = event.currentTarget;
    }

        //GET 1st allowables: CurrentID - 7 or CurrentID - 9
        //CHECK if 1st allowables are Blank
        // IF SO MOVE TO Selected Destination

        //IF NOT check if

}


const ordainMove = (player)=>{
  // ***OFF BOARD RESTRICTIONS NEED TO HAPPEN HERE ON THE OUTSIDE

//Lists possible 1st moves... Doesn't change...
    if(player === $player2){//<<<--- NEED to diistinguihs between p1 & p2
        P2MoveLeft =$selection.attr('id')+7;
        P2MoveRight =$selection.attr('id')+9;
        P2JumpLeft =$selection.attr('id')+14;
        P2JumpRight =$selection.attr('id')+18;

    }else{
        P1MoveLeft =$selection.attr('id')-9;
        P1MoveRight=$selection.attr('id')-7;
        P2JumpRight =$selection.attr('id')-18;
        P2JumpLeft =$selection.attr('id')-14;
    }
//checks that destination selected is within range of allowable moves, then calls move.
    if($destionationDiv=== P2MoveLeft ||  $destionationDiv=== P2MoveRight){
       //EXCUTE MOVE!
    }else if($destionationDiv=== P2JumpLeft ||  $destionationDiv=== P2JumpRight){
      //CONFIRM THAT AN OPPONENT PIECE IS IN  MOVELEFT/MOVE RIGHT
      //EXECUTE MOVE
    }
}

const MOVE = (playerImage)=>{
  $($destionationDiv).append($'<img>').attr('src', playerImage)
  // NEED TO PASS PLAYER IMAGE INTO  A VARIABLE FOR USE HERE AND FOR PIEE SELECTIONS!
  // Could have an array of images to choos from not just red black and white.
}


// ====ON LOAD EVENTS HERE====
$(()=>{


// creates a container,  creates player divs, appends to body
      $('body').append($('<container>'));


      //APPENDS TO PLAYER DIV BUT ORDER MATTERS!!
  const $player1Div =$('<div>').addClass('player1');
  const $player2Div =$('<div>').addClass('player2');

// ====VARIABLES HERE====
      let squareClass="";
      let rowClass2="";
      let squareClass2="";
      let rowCount =1;
      let limit =8;
              // creates rows 1-8
      for (let rowCount=1; rowCount<=limit; rowCount++){
          rowClass2=getEvenOdd(rowCount,rowClass2);
          $('container').append($('<div>').addClass('row').addClass(rowClass2+'Row').attr('id','row'+rowCount));
// Possibly move to function??
          if( rowCount<=3){
            $($player2Div).append($('#row'+rowCount));
            $('container').prepend($player2Div);
          }else  if(rowCount>5){
            $($player1Div).append($('#row'+rowCount));
            $('container').append($player1Div);
          }
              // Creates squares 1-8 per row, used the row count * 8 to get to next row count + square count in row to get to square counts.
                for(j=1; j<=8; j++){
                    let squareCount = (rowCount-1)*8+j;
                    squareClass2= getEvenOdd(squareCount, squareClass2);
                    $('#row'+rowCount)
                    .append($('<div>')
                        .addClass('square')
                        .addClass(squareClass2)
                        .attr('id',squareCount)
                        .text(squareCount));
                }   // creates squares 1-8 in each row ,
        }
        //


//===SQUARES: PLAYABLE vs NON-PLAYABLE ===
        //Creating a variable to separate playable/non-playable squares & pieces...

const $playableSquares = $.merge($('.oddRow').find('div.even'), $('.evenRow').find('div.odd'));
const $nonPlayableSquares = $.merge($('.oddRow').find('div.odd'), $('.evenRow').find('div.even'));

const $openSquares = $.merge($('#row4').find('div.odd'),$('#row5').find('div.even'));
console.log($openSquares);
// ===PIECES: PLAYER STAGING SET UP/ DEFINES PLAYERS PIECES (really player squares) (* pieces in play grouped by player)
const $player1 = $.merge($('.player1').find($('.oddRow').find('div.even')), $('.player1').find($('.evenRow').find('div.odd')));
const $player2 = $.merge($('.player2').find($('.oddRow').find('div.even')), $('.player2').find($('.evenRow').find('div.odd')));

$player1.append($('<img>').attr('src', 'images/blk.jpg'));
$player2.append($('<img>').attr('src', 'images/wht.jpg'));

// console.log($player2);
//===PIECES:  ===


// Initially all pieces in play = player1 and player2 hands... so technically these arrays already exist, just give them a js variable...
// const $piecesInPlay


// player1 [array of all of p1's pieces to apply evalution to...]''

// Is there any advantage to having these as arrays vs an objects??

//====ON CLICK EVENTS HERE

  ($player2).on('click',(event)=>{
     validateSelection($player2, event.currentTarget);
       ($player2).off();//<<< NEED TO BE ABLE TO TOGGLE SELECT -DESELECCT IF PLYAER CHANGES MIND!!!

     ($($openSquares)).on('click',(event)=>{
          selectDestination();

     })
     // selectPiece();

  });
  // console.log( $.inArray(event.currentTarget, player2));
     // let x = event.currentTarget;
     // let y = player2[0];
     // return x === y;
     // console.log(x); console.log(y); console.log(x===y);


      // let z = $(event.currentTarget);
      // let a = $(player2[0]);
     // console.log(z); console.log(a); console.log(a===z);
     // WHY DOESN'T THIS WORK???




// How should selection be limited?  Based on Turns  So first I need to establish that its player 1's turn.
//Then i need  that player to be passed through a parameter  and it's peices selected/ turned ON.
//Then i need the peice clicked to be checked to ensure that they are in the players set of playable peices
  // $('img').on('click', selectDestination);
//Destination must be Nested... reassign img listener...

// Two options, place event listener on ALL squares then run allowables
// Place event listerns on SOME squares... then run allowables
//if THE listener is on all squares you can make alerts for red squared moves...
// This would require the same logic to limit squares in the first place so mght as well build that logic..
//...time to create variables for playable spaces.

//The ONLY way to do this is via objects or arrays...

// May Likely result in a change to the player piece staging portion of the code.
})






//TO DO! Next

// BUILD GAME LOGIC
    //10. Players Turn...
    //11. SELECT PIECE event.target/currentTarget...
//<<< NEED TO BE ABLE TO TOGGLE SELECT -DESELECCT IF PLYAER CHANGES MIND!!!
    //12.    SELECT DESTINATION div event.target/currentTarget...
    // BUILD Evaluation LOGIC
    //13. BUILD Move Piece Function. (is this separate from a jump function?)
    //14. BUILD REMOVE Piece Function.
    //15. Map Game Play
    //*** special considerations for JUMPS! - Jumps ONLY have ONE option for moving NOT TWO! - Maybe best to run the BLANKS TEST 1ST! To eliminate any possibility of moving at all or move on to the LEAST possible options possibility of  jumping.
    //special considerations for boundaries! - any square along the sides of the board ONLY has ONE option for moving, NOT tow

    // GOAL - Condition FLOW should be structured to progress as follows:
    //   From  zero possibilities for moves to ONE possibility moves to TWO possibility moves.
   //        ...maybe run border check algorithm first... and separate? as opposed to having it built in to the normal evaluation function...

// *** FIX CSS Squares move when window shrinks.





//DONE!
//1.Build Board. 8x8
//
// 1.container.
// 2.player Divs
// 3.Row Divs
// 4.Square Divs
// 5. Append correct Rows to Player Divs
// 6. Import and assign Player images  ...could do this in board build
// 7. !!!!CRITICAL FIX ROW COUNT! WILL CHANGE ALL OTHER EVENTS :/
//8. ADD EVENT HANDELERS Click img OR div... PUT it ON the div so the img inherits it? or limit to the img

// random comments


// Player 1 /Player 2: oddRow evensquares Nested For Loop?  for rowOdd in Rows <=3
//        *** can jquery objects be treated  like regular objects
//   oddRow.even??  WOULD need to create an object like arrray????? might not be worth the time invested.
// PARENT/CHILDREN!!!  How can you leverage this relationship??... children would be in an array... loop through next sibling...
//object. (children.attribute(.id))?

//Why I'm currently adding the event listener to every square:
// For the current case, I will leave open the possibilty of adding an (annoying) alert function later assuming there's a player may have never played checkers before and will not know that the red squares are not playable...  * May change my mind later if I find this to be absolutely unecesary and unlikely, since the game will come with instructions after all. May be needed for game play....


//PLAYER SETUP version 1
// $('.player1').find($('.oddRow')).find('div.even').append($('<img>').attr('src', 'images/wht.jpg'));
// $('.player1').find($('.evenRow')).find('div.odd').append($('<img>').attr('src', 'images/wht.jpg'));
//
// $('.player2').find($('.oddRow')).find('div.even').append($('<img>').attr('src', 'images/blk.jpg'));
// $('.player2').find($('.evenRow')).find('div.odd').append($('<img>').attr('src', 'images/blk.jpg'));

// ====
//
// $('.player2').find($('.oddRow')).find('div.even')
