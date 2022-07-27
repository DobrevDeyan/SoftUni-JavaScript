async function request(url, options) {
  try {
    const response = await fetch(url, options)

    if (response.ok !== true) {
      // check if the response is 403 (server not responding), otherwise we can lock the user if server is not available
      if (response.status == 403) {
        sessionStorage.removeItem("userData")
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
      return response.json() // returns promise / we may not await since func is async, can we awaited at the source
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
  // default method is GET
  return request(url)
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
