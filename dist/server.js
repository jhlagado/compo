"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const open_1 = __importDefault(require("open"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
// Middleware to parse JSON bodies
app.use(express_1.default.json());
// A simple route to verify the server is running
app.get('/', (req, res) => {
    res.send('Hello World from your TypeScript Express server!');
});
// Start the server and automatically open the default browser
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    (0, open_1.default)(`http://localhost:${PORT}`);
});
//# sourceMappingURL=server.js.map