const express = require('express')
const app = express()
const cors = require('cors')
const { createProxyMiddleware } = require('http-proxy-middleware')

const apiUrl = 'https://api.stocktwits.com/api/2/streams/symbol'
const proxy = createProxyMiddleware({
  target: apiUrl,
  changeOrigin: true,
  onProxyReq: (proxyReq, req, res) => {
    proxyReq.path = `${apiUrl}/${req.query.q}.json` // Proxy server forwards request to StockTwits: https://api.stocktwits.com/api/2/streams/symbol/spot.json
  }
})

app.set('port', process.env.PORT || 5001)
app.use(cors())
app.use(proxy)

app.listen(app.get('port'), () => {
  console.log('It is Allllivveee! on PORT', app.get('port'))
})
