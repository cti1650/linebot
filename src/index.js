const { router, text } = require('bottender/router');

async function SayHi(context) {
  await context.sendText('Hi!');
}

async function Unknown(context) {
  await context.sendText('Sorry, I don’t know what you say.');
}

module.export = function App(context) {
  return router([text('hi', SayHi), text('*', Unknown)]);
};
