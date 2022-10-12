export default heapsPermute
var swap = function (array, pos1, pos2) {
    var temp = array[pos1];
    array[pos1] = array[pos2];
    array[pos2] = temp;
  };
  
  var heapsPermute = function (array, n, results = []) {
    n = n || array.length;
    if (n === 1) {
      results.push(array.slice());
    } else {
      for (var i = 1; i <= n; i += 1) {
        heapsPermute(array, n - 1, results);
        if (n % 2) {
          var j = 1;
        } else {
          var j = i;
        }
        swap(array, j - 1, n - 1);
      }
    }
    return results;
  };
  