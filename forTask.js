const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const input = [];

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
                    rl.question('', function (k) {
                      rl.question('', function (l) {
                        rl.question('', function (m) {
                          input[0] = a;
                          input[1] = b;
                          input[2] = c;
                          input[3] = d;
                          input[4] = e;
                          input[5] = f;
                          input[6] = g;
                          input[7] = h;
                          input[8] = i;
                          input[9] = j;
                          input[10] = k;
                          input[11] = l;
                          input[12] = m;
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
    });
  });
});

rl.on('close', function () {
  const results = [];
  const points = {};

  for (let i = 1; i < input.length; i++) {
    const [comd, x, y] = input[i].split(' ');

    if (comd === 'A') {
      if (!points[x]) {
        points[x] = new Set();
      }
      points[x].add(y);
    }
    if (comd === 'D') {
      points[x].delete(y);
    }
    if (comd === 'Q') {
      results.push('-1');
      const axisX = Object.keys(points);

      for (let i = 0; i < axisX.length; i++) {
        let leftSum = 0;
        let rightSum = 0;

        for (let j = 0; j < i + 1; j++) {
          leftSum += points[axisX[j]].size;
        }
        for (let j = i + 1; j < axisX.length; j++) {
          rightSum += points[axisX[j]].size;
        }
        if (leftSum === rightSum) {
          results[results.length - 1] = axisX[i];
          break;
        }
      }
    }
  }
  const res = results.join('\n');

  process.stdout.write(res.toString());
  process.exit(0);
});
