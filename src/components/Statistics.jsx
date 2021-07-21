import React from 'react';

export const Statistics = ({ data }) => {

    const { id, value } = data;

    // Вычисляем ср
    const total = data.reduce((sum, el) => (sum + el.value), 0) / data.length;

    const median = data.sort((a, b) => (a.value - b.value), 0);
    const idx = data.length / 2;

    console.log('median', median);
    

    return (
        <div className="total__sum">
            среднего арифметическое число: {total}
            Медиана: {median[idx].value}
        </div>
    )

};