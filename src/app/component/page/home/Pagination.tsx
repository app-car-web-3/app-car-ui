import { useState } from "react";

export const useMockPaginate = <T,>(data: T[], limit: number) => {
    const [currentPage, setPage] = useState(1);

    const getPaginatedData = () => {
        const startIndex = (currentPage - 1) * limit;
        const endIndex = startIndex + limit;
        return data.slice(startIndex, endIndex);
    };

    const paginatedData = getPaginatedData();

    const prevPage = () => {
        if (currentPage > 1) {
            setPage(prev => prev - 1);
        }
    };

    const nextPage = () => {
        if (currentPage < Math.ceil(data.length / limit)) {
            setPage(prev => prev + 1);
        }
    };

    const goToPage = (page: number) => {
        if (page >= 1 && page <= Math.ceil(data.length / limit)) {
            setPage(page);
        }
    };

    const isFirstPage = currentPage === 1;
    const isLastPage = currentPage === Math.ceil(data.length / limit);

    return {
        nextPage,
        prevPage,
        goToPage,
        paginatedData,
        currentPage,
        isFirstPage,
        isLastPage,
    };
};
