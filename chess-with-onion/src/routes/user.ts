import { Router } from 'express'
import { getPieces, getPiece, createPiece, updatePiece, deletePiece } from '../controllers/moves';

const router = Router();

router.get('/', getPieces);
router.get('/:id', getPiece);
router.post('/', createPiece);
router.put('/:id', updatePiece);
router.delete('/:id', deletePiece);

export default router;