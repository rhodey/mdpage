const fs = require('fs')
const path = require('path')
const markdownit = require('markdown-it')
const md = markdownit()
const JSDOM = require('jsdom').JSDOM

module.exports = async function render(argv) {
  // parse markdown
  let input = argv._[0]
  input = fs.readFileSync(input, 'utf8')
  input = md.render(input)

  // custom index.html or default
  let index = argv.i
  if (!index) { index = path.resolve(__dirname, 'index.html') }

  // parse index.html
  index = fs.readFileSync(index, 'utf8')
  index = new JSDOM(index)

  // set <title> if using default index.html
  if (!argv.i) {
    let title = new JSDOM(input)
    title = title.window.document.querySelector('h1')
    title = title ? title.innerHTML : ''
    index.window.document.querySelector('title').innerHTML = title
  }

  // custom select or default
  let select = argv.s
  if (!select) { select = 'body' }

  // add markdown to target
  const target = index.window.document.querySelector(select)
  target.innerHTML = `\n${input}`

  // render pretty
  let html = index.serialize().split("\n")
  html = html.filter((line) => line.trim().length > 0)
  html = html.join("\n")
  process.stdout.write(html)
}
