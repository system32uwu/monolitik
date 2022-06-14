/** @type {import('next').NextConfig} */
// see https://github.com/martpie/next-transpile-modules#readme
const withTM = require('next-transpile-modules')(['ui'])

module.exports = withTM({
  reactStrictMode: true,
  env: {}
})
