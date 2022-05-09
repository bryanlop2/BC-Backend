"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const moves_1 = require("../controllers/moves");
const router = (0, express_1.Router)();
router.get('/', moves_1.getPieces);
router.get('/:id', moves_1.getPiece);
router.post('/', moves_1.createPiece);
router.put('/:id', moves_1.updatePiece);
router.delete('/:id', moves_1.deletePiece);
exports.default = router;
//# sourceMappingURL=user.js.map