const sum_recursive = (par) => {
    if (par >= 1) {
        var current = [par]
        var sum = 0
        
        while (current.length > 0) {
            var temp = current
            current = []
    
            temp.forEach(item => {
                sum += item
                if (item > 1) {
                    var left = Math.floor(item/2)
                    var right = Math.floor(Math.sqrt(item))
                    current.push(left,right)
                }
            })
        }
        return sum
    } else {
        return 'false input'
    }
}

console.log(sum_recursive(8))
