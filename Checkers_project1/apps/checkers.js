// console.log('test');
// console.log($);







// ====FUNCTIONS HERE====

const getEvenOdd = (countEvaluated, outputClass)=>{
      if(countEvaluated%2 === 0){
           return outputClass = 'even';
      }else{
          return outputClass = 'odd';
      }  // determines squareClass2 = odd or even
}








// ====ON LOAD & ON CLICK EVENTS HERE====
$(()=>{

// creates a container,  creates player divs, appends to body
      $('body').append($('<container>'));


      //APPENDS TO PLAYER DIV BUT ORDER MATTERS!!
      const $player1 =$('container').prepend($('<div>').addClass('player1'));
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
            $('.player1').append($('#row'+rowCount));
          }else  if(rowCount>5){
            $('.player2').append($('#row'+rowCount));
            $('container').append($('.player2'));
          }
              // Creates squares 1-8 per row, used the row count * 8 to get to next row count + square count in row to get to square counts.
                for(j=1; j<=8; j++){
                    let squareCount = (rowCount-1)*8+j;
                    squareClass2= getEvenOdd(squareCount, squareClass2);
                    $('#row'+rowCount).append($('<div>').addClass('square').addClass(squareClass2).attr('id',squareCount).text(squareCount));
                }   // creates squares 1-8 in each row ,
        }
        //

// ===PLAYER SET UP
$('.player1').find($('.oddRow')).find('div.even').append($('<img>').attr('src', 'images/wht.jpg'));
$('.player1').find($('.evenRow')).find('div.odd').append($('<img>').attr('src', 'images/wht.jpg'));

$('.player2').find($('.oddRow')).find('div.even').append($('<img>').attr('src', 'images/blk.jpg'));
$('.player2').find($('.evenRow')).find('div.odd').append($('<img>').attr('src', 'images/blk.jpg'));




})


//TO DO! Next
    //8. ADD EVENT HANDELERS Click img OR div... PUT it ON the div so the img inherits it? or limit to the img
// BUILD GAME LOGIC
    //10. SELECT PIECE event.target/currentTarget...
    //11. SELECT DESTINATION div event.target/currentTarget...
    //12. BUILD Evaluation LOGIC
    //13. BUILD Move Piece Function. (is this separate from a jump function?)
    //14. BUILD REMOVE Piece Function.
    //

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


// random comments


// Player 1 /Player 2: oddRow evensquares Nested For Loop?  for rowOdd in Rows <=3
//        *** can jquery objects be treated  like regular objects
//   oddRow.even??  WOULD need to create an object like arrray????? might not be worth the time invested.
// PARENT/CHILDREN!!!  How can you leverage this relationship??... children would be in an array... loop through next sibling...
//object. (children.attribute(.id))?
