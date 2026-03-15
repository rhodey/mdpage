# mdpage
Small cli for [markdown-it](https://www.npmjs.com/package/markdown-it)

Used to publish [lock.host](https://lock.host/) and [hecate.video](https://hecate.video/)

## Usage
+ Mdpage renders the input to HTML and adds it to \<body\>
+ Pass -i index.html if you have an index.html file with for example css to include
+ Pass -s with an html selector such as #text to place the markdown inside the element with id=text
+ All other args used as [markdown-it configs](https://markdown-it.github.io/markdown-it/#MarkdownIt.new)

```
npm install -g @rhodey/mdpage
mdpage README.md > readme.html
mdpage README.md -i index.html > readme.html
mdpage README.md -i index.html -s "#text" > readme.html
mdpage README.md --html true > readme.html (enables html in markdown)
```

## License
Copyright 2026 - mike@rhodey.org

MIT
