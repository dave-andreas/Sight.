const sum_deep_ch = (ar,c) => {
    if(ar.length && c) {
        var arr = ar
        var char = c.split('')
        var sum = 0
        var level = 1
        var j = 0
    
        function other (arr,lvl) {
            var i = 0
            while (i < arr.length) {
                if (typeof(arr[i]) === 'string') {
                    var narr = arr[i].split('')
                    var here = false
                    narr.forEach(item => {
                        if (item === char[j]) {
                            here = true
                        }
                    })
                    if (here) {
                        sum += (lvl * (j + 1))
                    }
                } else {
                    var level = lvl + 1
                    other(arr[i],level)
                }
                i++
            }
        }
    
        while (j < char.length) {
            other(arr,level)
            j++
        }
    
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

var celeng = ['ABAH', ['CIRCA'], ['CRUMP', ['IRA']], ['ALI']]
var cr3 = 'ACI'

console.log(sum_deep_ch(celeng,cr3))
