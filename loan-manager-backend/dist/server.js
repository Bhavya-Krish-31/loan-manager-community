"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const ApplicationRoutes_1 = __importDefault(require("./routes/ApplicationRoutes"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
mongoose_1.default.connect('mongodb://localhost:27017/loanManager')
    .then(() => {
    console.log('Database connected successfully!');
})
    .catch((err) => {
    console.error('Database connection failed:', err);
});
app.use('/api/applications', ApplicationRoutes_1.default);
const port = 5000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
app.get('/', (req, res) => {
    res.send('Server is running');
});
