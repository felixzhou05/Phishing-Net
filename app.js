const express = require('express');
const bodyParser = require('body-parser');
const xml2js = require('xml2js');

const app = express();
const PORT = 3000;

app.use(bodyParser.text({ type: 'application/xml' }));

app.post('/ml-process', async (req, res) => {
  try {
    const xmlData = req.body;
    const parser = new xml2js.Parser();
    parser.parseString(xmlData, (err, result) => {
      if (err) {
        return res.status(400).send('Invalid XML data');
      }
      // Now you can use 'result' to extract data from the XML
      // Call your PyTorch model here with the extracted data
      // ...
      // Return a response
      res.send('ML process completed');
    });
  } catch (error) {
    res.status(500).send('Internal server error');
  }
});

app.listen(PORT, () => {
  console.log('Server is running on port', PORT);
});

