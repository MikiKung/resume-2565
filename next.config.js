/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const path = require('path')
module.exports = {
  target: 'serverless',
  exportPathMap: () => ({
    "/": {
      page: "/",
    },
  }),
  // images: {
  //   loader: 'imgix',
  // },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}
