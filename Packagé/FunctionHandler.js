class FunctionHandler {
    constructor() {
      this.functions = {};
    }
  
    defineFunction(line) {
      const name = line.split(' ')[1].split('(')[0];
      this.functions[name] = () => {
        
      };
    }
  
    callFunction(line) {
      const name = line.split(' ')[1].split('(')[0];
      const args = line.split('(')[1].replace(')', '');
      if (this.functions[name]) {
        this.functions[name](args);
      } else {
        console.error(`Fonction ${name} n'est pas définie`);
      }
    }
  }
  
  module.exports = FunctionHandler;
