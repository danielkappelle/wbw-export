"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
inquirer_1.default.prompt([{ name: 'name', message: "Wie ben jij?" }]).then(answers => console.log(answers));
//# sourceMappingURL=index.js.map