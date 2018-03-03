// console.log('test');
// console.log($);

// ====ON LOAD & ON CLICK EVENTS HERE====
$(()=>{

    // Creates squares, used the row count * 8 to get to next row count + square count within row to get to square counts.
      $('body').append($('<container>'));
      const $player1 =$('container').append($('<div>').addClass('player1'));
      const $player2 =$('container').append($('<div>').addClass('player2'));

    // creates Row & Square Divs
        for (let rowCount=1; rowCount<=8; rowCount++){
//Make this is into a functon that take rowClass or squareClass in as an argument then evaluates...
          if(rowCount%2 === 0){
               rowClass2 = 'even';
          }else{
              rowClass2 = 'odd';
          }  // determines rowClass2 = odd or even


          $('container').append($('<div>').addClass('row').addClass(rowClass2).attr('id','row'+(rowCount+1)));
                // creates rows 1-8



              for(j=1; j<=8; j++){
                  let squareCount = (rowCount-1)*8+j;

                  if(squareCount%2 === 0){
                       squareClass2 = 'even';
                  }else{
                      squareClass2 = 'odd';
                  }  // determines squareClass2 = odd or even


                  $('#row'+(rowCount+1)).append($('<div>').addClass('square').addClass(squareClass2).attr('id',squareCount).text(squareCount));
              }   // creates squares 1-8 in each row ,
        }










})


// ====FUNCTIONS HERE====

//1.Build Board. 8x8
//
// 1.container.
// 2.player Divs
// 3.Row Divs
// 4.Square Divs
