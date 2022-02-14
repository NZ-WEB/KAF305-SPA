
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let result = 0;

rl.question('', function (a) {
  rl.question('', function (b) {
    rl.question('', function (c) {
      rl.question('', function (d) {
        rl.question('', function (e) {
          rl.question('', function (f) {
            rl.question('', function (g) {
              rl.question('', function (h) {
                rl.question('', function (i) {
                  rl.question('', function (j) {
                    var glasses = new Array(10);

                    glasses[0] = Number.parseInt(a);
                    glasses[1] = Number.parseInt(b);
                    glasses[2] = Number.parseInt(c);
                    glasses[3] = Number.parseInt(d);
                    glasses[4] = Number.parseInt(e);
                    glasses[5] = Number.parseInt(f);
                    glasses[6] = Number.parseInt(g);
                    glasses[7] = Number.parseInt(h);
                    glasses[8] = Number.parseInt(i);
                    glasses[9] = Number.parseInt(j);

                    if (glasses.includes(NaN)) {
                      console.log("Every item must be integer");
                      return;
                    }

                    let m = glasses.length;

                    let sum = glasses.reduce( function( total, num ){
                      return total + num;
                    });

                    let v = sum / m;

                    for( let i = 0; i < m; i++ ){
                      if( glasses[i] > v ){
                        for( let j = 0; j < m; j++ ){
                          if( glasses[j] < v ){
                            if( glasses[i] > v ){
                              superFuse( i, j );
                            }
                            else{
                              break;
                            }
                          }
                        }
                      }
                    }

                    function superFuse( i, j ){
                      let surplus = glasses[i] - v;
                      let deficit = v - glasses[j];
                      if( surplus > deficit ){
                        glasses[i] = glasses[i] - deficit;
                        glasses[j] = glasses[j] + deficit;
                        result = i + 1;
                      }
                      else{
                        glasses[i] = glasses[i] - surplus;
                        glasses[j] = glasses[j] + surplus;
                      }
                    }
                    rl.close();
                  });
                });
              });
            });
          });
        });
      });
    });
  });
});


rl.on('close', function () {
  var res = result;
  process.stdout.write(res.toString())
  process.exit(0);
});
