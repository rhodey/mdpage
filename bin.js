#!/usr/bin/env node

const mdpage = require('./')
const minimist = require('minimist')
const argv = minimist(process.argv.slice(2))

mdpage(argv).catch((err) => {
  console.error(err)
  process.exit(1)
})
