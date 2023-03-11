import React from 'react'

const GrandTotals = () => {
    let beforeContingency = 25305.62;
    let contingency = beforeContingency * (3/100);
    let beforeTax = beforeContingency + contingency;
    let tax = beforeTax * (15/100);
    let grandTotal = beforeTax + tax
    return (
        <div>
            <p>Before Contingency: R{beforeContingency.toFixed(2)}</p>
            <p>Contingency: R{contingency.toFixed(2)}</p>
            <p>Before Tax: R{beforeTax.toFixed(2)}</p>
            <p>Tax: R{tax.toFixed(2)}</p>
            <p>Grand Total: R{grandTotal.toFixed(2)}</p>
        </div>
    )
}

export default GrandTotals;