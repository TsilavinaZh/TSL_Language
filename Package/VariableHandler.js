class VariableHandler {
    constructor() {
        this.variables = {};
    }

    declareVariable(line) {
        const [_, declaration] = line.split(':');
        const [name, value] = declaration.split('=').map(part => part.trim());

        if (value.startsWith("'") && value.endsWith("'")) {
            this.variables[name] = value.slice(1, -1);
        } else if (!isNaN(value)) {
            this.variables[name] = parseInt(value, 10);
        } else if (value === 'true' || value === 'false') {
            this.variables[name] = value === 'true';
        } else {
            console.error(`Erreur dans la déclaration de la variable : ${line}`);
        }
    }

    getVariable(name) {
        return this.variables[name];
    }
}

module.exports = VariableHandler;