const TSLInterpreter = require('./Package/TSLInterpreter.js');
const filename = process.argv[2];

if (filename) {
  const interpreter = new TSLInterpreter();
  interpreter.run(filename);
} else {
  console.error('Veuillez fournir un fichier .tsl à exécuter.');
}