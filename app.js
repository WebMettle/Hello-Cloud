//
// Copyright (c) 2025 by WebMettle Systems.
//

import express from 'express';
import createHomepageTemplate from './views/index.js';
import getWhen from './views/when.js';

const app = express();
app.use(express.urlencoded( {extended: false} ));
app.use(express.static('public'));

//
// Routes.
//

app.get('/', (req, res) => {
   res.send(createHomepageTemplate());
});

app.get('/when', (req, res) => {
   res.send(getWhen());
});

const listenPort = process.env.HelloCloudListenPort || 3000

app.listen(listenPort, () => {
   console.log('App running on port ' + listenPort + '...');
});
