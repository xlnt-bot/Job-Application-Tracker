"use client";

import { useEffect, useState } from "react";
import { Board, Column } from "../models/models.types";


export function useBoards(initialBoards?: Board | null) {
    const [board, setBoard] = useState<Board | null>(initialBoards || null);
    const [columns, setColumns] = useState<Column[]>(initialBoards?.columns || []);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (initialBoards) {
            setBoard(initialBoards);
            setColumns(initialBoards.columns || []);
        }
    }, [initialBoards]);

    async function moveJob(
        jobApplicationId: string,
        newColumnId: string,
        newOrder: string) {
    }

    return {
        board,
        columns,
        error,
        moveJob,
    }
}