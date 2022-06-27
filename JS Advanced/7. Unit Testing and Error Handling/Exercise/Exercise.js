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
  //       const name =
  //         prop === "uri"
  //           ? prop.toUpperCase()
  //           : prop.charAt(0).toUpperCase() + prop.slice(1);
  //       if (obj[prop] === undefined || props[prop].isInvalid()) {
  //         throw new Error(`Invalid request header: Invalid ${name}`);
  //       }
  //     }

  return object;
}

module.exports = { requestValidator };

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
