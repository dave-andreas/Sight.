const sum_deep = (ar,c) => {
    if(ar.length && c) {
        var arr = ar
        var char = c
        var sum = 0
        var level = 1
    
        function other (arr,lvl) {
            var i = 0
            while (i < arr.length) {
                if (typeof(arr[i]) === 'string') {
                    var narr = arr[i].split('')
                    var here = false
                    narr.forEach(item => {
                        if (item === char) {
                            here = true
                        }
                    })
                    if (here) {
                        sum += lvl
                    }
                } else {
                    var level = lvl + 1
                    other(arr[i],level)
                }
                i++
            }
        }
        other(arr,level)
        return sum
    } else {
        return 'false input'
    }
}

var x = ['', ['', ['XXXXX']]]
var y = ['X', [''], ['X'], ['X'], ['Y', ['']], ['X']]
var z = ['X', ['', ['', ['Y'], ['X']]], ['X', ['', ['Y'], ['Z']]]]
var xx = ['AB', ['XY'], ['YP']]
var cr = 'X'
var cr2 = 'Y'

console.log(sum_deep(y))
