import app from'./config/server.js';

app.listen(app.get('port'), () => {
  console.log('Is up');
});
