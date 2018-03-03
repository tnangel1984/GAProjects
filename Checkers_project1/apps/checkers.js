// console.log('test');
// console.log($);

// ====ON LOAD & ON CLICK EVENTS HERE====
$(()=>{

    // Creates squares, used the row count * 8 to get to next row count + square count within row to get to square counts.
      $('body').append($('<container>'));
      const $player1 =$('container').append($('<div>').addClass('player1'));
      const $player2 =$('container').append($('<div>').addClass('player2'));

    // creates Row & Square Divs
        for (i=0; i<8; i++){
          $('container').append($('<div>').addClass('row').addClass('row'+(i+1)));
                // creates rows 1-8

              for(j=1; j<=8; j++){
                  let squareCount = i*8+j;

                  if(squareCount%2 === 0){
                       squareClass2 = 'even';
                  }else{
                      squareClass2 = 'odd';
                  }  // determines squareClass2 = odd or even
console.log(squareClass2);
                  $('.row'+(i+1)).append($('<div>').addClass('square').addClass(squareClass2).attr('id',squareCount));
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
