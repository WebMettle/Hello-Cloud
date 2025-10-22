//
// Copyright (c) 2025 by WebMettle Systems.
//

import express from 'express';
import createHomepageTemplage from './views/index.js';

const app = express();
app.use(express.urlencoded( {extended: false} ));
app.use(express.static('public'));

//
// Routes.
//

app.get('/', (req, res) => {
   res.send(createHomepageTemplage());
});

app.listen(3000, () => {
   console.log('App running on port 3000...');
});
