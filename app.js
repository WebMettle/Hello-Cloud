//
// Copyright (c) 2025 by WebMettle Systems.
//

import express from 'express';
import createHomepageTemplate from './views/index.js';
import getWhen from './views/when.js';

function logRequest(method, path, ip) {
   const datetimeFormat = { year: 'numeric', month: '2-digit', day: '2-digit',
			    hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
   console.log(method + ' ' + path + ' from ' + ip + ' at ' + new Date().toLocaleString('en-US', datetimeFormat) + '...');
};

const app = express();
app.use(express.urlencoded( {extended: false} ));
app.use(express.static('public'));

//
// Routes.
//

app.get('/', (req, res) => {
   logRequest(req.method, req.path, req.ip);
   res.send(createHomepageTemplate());
});

app.get('/when', (req, res) => {
   logRequest(req.method, req.path, req.ip);
   res.send(getWhen());
});

const listenPort = process.env.HelloCloudListenPort || 3000

app.listen(listenPort, () => {
   console.log('App running on port ' + listenPort + '...');
});
