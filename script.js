const search = document.querySelector(".search")
const btn = document.querySelector(".btn")
const input = document.querySelector(".input")

// Change the baseURL and url values to test with your API hostname and endpoint for querystring.
const config = (() => {
  const baseURL = "http://yourapihostname.com"
  return {
    baseURL,
    url: `${baseURL}/search`,
  }
})()

function toggleActiveClass(element) {
  element.classList.toggle("active")
}

function setActiveClass(element) {
  element.classList.add("active")
}

// Feel free to modify the fetch url request
async function query(el) {
  let result = el.value
  return await fetch(`${config.url}?property=${result}`)
}

function keyPressed(e) {
  return e.key
}

function main() {
  btn.addEventListener("pointerup", () => {
    if (search.classList.contains("active")) {
      query(input)
    }
    setActiveClass(search)
    input.focus()
  })
  input.addEventListener("keyup", (e) => {
    if (keyPressed(e) == "Enter" || keyPressed(e) == "enter")
      return query(e.target)
  })
}

main()
