async function start() {
  return await Promise.resolve('async working...');
}

const unused = '45';

class Util {
  static id = Date.now();
}

console.log('Util id: ', Util.id);

start().then(console.log);
