import { Request, Response } from "express"
import Piece from "../models/usuario";


export const getPieces = async(req: Request, res: Response) => {
    
    const pieces = await Piece.findAll(); 
    res.json({pieces});

}

export const getPiece = async (req: Request, res: Response) => {
    
    const { id } = req.params;
    
    const piece = await Piece.findByPk( id );

    if(piece) {
        res.json({piece});
    }else{
        res.status(404).json({
            msg: `There's no such piece ${id}`
        })
    }
    
 
}

export const createPiece = async(req: Request, res: Response) => {
    
    const { body } = req;

    try{

        const pieceExist = await Piece.findOne({
            where: {
                email: body.email
            }
        })
        if(pieceExist){
            return res.status(400).json({
                msg: `There's a piece with that name ${body.email}`
            })
        }

        const piece = Piece.build(body);
        await piece.save();
        res.json(piece);
    }catch(error){
        console.log(error);
        res.status(500).json({
            msg: 'Server not found'
        })
    }
}

export const updatePiece = async(req: Request, res: Response) => {
    
    const { id } = req.params;
    const { body } = req;

    try{

        const piece = await Piece.findByPk(id);
        if(!piece){
            return res.status(404).json({
                msg: `No such piece found: ${id}`
            })
        }
        await piece.update( body);
        res.json(piece);
    }catch(error){
        console.log(error);
        res.status(500).json({
            msg: 'Server not found'
        })
    }
}

export const deletePiece = async(req: Request, res: Response) => {
    
    const { id } = req.params;

    const piece = await Piece.findByPk(id);
    if(!piece){
        return res.status(404).json({
            msg: `No such piece found: ${id}`
        })
    }

    await piece.update({estado: false});
    
    // await Piece.destroy() // eliminación física

    res.json(piece);
}