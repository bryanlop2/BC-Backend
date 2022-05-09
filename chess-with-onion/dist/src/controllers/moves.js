"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePiece = exports.updatePiece = exports.createPiece = exports.getPiece = exports.getPieces = void 0;
const usuario_1 = __importDefault(require("../models/usuario"));
const getPieces = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const pieces = yield usuario_1.default.findAll();
    res.json({ pieces });
});
exports.getPieces = getPieces;
const getPiece = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const piece = yield usuario_1.default.findByPk(id);
    if (piece) {
        res.json({ piece });
    }
    else {
        res.status(404).json({
            msg: `There's no such piece ${id}`
        });
    }
});
exports.getPiece = getPiece;
const createPiece = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const pieceExist = yield usuario_1.default.findOne({
            where: {
                email: body.email
            }
        });
        if (pieceExist) {
            return res.status(400).json({
                msg: `There's a piece with that name ${body.email}`
            });
        }
        const piece = usuario_1.default.build(body);
        yield piece.save();
        res.json(piece);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Server not found'
        });
    }
});
exports.createPiece = createPiece;
const updatePiece = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const piece = yield usuario_1.default.findByPk(id);
        if (!piece) {
            return res.status(404).json({
                msg: `No such piece found: ${id}`
            });
        }
        yield piece.update(body);
        res.json(piece);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Server not found'
        });
    }
});
exports.updatePiece = updatePiece;
const deletePiece = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const piece = yield usuario_1.default.findByPk(id);
    if (!piece) {
        return res.status(404).json({
            msg: `No such piece found: ${id}`
        });
    }
    yield piece.update({ estado: false });
    // await Piece.destroy() // eliminación física
    res.json(piece);
});
exports.deletePiece = deletePiece;
//# sourceMappingURL=moves.js.map