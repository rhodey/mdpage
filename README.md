# mdpage
Small utility built around [markdown-it](https://www.npmjs.com/package/markdown-it)

## Usage
+ Mdpage renders the input to HTML and adds it to \<body\>
+ Pass -i index.html if you have an index.html file with for example css to include
+ Pass -s with an html selector such as #text to place the markdown inside the element with id=text

```
npm install -g @rhodey/mdpage
mdpage README.md > readme.html
mdpage README.md -i index.html > readme.html
mdpage README.md -i index.html -s "#text" > readme.html
```

## License
MIT
