const testNumbers = require('./testNumbers');
const {expect} = require ('chai');

describe ('Test Numbers', () => {


    describe ('sumNumbers', () => {
        it('works with valid numbers', function () {
            expect(testNumbers.sumNumbers(3, 5)).to.equal('8.00');
        });

        it('works with negative numbers', function () {
            expect(testNumbers.sumNumbers(3, -5)).to.equal('-2.00');
        });

        it('works with floating points', function () {
            expect(testNumbers.sumNumbers(1.5555, 0.3333)).to.equal('1.89');
        });

        it('returns undefined with string parameters', function () {
            expect(testNumbers.sumNumbers('1', '2')).to.equal(undefined);
            expect(testNumbers.sumNumbers(1, '2')).to.equal(undefined);
            expect(testNumbers.sumNumbers('1', 2)).to.equal(undefined);
        });

        it('returns undefined with invalid parameters', function () {
            expect(testNumbers.sumNumbers(null, null)).to.equal(undefined);
            expect(testNumbers.sumNumbers(1, null)).to.equal(undefined);
            expect(testNumbers.sumNumbers(null, 2)).to.equal(undefined);
        });
    });

    describe ('numberChecker', () => {
        it('works with odd value', function () {
            expect(testNumbers.numberChecker(1)).to.contain('odd');
        });

        it('works with even value', function () {
            expect(testNumbers.numberChecker(2)).to.contain('even');
        });

        it('works with odd value as string', function () {
            expect(testNumbers.numberChecker('1')).to.contain('odd');
        });


        it('works with even value as string', function () {
            expect(testNumbers.numberChecker('2')).to.contain('even');
        });

        it('works with empty string', function () {
            expect(testNumbers.numberChecker('')).to.contain('even');
        });

        it('should detect invalid parameter', function () {
            expect(() => testNumbers.numberChecker('a')).to.throw();
        });
    });
    
    describe ('averageSumArray', () => {
        it('should works with integers', function () {
            expect(testNumbers.averageSumArray([1, 2, 3])).to.equal(2);
        });

        it('should works with floats', function () {
            expect(testNumbers.averageSumArray([1.5, 2.5, 3.5])).to.equal(2.5);
        });
    });
});


// describe("Test Library functionallity", function() {
//     describe("Test calcPriceOfBook", function () {
//         it("calcPriceOfBook should return 20.00 and year is 1990", function () {
//             let price = 20
//             let expectedResult = `Price of My Title is 20.00`;
//             let actualResult = library.calcPriceOfBook('My Title', 1990);
//             expect(expectedResult).to.equal(actualResult);
//         });
//
//         it("calcPriceOfBook should return descreased price when year is equal to 1980", function () {
//             let expectedResult = `Price of My Title is 10.00`;
//             let actualResult = library.calcPriceOfBook('My Title', 1980)
//             expect(expectedResult).to.equal(actualResult);
//         });
//
//         it("calcPriceOfBook should return descreased price when year is equal to 1979", function () {
//             let expectedResult = `Price of My Title is 10.00`;
//             let actualResult = library.calcPriceOfBook('My Title', 1979);
//             expect(expectedResult).to.equal(actualResult);
//         });
//
//         it("calcPriceOfBook should should throw ex when name is array", function () {
//             assert.throw(() => library.calcPriceOfBook([], 1979))
//             //   expect().to.throw(error);
//         });
//
//         it("calcPriceOfBook should should throw ex when name is undefined", function () {
//             assert.throw(() => library.calcPriceOfBook(undefined, 1979));
//         });
//
//         it("calcPriceOfBook should should throw ex when name is null", function () {
//             assert.throw(() => library.calcPriceOfBook(null, 1979));
//         });
//
//         it("calcPriceOfBook should should throw ex when name is object", function () {
//             assert.throw(() => library.calcPriceOfBook({}, 1979));
//         });
//
//         it("calcPriceOfBook should should throw ex when year is double", function () {
//             assert.throw(() => library.calcPriceOfBook('My Title', 1979.25));
//         });
//
//         it("calcPriceOfBook should should throw ex when year is string", function () {
//             assert.throw(() => library.calcPriceOfBook('My Title', '1979'));
//         });
//
//         it("calcPriceOfBook should should throw ex when year is Nan", function () {
//             assert.throw(() => library.calcPriceOfBook('My Title', NaN));
//         });
//
//         it("calcPriceOfBook should should throw ex when year is undefined", function () {
//             assert.throw(() => library.calcPriceOfBook('My Title', undefined));
//         });
//
//         it("calcPriceOfBook should should throw ex when year is object", function () {
//             assert.throw(() => library.calcPriceOfBook('My Title', {}));
//         });
//
//         it("calcPriceOfBook should should throw ex when year is array", function () {
//             assert.throw(() => library.calcPriceOfBook('My Title', []));
//         });
//     });


//     describe("Test findBook", function() {
//         it("findBook should return success message when book is found", function() {
//             let expectedResult = `We found the book you want.`;
//             let actualResult = library.findBook(['Spiderman', 'Pod igoto'], 'Pod igoto');
//             expect(expectedResult).to.equal(actualResult);
//         });
//
//         it("findBook should throws when array is empty", function() {
//             //test meesage of ex?
//             assert.throw(() => library.findBook([], 'Pod Igoto'));
//         });
//
//         it("findBook should return no found message when book is not found", function() {
//             let expectedResult = `The book you are looking for is not here!`;
//             let actualResult = library.findBook(['Spiderman', 'Pod igoto'], 'Druga kniga');
//             expect(expectedResult).to.equal(actualResult);
//         });
//
//         it("findBook should return no found message when book is not found", function() {
//             let expectedResult = `The book you are looking for is not here!`;
//             let actualResult = library.findBook(['Spiderman', 6], 'Druga kniga');
//             expect(expectedResult).to.equal(actualResult);
//         });
//     });
//
//     describe("Test arrangeTheBooks", function() {
//         it("arrangeTheBooks should return success message when books are below 40", function() {
//             //countShelves = 40
//             let expectedResult = `Great job, the books are arranged.`;
//             let actualResult = library.arrangeTheBooks(35);
//             expect(expectedResult).to.equal(actualResult);
//         });
//
//         it("arrangeTheBooks should return success message when books are exact 40", function() {
//             //countShelves = 40
//             let expectedResult = `Great job, the books are arranged.`;
//             let actualResult = library.arrangeTheBooks(40);
//             expect(expectedResult).to.equal(actualResult);
//         });
//
//         it("arrangeTheBooks should return no success message when books are above 40", function() {
//             //countShelves = 40
//             let expectedResult = `Insufficient space, more shelves need to be purchased.`;
//             let actualResult = library.arrangeTheBooks(41);
//             expect(expectedResult).to.equal(actualResult);
//         });
//
//         it("arrangeTheBooks should throw ex when count is string", function() {
//             assert.throw(() => library.arrangeTheBooks('40'));
//         });
//
//         it("arrangeTheBooks should throw ex when count is string", function() {
//             assert.throw(() => library.arrangeTheBooks('somestring'));
//         });
//
//         it("arrangeTheBooks should throw ex when count is array", function() {
//             assert.throw(() => library.arrangeTheBooks([]));
//         });
//
//         it("arrangeTheBooks should throw ex when count is object", function() {
//             assert.throw(() => library.arrangeTheBooks({}));
//         });
//
//         it("arrangeTheBooks should throw ex when count is double", function() {
//             assert.throw(() => library.arrangeTheBooks(4.50));
//         });
//
//         it("arrangeTheBooks should throw ex when count is negative", function() {
//             assert.throw(() => library.arrangeTheBooks(-5));
//         });
//     });
// });


// describe("Test library", function () {
//
//     describe("Test calcPriceOfBook ", function () {
//         it("incorrect input", function () {
//             expect(() => library.calcPriceOfBook(2, 2)).to.throw('Invalid input');
//         });
//
//         it("incorrect input", function () {
//             expect(() => library.calcPriceOfBook(2, 'a')).to.throw('Invalid input');
//         });
//
//         it("incorrect input", function () {
//             expect(() => library.calcPriceOfBook('a', 2.2)).to.throw('Invalid input');
//         });
//
//         it("incorrect input", function () {
//             expect(() => library.calcPriceOfBook(2, '2')).to.throw('Invalid input');
//         });
//
//         it("incorrect input", function () {
//             expect(() => library.calcPriceOfBook(2, -1)).to.throw('Invalid input');
//         });
//
//         it("year bigger than 1980 return price", function () {
//             expect(library.calcPriceOfBook('a', 1981)).to.equal('Price of a is 20.00');
//         });
//
//         it("year less than 1980 return price", function () {
//             expect(library.calcPriceOfBook('a', 1979)).to.equal('Price of a is 10.00');
//         });
//
//         it("year equal to 1980 return price", function () {
//             expect(library.calcPriceOfBook('a', 1980)).to.equal('Price of a is 10.00');
//         });
//
//     });
//
//     describe("Test findBook", function () {
//         it("arr of book is zero", function () {
//             expect(() => library.findBook([], 'Troy')).to.throw('No books currently available');
//         });
//
//         it("when book is not in the arr", function () {
//             expect(library.findBook(['a'], 'Troy')).to.equal('The book you are looking for is not here!');
//         });
//
//         it("When the book is in the arr", function () {
//             expect(library.findBook(['Troy'], 'Troy')).to.equal('We found the book you want.');
//         });
//
//     });
//
//     describe("АrrangeTheBooks ", function () {
//         it("Number is not integer", function () {
//             expect(() => library.arrangeTheBooks('2')).to.throw('Invalid input');
//         });
//
//         it("Number is not integer", function () {
//             expect(() => library.arrangeTheBooks(2.2)).to.throw('Invalid input');
//         });
//
//         it("Number is negative integer", function () {
//             expect(() => library.arrangeTheBooks(-2)).to.throw('Invalid input');
//         });
//
//         it("Number is negative not integer", function () {
//             expect(() => library.arrangeTheBooks(-2.2)).to.throw('Invalid input');
//         });
//
//         it("When countBooks equal avaible space", function () {
//             expect(library.arrangeTheBooks(40)).to.equal('Great job, the books are arranged.');
//         });
//
//         it("When countBooks is less than avaible space", function () {
//             expect(library.arrangeTheBooks(39)).to.equal('Great job, the books are arranged.');
//         });
//
//         it("When countBooks is more than avaible space", function () {
//             expect(library.arrangeTheBooks(41)).to.equal('Insufficient space, more shelves need to be purchased.');
//         });
//
//     });
//
// });
