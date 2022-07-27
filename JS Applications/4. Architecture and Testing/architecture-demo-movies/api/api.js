const host = "http://localhost:3030"

async function request(url, options) {
  try {
    const response = await fetch(host + url, options)

    if (response.ok !== true) {
      // check if the response is 403 (server not responding), otherwise we can lock the user if server is not available
      if (response.status == 403) {
        sessionStorage.removeItem("userData")
        // must redirect to home or login
      }
      const error = await response.json()
      throw new Error(error.message)
    }

    if (response.status == 204) {
      // 204 -> empty response (no JSON)
      return response
    } else {
      //   const data = await response.json()
      //   return data
      // or if we do not do anything with the data:
      return response.json() // returns promise / we may not await since func is async, can be awaited at the source
    }
  } catch (err) {
    alert(err.message)
    throw err // throw error again in order the function who calls the request() can be notified and stop execution
  }
}
function createOptions(method = "get", data) {
  const options = {
    method,
    headers: {},
  }

  if (data !== undefined) {
    options.headers["Content-Type"] = "application/json"
    options.body = JSON.stringify(data)
  }
  const userData = JSON.parse(sessionStorage.getItem("userData"))
  if (userData !== null) {
    options.headers["X-Authorization"] = userData.token
  }

  return options
}
async function get(url) {
  return request(url, createOptions())
}
async function post(url, data) {
  return request(url, createOptions("post", data))
}
async function put(url, data) {
  return request(url, createOptions("put", data))
}
async function del(url) {
  return request(url, createOptions("delete"))
}
async function login(email, password) {
  const response = await request(
    "/users/login",
    createOptions("post", { email, password })
  )
  const userData = {
    email: response.email,
    id: response._id,
    token: response.accessToken,
  }
  sessionStorage.setItem("userData", JSON.stringify(userData))
}
async function register(email, password) {
  const response = await request(
    "/users/register",
    createOptions("post", { email, password })
  )
  const userData = {
    email: response.email,
    id: response._id,
    token: response.accessToken,
  }
  sessionStorage.setItem("userData", JSON.stringify(userData))
}
async function logout() {
  await request("/users/logout", createOptions())
  sessionStorage.removeItem("userData")
  // sessionStorage.clear() is also usable
}
export { get, post, put, del, login, register, logout }
