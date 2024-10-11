import { useEffect, useState } from "react";

function Stripes() {
    const stripesCount = 12; // Фиксированное количество полос
    const stripeWidth = 100 / stripesCount; // Вычисляем ширину каждой полосы в процентах

    return (
        <div className="stripes-background">
            {Array.from({ length: stripesCount }, (_, index) => (
                <div key={index} className="stripe" style={{ width: <code>${stripeWidth}%</code> }} />
            ))}
        </div>
    );
}

export default Stripes;