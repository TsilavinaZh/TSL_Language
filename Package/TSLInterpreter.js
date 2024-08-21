const fs = require('fs');
const VariableHandler = require('./VariableHandler');
const FunctionHandler = require('./FunctionHandler');

class TSLInterpreter {
  constructor() {
    this.variableHandler = new VariableHandler();
    this.functionHandler = new FunctionHandler();
  }

  run(filename) {
    const code = fs.readFileSync(filename, 'utf8');
    this.execute(code);
  }

  execute(code) {
    const lines = code.split('\n');
    let i = 0;

    while (i < lines.length) {
      let line = lines[i].trim();

      if (line.startsWith('//') || line.startsWith('#')) {
        i++;
        continue;
      }

      if (line.startsWith('terminal(')) {
        this.print(line);
      } else if (line.startsWith('Var')) {
        this.variableHandler.declareVariable(line);
      } else if (line.startsWith('func')) {
        this.functionHandler.defineFunction(line);
      } else if (line.startsWith('call')) {
        this.functionHandler.callFunction(line);
      } else {
        // console.error(`Erreur : instruction inconnue ${line}`);
      }

      i++;
    }
  }

  print(line) {
    const content = line.slice('terminal('.length, -1).trim();
    let output = content;

    if (content.startsWith("'") && content.endsWith("'")) {
      output = content.slice(1, -1);
    } else if (this.variableHandler.getVariable(content) !== undefined) {
      output = this.variableHandler.getVariable(content);
    }

    console.log(output);
  }
}

module.exports = TSLInterpreter;