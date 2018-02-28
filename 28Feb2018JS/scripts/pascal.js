var numTiers = 100,
    triangle, 
    start, 
    stop;

/**
*
* First version uses recursion
*
*/

function pascalRecursive(n, a) {

  if (n < 2) return a; // We already have the top row

  var prevTier = a[a.length-1];
  var curTier = [1];

  for (var i = 1; i < prevTier.length; i++) {
    curTier[i] = prevTier[i] + prevTier[i-1];
  }
  curTier.push(1);
  a.push(curTier);

  return pascalRecursive(n-1, a);
}

start = new Date().getMilliseconds();
var triangle = pascalRecursive(numTiers, [[1]]);
stop = new Date().getMilliseconds();
executionTime = stop - start;
console.log('Execution time Recursive: ' + executionTime + '\n');

/**
*
* Second version is simpler, but slower
*
*/

function pascalSimple(numTiers) {

  var triangle = [
    [1]
  ],
  tier;

  for (var j = 0; j < numTiers-1; j++) {
    tier = [1];
    for (var k = 1; k < triangle[j].length; k++) {
      tier[k] = triangle[j][k] + triangle[j][k-1];
    }
    tier.push(1);
    triangle.push(tier);
  }

  return triangle;
}

start = new Date().getMilliseconds();
var triangle = pascalSimple(numTiers);
stop = new Date().getMilliseconds();
executionTime = stop - start;
console.log('Execution time Simple: ' + executionTime + '\n');