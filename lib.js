// Error Handler for HTTP Requests
async function request(url, options) {
  const response = await fetch(url, options);

  if (response.ok != true) {
    const error = await response.json();
    alert(error.message);
    throw new Error(error.message);
  }

  const data = await response.json();
  return data;
}
// Error Handler for HTTP Requests

// Create DOM element
function createElement(type, content, attributes = []) {
  const element = document.createElement(type);

  if (content) {
    element.textContent = content;
  }

  if (attributes.length > 0) {
    element.setAttribute(attributes[0], attributes[1]);
  }

  return element;
}
// Create DOM element

function createCell(nestedTag, props, content) {
  const cell = document.createElement("td");
  const nested = document.createElement(nestedTag);
  for (let prop in props) {
    nested[prop] = props[prop];
  }
  if (content) {
    nested.textContent = content;
  }
  cell.appendChild(nested);
  return cell;
}

function e(type, attributes, ...content) {
  const result = document.createElement(type);

  for (let [attr, value] of Object.entries(attributes || {})) {
    if (attr.substring(0, 2) == "on") {
      result.addEventListener(attr.substring(2).toLocaleLowerCase(), value);
    } else {
      result[attr] = value;
    }
  }

  content = content.reduce((a, c) => a.concat(Array.isArray(c) ? c : [c]), []);

  content.forEach((e) => {
    if (typeof e == "string" || typeof e == "number") {
      const node = document.createTextNode(e);
      result.appendChild(node);
    } else {
      result.appendChild(e);
    }
  });

  return result;
}
