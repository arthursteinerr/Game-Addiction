// src/api/games.js
import api from "./apiConfig";

export const getGames = async () => {
    try {
        const response = await api.get("");
        return response.data.results;
    } catch (error) {
        console.error("Erro ao buscar jogos:", error);
        return [];
    }
};
