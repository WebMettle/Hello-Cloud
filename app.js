//
// Copyright (c) 2025 by WebMettle Systems.
//

import express from 'express';
import createHomepageTemplage from './views/index.js';
import getWhen from './views/when.js';

const app = express();
app.use(express.urlencoded( {extended: false} ));
app.use(express.static('public'));

//
// Routes.
//

app.get('/', (req, res) => {
   res.send(createHomepageTemplage());
});

app.get('/when', (req, res) => {
   res.send(getWhen());
});

app.listen(3000, () => {
   console.log('App running on port 3000...');
});
