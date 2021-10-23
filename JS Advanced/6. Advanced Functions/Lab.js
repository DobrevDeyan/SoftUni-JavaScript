function isArrayTelescopic(array) {
    let result = true;
    let controller = 1;
    let rotations = Math.floor(array.length / 2);

    for (let i = 0; i < rotations; i++) {
        let firstElement = array[0];
        let lastElement = array[array.length - 1];

        if (firstElement === controller && lastElement === controller) {
            array.shift()
            array.pop();
        } else {
            result = false;
        }

        controller++;
    }

    console.log(array);
    console.log(result);
}
isArrayTelescopic([1, 2, 5, 2, 1]);
// Write a method in any programming language you like that is checking whether a given array is "telescopic".
// An array is called telescopic if its outer elements are 1's, then the next inner elements are 2's and so on.
// There is exactly one telescopic array of a given length. Here are the first five telescopic arrays with size 1, 2, 3, 4, 5:

// 1
// 1 1
// 1 2 1
// 1 2 2 1
// 1 2 3 2 1









