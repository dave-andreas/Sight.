// Record is an array containing the following strings and its length is 1 ~ 100,000. v

// Here is a description of the string in the record.
// - All users are separated by [user ID]. v
// - [User ID] enters the chat with [Nickname] - "Enter [User ID] [Nickname]" (ex. "Enter uid1234 Muzi") v
// - [User ID] leaves the chat - "Leave [User ID]" (ex. "Leave uid1234") v
// - [User ID] changes nickname to [Nickname] - "Change [User ID] [Nickname]" (ex. "Change uid1234 Muzi") v
// - The first word is either Enter, Leave, or Change. v
// - Each word is separated by a space (v) and consists of only uppercase letters, lowercase letters, and numbers. (x)
// - The user ID and nickname distinguish between uppercase and lowercase letters.
// - The length of the user ID and nickname is 1 ~ 10.
// - There is no wrong input such as an user who left the chat is changing their nickname.

// record:
// ['Enter 12 David', 'Leave 12', 'Enter 34 Roy', 'Enter 56 Andreas', 'Change 34 Aldo', 'Enter 12 Dave', 'Change 56 Andre', 'Leave 56']
// ["Enter uid1234 Muzi", "Enter uid4567 Prodo", "Leave uid1234", "Enter uid1234 Prodo", "Change uid4567 Ryan"]

// answer:
// ['Dave came in.', 'Dave has left.', 'Aldo came in.', 'Andre came in.', 'Dave came in.', 'Andre has left.']
// ["Prodo came in.", "Ryan came in.", "Prodo has left.", "Prodo came in."]

// var contoh = ['Enter 12 David', 'Leave 12', 'Enter 34 Roy', 'Enter 56 Andreas', 'Change 34 Aldo', 'Enter 12 Dave', 'Change 56 Andre', 'Leave 56']

// function solution (record) {
//     var err = ''
//     var newrec = []
    
//     record.forEach(record => {
//         newrec.push(record.split(' '))
//     });
    
//     if (newrec.length > 100000 || newrec.length === 0) { // checking input
//         err = 'record length must between 1 - 100000'
//         console.log(newrec.length)
//     }

//     newrec.forEach(newrec => { // checking input
//         if (newrec[0] === 'Enter' || newrec[0] === 'Change') {
//             if (!(newrec[1].length > 0 && newrec[1].length < 11 && newrec[2].length > 0 && newrec[2].length < 11)) {
//                 err = 'some record has invalid input'
//             }
//         } else if (newrec[0] === 'Leave') {
//             if (!( newrec[1].length > 0 && newrec[1].length < 11)) {
//                 err = 'some record has invalid input'
//             }
//         } else if (newrec.length === 1) {
//             err = 'some record has invalid input'
//         } else {
//             err = 'some record has invalid input'
//         }
//     })

//     newrec.forEach(rec => { // to make every 'Leave' record have a latest nickname
//         if (rec[0] === 'Leave') {
//             newrec.forEach(rec2 => {
//                 if (rec[1] === rec2[1] && (rec2[0] === 'Enter' || rec2[0] === 'Change')) {
//                     rec[2] = rec2[2]
//                 }
//             })
//         }
//     })

//     var x = newrec

//     newrec.forEach(rec => { // to update every record's nickname
//         if (rec[0] === 'Enter' || rec[0] === 'Change') {
//             x.forEach(x => {
//                 if (rec[1] === x[1]) {
//                     rec[2] = x[2]
//                 }
//             })
//         }
//     })

//     function jawab (rec) { // to convert record become expected display
//         var name = rec[2]
//         var status = rec[0] === 'Enter' ? ' came in.' : ' has left.'
//         return `${name+status}`
//     }

//     var answer = []

//     newrec.forEach(rec => {
//         if (rec[0] !== 'Change') {
//             answer.push(jawab(rec))
//         }
//     })

//     if (err) {
//         return err
//     }
//     return answer // final answer contain expected display
// }
// console.log(solution(contoh))

// ==============================================================================================================================================================

var y = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
console.log(y.length)

var N = 6
var users = [2,1,5,2,4,3,3,1,1]
var answer = [3,4,2,1,5]

function solution (N,users) {
    var err = ''
    if (!(N >= 1 && N <= 500)) {
        err = 'N must between 1 - 500'
    } else if (!(users.length >= 1 && users.length <= 200000)) {
        err = 'users length must between 1 - 200000'
    }

    users.forEach(users => {
        if (users > (N+1) || users < 1) {
            err = 'some users has invalid input'
        }
    })

    var rate = []
    for (i=1 ; i<=N ; i++) {
        var curent = 0
        var total = 0
        for (j=0 ; j<users.length ; j++) {
            if (users[j] === i) {
                curent += 1
                total += 1
            } else if (users[j] > i) {
                total += 1
            }
        }
        if ((curent/total) >= 0 && (curent/total) <=1) {
            rate.push(curent/total)
        } else {
            rate.push(0)
        }
    }
    // index of rate as a stage, value each index is failure rate

    var rank = []
    for (i=rate.length-1 ; i>-1 ; i--) {
        var posisi = 0
        for (j=0 ; j<rate.length ; j++) {
            if (rate[i] > rate[j]) {
                posisi += 1
            }
        }
        var pos = rate.length - 1 - posisi
        rank[i] = pos
    }
    // index of rank as a stage, value each index is stage's initial position

    var answer = []
    for (i=rank.length-1 ; i>-1 ; i--) {
        var pos = rank[i]
        for (j=0 ;  ; j++) {
            if (answer[pos]) {
                pos -=1
            } else {
                break
            }
        }
        answer[pos] = i+1
    }

    if (err) {
        return err
    } else {
        return answer // as final answer
    }
}

console.log(solution(N,users))