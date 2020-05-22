const longest = (arr) => {

    const max = (arr) => {
        var arrnew = []
        for (i=0 ; i<arr.length ; i++) {
            arrnew[i] = arr[i].toString()
        }
    
        var narr = []
        for (i=0 ; i<arrnew.length ; i++) {
            var set = 0
            for (j=0 ; j<arrnew.length ; j++) {
                if (arrnew[i] < arrnew[j]) {
                    set++
                }
            }
            narr[set] = arrnew[i]
        }
    
        for (k=0 ; k<narr.length ; k++) {
            for (i=0 ; i<narr.length ; i++) {
                if (i !== narr.length - 1 && narr[i][0] === narr[i+1][0]){
                    if (narr[i].length > narr[i+1].length) {
                        var tempor = narr[i]
                        narr[i] = narr[i+1]
                        narr[i+1] = tempor
                    }
                }
            }
        }
        return narr
    }

    var maxposb = max(arr)
    var minposb = []
    for (i=0 ; i<maxposb.length ; i++) {
        minposb[i] = maxposb[maxposb.length-1-i]
    }

    const numb = (arr) => {
        var string = ''
        arr.forEach(item => {
            string += item
        })
        var numb = parseInt(string)
        return numb
    }

    return numb(maxposb) - numb(minposb)
}

var input1 = [1,2,3]
var input2 = [10,1,100]
var input3 = [100,97,23,1]
var input4 = [9041,376,5,10]
console.log(longest(input1))
console.log(longest(input2))
console.log(longest(input3))
console.log(longest(input4))