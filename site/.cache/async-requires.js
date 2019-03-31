// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---cache-dev-404-page-js": () => import("/Users/PaigeWilliams/Desktop/gatsby-theme/site/.cache/dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-index-mdx": () => import("/Users/PaigeWilliams/Desktop/gatsby-theme/site/src/pages/index.mdx" /* webpackChunkName: "component---src-pages-index-mdx" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "/Users/PaigeWilliams/Desktop/gatsby-theme/site/.cache/data.json")

