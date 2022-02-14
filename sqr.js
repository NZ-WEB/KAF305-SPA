var N = 3;

var count = 0;

var arr;

var a11, a12, a13,
  a21, a22, a23,
  a31, a32, a33;

// заполняем первую строку
for ( let i = 0; i <= 9; i++ ){
  a11 = i;
  for ( let j = 0; j <= 9; j++ ){
    a12 = j;
    a13 = N - a11 - a12;
    if( (a13 >= 0) && (a13 <= 9) ){
      col_1_create();
    }
  }
}

// заполняем первую колонку
function col_1_create(){
  for( let i = 0; i <= 9; i++ ){
    a21 = i;
    a31 = N - a21 - a11;
    if( (a31 >= 0) && (a31 <= 9) ){
      row_2_create();
    }
  }
}

// заполняем вторую строку
function row_2_create(){
  for( let i = 0; i <= 9; i++ ){
    a22 = i;
    a23 = N - a22 - a21;
    if( (a23 >= 0) && (a23 <= 9) ){
      col_2_create();
    }
  }
}

// заполняем вторую колонку
function col_2_create(){
  a32 = N - a22 - a12;
  if( (a32 >= 0) && (a32 <= 9) ){
    row_3_create();
  }
}

// заполняем третью строку
function row_3_create(){
  a33 = N - a32 - a31;
  if( (a33 >= 0) && (a33 <= 9) ){
    if( (a13 + a23 + a33) == N ){
      //arr = [ [a11, a12, a13], [a21, a22, a23], [a31, a32, a33] ];
      //console.log( arr );
      count++;
    }
  }
}


console.log( N );
