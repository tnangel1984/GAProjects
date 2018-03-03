// console.log('test');
// console.log($);

// ====VARIABLES HERE====





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
      const $player1 =$('container').append($('<div>').addClass('player1'));
      const $player2 =$('container').append($('<div>').addClass('player2'));

// creates Row & Square Divs
      let squareClass="";
      let rowClass2="";
      let squareClass2="";

              // creates rows 1-8
      for (let rowCount=1; rowCount<=8; rowCount++){
        rowClass2=getEvenOdd(rowCount,rowClass2);
        $('container').append($('<div>').addClass('row').addClass(rowClass2+'Row').attr('id','row'+(rowCount+1)));
            // Creates squares 1-8 per row, used the row count * 8 to get to next row count + square count in row to get to square counts.
              for(j=1; j<=8; j++){
                  let squareCount = (rowCount-1)*8+j;
                  squareClass2= getEvenOdd(squareCount, squareClass2);
                  $('#row'+(rowCount+1)).append($('<div>').addClass('square').addClass(squareClass2).attr('id',squareCount).text(squareCount));
              }   // creates squares 1-8 in each row ,
        }










})






//1.Build Board. 8x8
//
// 1.container.
// 2.player Divs
// 3.Row Divs
// 4.Square Divs
