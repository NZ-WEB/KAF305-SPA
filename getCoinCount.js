const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let N, K, M;

    rl.question('', function (data) {

      data = data.split(' ');

      if (data.length === 3) {
        N = Number.parseInt(data[0]);
        K = Number.parseInt(data[1]);
        M = Number.parseInt(data[2]);
      }

      rl.close();
    });


function getCoinCount(N = 0, K = 0, M = 0) {
  if (M === 0 || K === 0 || N === 0) {
    return 0;
  }

  if (M > K || K > N) {
    return 0;
  }

  let result = 0;
  count(N, K, M);

  function count(N, K, M) {
    if (N < K) {
      return result;
    }

    result += Math.trunc(K / M);
    N += K % M;

    return count(N - K, K, M);
  }

  return result;
}

rl.on('close', function () {
  const res = getCoinCount(N, K, M);
  process.stdout.write(res.toString());
  process.exit(0);
});






