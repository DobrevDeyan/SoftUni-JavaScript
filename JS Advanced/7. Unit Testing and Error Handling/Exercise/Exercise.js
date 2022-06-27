// 1. Request validator
function requestValidator(object) {
  const validMethods = ["GET", "POST", "DELETE", "CONNECT"];
  const validVersions = ["HTTP/0.9", "HTTP/1.0", "HTTP/1.1", "HTTP/2.0"];
  const validURI = /^[\w.]+$/;
  const invalidMessage = /[<>\\&'"]/;

  if (!object.method || !validMethods.includes(object.method)) {
    throw new Error(`Invalid request header: Invalid Method`);
  }
  if (!object.uri || object.uri === "" || !validURI.test(object.uri)) {
    throw new Error(`Invalid request header: Invalid URI`);
  }
  if (!object.version || !validVersions.includes(object.version)) {
    throw new Error(`Invalid request header: Invalid Version`);
  }
  if (object.message === undefined || invalidMessage.test(object.message)) {
    throw new Error(`Invalid request header: Invalid Message`);
  }

  // Second solution

  //     const props = {
  //       method: {
  //         isInvalid: () =>
  //           validMethods.includes(obj.method) === false ? true : false,
  //       },
  //       uri: {
  //         isInvalid: () => (validURI.test(obj.uri) ? false : true),
  //       },
  //       version: {
  //         isInvalid: () =>
  //           validVersions.includes(obj.version) === false ? true : false,
  //       },
  //       message: {
  //         isInvalid: () => (invalidMessage.test(obj.message) ? true : false),
  //       },
  //     };

  //     for (let prop of Object.keys(props)) {
  //       const name = prop === "uri" ? prop.toUpperCase(): prop.charAt(0).toUpperCase() + prop.slice(1);
  //       if (obj[prop] === undefined || props[prop].isInvalid()) {
  //         throw new Error(`Invalid request header: Invalid ${name}`);
  //       }
  //     }

  return object;
}
// console.log(
//   requestValidator({
//     method: "GET",
//     uri: "svn.public.catalog",
//     version: "HTTP/1.1",
//     message: "",
//   })
// );
// console.log(
//   requestValidator({
//     method: "OPTIONS",
//     uri: "git.master",
//     version: "HTTP/1.1",
//     message: "-recursive",
//   })
// );
// console.log(
//   requestValidator({
//     method: "POST",
//     uri: "home.bash",
//     message: "rm -rf /*",
//   })
// );

// 2. Even or odd

function isOddOrEven(string) {
  if (typeof string !== "string") {
    return undefined;
  }
  if (string.length % 2 === 0) {
    return "even";
  }
  return "odd";
}

// 3 . Char Lookup
function lookupChar(string, index) {
  if (typeof string !== "string" || !Number.isInteger(index)) {
    return undefined;
  }
  if (string.length <= index || index < 0) {
    return "Incorrect index";
  }
  return string.charAt(index);
}

// 4 . math Enforcer

let mathEnforcer = {
  addFive: function (num) {
    if (typeof num !== "number") {
      return undefined;
    }
    return num + 5;
  },
  subtractTen: function (num) {
    if (typeof num !== "number") {
      return undefined;
    }
    return num - 10;
  },
  sum: function (num1, num2) {
    if (typeof num1 !== "number" || typeof num2 !== "number") {
      return undefined;
    }
    return num1 + num2;
  },
};

module.exports = { isOddOrEven, lookupChar, mathEnforcer };
