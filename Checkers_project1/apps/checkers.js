// console.log('test');
// console.log($);

// ====ON LOAD & ON CLICK EVENTS HERE====
$(()=>{

    // Creates squares, used the row count * 8 to get to next row count + square count within row to get to square counts.
      $('body').append($('<container>'));
       const $player1 =$('container').append($('<div>').addClass('player1'));
       const $player2 =$('container').append($('<div>').addClass('player1'));

        for (i=0; i<8; i++){
          $player1.append($('<div>').addClass('row').addClass('row'+(i+1)));
          for(j=1; j<=8; j++){
              $('.row'+(i+1)).append($('<div>').addClass('square').attr('id',8*i+j));
          }
        }










})


// ====FUNCTIONS HERE====

//1.Build Board. 8x8
//
// 1.container.
// 2.player Divs
// 3.Row Divs
// 4.Square Divs
