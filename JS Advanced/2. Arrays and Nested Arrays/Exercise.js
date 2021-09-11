function printArray(arr, str) {
    console.log(arr.join(str));
}
// printArray(['One', 'Two', 'Three', 'Four', 'Five'], '-');
// printArray(['How about no?', 'I', 'will', 'not', 'do', 'it!'], '_');



function printEveryNthElement(arr, num) {
    return arr.filter((_, i) => i % Number(num) === 0);
}
// printEveryNthElement(['5', '20', '31', '4', '20'], 2);
// printEveryNthElement(['dsa', 'asd', 'test', 'tset'], 2);
// printEveryNthElement(['1', '2', '3', '4', '5'], 6);



function addRemoveElements(arr) {
    // let num = 0;
    // let newArr = [];
    //
    // for (let arrElement of arr) {
    //     num += 1;
    //     if (arrElement === 'add') {
    //         newArr.push(num);
    //     } else if (arrElement === 'remove') {
    //         newArr.pop();
    //     }
    // }
    //
    // if (newArr.length === 0) {
    //     console.log('Empty')
    // } else {
    //     for (let newArrElement of newArr) {
    //         console.log(newArrElement);
    //     }
    // }

    let newArr = [];
    let num = 1;
    let actions = {
        add: x => newArr.push(x),
        remove: () => newArr.pop(),
    }

    arr.forEach(x => actions[x](num++));
    console.log(newArr.length !== 0 ? newArr.join("\n") : "Empty");
}
// addRemoveElements(['add', 'add', 'add', 'add']);
// addRemoveElements(['add', 'add', 'remove', 'add', 'add']);
// addRemoveElements(['remove', 'remove', 'remove']);



function rotateArray(arr, num) {
    for (let i = 0; i < Number(num); i++) {
        arr.unshift(arr.pop());
    }
    console.log(arr.join(' '));
}
// rotateArray(['1', '2', '3', '4'], 2);
// rotateArray(['Banana', 'Orange', 'Coconut', 'Apple'], 15);



function extractIncrSubsequence(arr) {
   return arr.reduce((a, v) => {
        if (v >= (a[a.length-1] || arr[0])) {
            a.push(v);
        }
        return a;
        }, []);
}
// extractIncrSubsequence([1, 3, 8, 4, 10, 12, 3, 2, 24]);
// extractIncrSubsequence([1, 2, 3, 4]);
// extractIncrSubsequence([20, 3, 2, 15, 6, 1]);



function listOfNames(arr) {
    arr = arr.sort((a, b) => a.localeCompare(b));
    arr.forEach((x, i) => console.log(`${i + 1}.${x}`));
}
// listOfNames(["John", "Bob", "Christina", "Ema"]);



function sortingNumbers(arr) {
    // let i = arr.length - 1
    // return arr
    //     .sort((a, b) => a - b)
    //     .reduce((a, v, _, tArr) => {
    //         a.push(v)
    //         a.push(tArr[i--])
    //         return a
    //     }, [])
    //     .slice(0, arr.length)

    let newArray = [];
    let num = 0;

    arr = arr.filter((_, i) => {
        if (i % 2 === 0) {
            num = Math.max(...arr);
        } else {
            num = Math.min(...arr);
        }
        newArray.push(num);
        arr.splice(arr.indexOf(num), 1);
    });

    for (let newArrayElement of newArray) {
        console.log(newArrayElement);
    }
}
sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);






















































