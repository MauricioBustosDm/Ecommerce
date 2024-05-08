import http from 'http';
import reload from 'reload';

import app from './config/server.js';

const server = http.createServer(app);
server.listen(app.get('port'), () => {
  console.log('Is up');
});

reload(app);
