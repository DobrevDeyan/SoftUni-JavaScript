// 1. Request validator
function validator(obj) {
  const validMethods = ["GET", "POST", "DELETE", "CONNECT"];
  const validVersions = ["HTTP/0.9", "HTTP/1.0", "HTTP/1.1", "HTTP/2.0"];
  const validURI = /^[\w.]+$/;
  const invalidMessage = /[<>\\&'"]/;

  const props = {
    method: {
      isInvalid: () =>
        validMethods.includes(obj.method) === false ? true : false,
    },
    uri: {
      isInvalid: () => (validURI.test(obj.uri) ? false : true),
    },
    version: {
      isInvalid: () =>
        validVersions.includes(obj.version) === false ? true : false,
    },
    message: {
      isInvalid: () => (invalidMessage.test(obj.message) ? true : false),
    },
  };

  for (let prop of Object.keys(props)) {
    const name =
      prop === "uri"
        ? prop.toUpperCase()
        : prop.charAt(0).toUpperCase() + prop.slice(1);
    if (obj[prop] === undefined || props[prop].isInvalid()) {
      throw new Error(`Invalid request header: Invalid ${name}`);
    }
  }

  return obj;
}
// validator({
//   method: "GET",
//   uri: "svn.public.catalog",
//   version: "HTTP/1.1",
//   message: "",
// });
// validator({
//   method: "OPTIONS",
//   uri: "git.master",
//   version: "HTTP/1.1",
//   message: "-recursive",
// });
// validator({
//   method: "POST",
//   uri: "home.bash",
//   message: "rm -rf /*",
// });
// 2. Even or odd
