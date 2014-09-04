var slice = Array.prototype.slice

try {
  slice.call((document.body || document.documentElement).childNodes)
} catch (e) {
  shimSlice()
}

function shimSlice() {
  Array.prototype.slice = function () {
    try {
      return slice.apply(this, arguments)
    } catch (e) {
      var arr = copyToArray(this)
      return slice.apply(arr, arguments)
    }
  }
}

function copyToArray(nodelist) {
  var arr = new Array(nodelist.length)
  for (var i = 0, len = nodelist.length; i < len; i++)
    arr[i] = nodelist[i]
  return arr
}