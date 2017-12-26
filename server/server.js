/*jshint esversion: 6 */
const path = require('path'),
  publicPath = path.join(__dirname, '../public'),
  express = require('express'),
  port = process.env.PORT || 3000;

let app = express();
app.use(express.static(publicPath));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
