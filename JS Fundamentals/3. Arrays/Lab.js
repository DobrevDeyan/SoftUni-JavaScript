function sumFirstLastArrayElement(arr) {
    let first = arr[0];
    let last = arr[arr.length-1];
    console.log(first+last);
}
// sumFirstLastArrayElement([20, 30, 40]);
// sumFirstLastArrayElement([10, 17, 22, 33]);
// sumFirstLastArrayElement([11, 58, 69]);



function dayOfWeek(num) {
    let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    if (num >= 1 && num <= 7){
        switch (num) {
            case 1:
                console.log("Monday");
                break;
            case 2:
                console.log("Tuesday");
                break;
            case 3:
                console.log("Wednesday");
                break;
            case 4:
                console.log("Thursday");
                break;
            case 5:
                console.log("Friday");
                break;
            case 6:
                console.log("Saturday");
                break;
            case 7:
                console.log("Sunday");
                break;
        }
    } else {
        console.log("Invalid day!");
    }
}
// dayOfWeek(3);
// dayOfWeek(6);
// dayOfWeek(11);



function reverseArrayOfNumbers(n, arr) {
    let newArray = [];
    for (let i = 0; i < n; i++){
     newArray.push(arr[i]);
    }
    let result = "";
    for (let i = newArray.length-1; i >= 0; i--){
        result+=newArray[i] + " ";
    }
    console.log(result);
}
// reverseArrayOfNumbers(3, [10, 20, 30, 40, 50]);
// reverseArrayOfNumbers(4, [-1, 20, 99, 5]);
// reverseArrayOfNumbers(2, [66, 43, 75, 89, 47]);



function reverseArrayOfStrings(arr) {
    let result = "";
    for (let i = arr.length-1; i >= 0; i--){
        result += arr[i] + " ";
    }
    console.log(result.toString());
}
// reverseArrayOfStrings(['a', 'b', 'c', 'd', 'e']);
// reverseArrayOfStrings(['abc', 'def', 'hig', 'klm', 'nop']);
// reverseArrayOfStrings(['33', '123', '0', 'dd']);



function sumEvenNumbers(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = Number(arr[i]);
    }
    let sum = 0;
    for (let arrElement of arr) {
        if (arrElement % 2 === 0) {
            sum += arrElement;
        }
    }
    console.log(sum);
}
// sumEvenNumbers(['1','2','3','4','5','6']);
// sumEvenNumbers(['3','5','7','9']);
// sumEvenNumbers(['2','4','6','8','10']);



function evenOddSubtraction(arr){
   for (let i = 0; i < arr.length; i++){
       arr[i] = Number(arr[i]);
   }
   let even = 0;
   let odd = 0;
    for (let number of arr) {
        if (number % 2 === 0){
            even += number;
        } else {
            odd += number;
        }
    }
    console.log(even-odd);
}
// evenOddSubtraction([1,2,3,4,5,6]);
// evenOddSubtraction([3,5,7,9]);
// evenOddSubtraction([2,4,6,8,10]);



function equalArrays(arr1, arr2) {
    let sum = 0;
    for (let i = 0; i < arr1.length; i++) {
        arr1[i] = Number(arr1[i]);
    }
    for (let i = 0; i < arr2.length; i++) {
        arr2[i] = Number(arr2[i]);
    }
    for (let i = 0; i < arr1.length; i++){
        if (arr1[i] !== arr2[i]) {
            console.log(`Arrays are not identical. Found difference at ${i} index.`);
            return;
        }
        sum += Number(arr1[i]);
    }
    console.log(`Arrays are identical. Sum: ${sum}`);
}
// equalArrays(['10','20','30'], ['10','20','30']);
// equalArrays(['1','2','3','4','5'], ['1','2','4','4','5']);
// equalArrays(['1'], ['10']);



function condenseArrToNum(arr) {
    while (arr.length > 1) {
        let condensed = Array(arr.length-1);
        for (let i = 0; i < arr.length - 1; i++){
            condensed[i] = Number(arr[i]) + Number(arr[i + 1]);
        }
        arr = condensed;
    }
    console.log(arr[0]);
}
// condenseArrToNum([2,10,3]);
// condenseArrToNum([5,0,4,1,2]);
// condenseArrToNum([1]);




















