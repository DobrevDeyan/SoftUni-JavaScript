function solve(area, volume, input) {
  return JSON.parse(input).map((item) => ({
    area: area.apply(item),
    volume: volume.apply(item),
  }));

  // const data = JSON.parse(input);

  // const resultArr = [];
  // for (let item of data) {
  //   const cubeArea = area.apply(item);
  //   const cubeVolume = volume.apply(item);
  //   resultArr.push({ area: cubeArea, volume: cubeVolume });
  // }
  // return resultArr;
}

function area() {
  return Math.abs(this.x * this.y);
}
function volume() {
  return Math.abs(this.x * this.y * this.z);
}
// console.log(
//   solve(
//     area,
//     volume,
//     `[
//   {"x":"10","y":"-22","z":"10"},
//   {"x":"47","y":"7","z":"-5"},
//   {"x":"55","y":"8","z":"0"},
//   {"x":"100","y":"100","z":"100"},
//   {"x":"55","y":"80","z":"250"}
//   ]`
//   )
// );



