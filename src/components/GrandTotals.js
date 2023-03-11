import {React, useState} from "react";

const GrandTotals = () => {


  let [bC, setBC] = useState(0);
  let [beforeContingency, setBeforeContingency] = useState(0)
  // let [contingency, setContingency] = useState(0)
  let contingency = beforeContingency * (3 / 100);
  let beforeTax = beforeContingency + contingency;
  let tax = beforeTax * (15 / 100);
  let grandTotal = beforeTax + tax;

  let handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value
    setBC(value)
    console.log(bC)
  }

  let handleSubmit = (e) => {
    e.preventDefault()
    setBeforeContingency(Number(bC))
    // setContingency(beforeContingency * (3 / 100))
  }

  return (
    <div className="container mt-5">
      <form className="row" onSubmit={handleSubmit}>
        <div className="col-6">
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              R
            </span>
            <input
              type="text"
              className="form-control"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
              name="beforeContingency"
              onChange={handleChange}
            />
            <button
              className="btn btn-success"
              type="submit"
              id="button-addon2"
            >
              Button
            </button>
          </div>
        </div>
      </form>

      {/* <p className="text-primary">
        Before Contingency: R{beforeContingency.toFixed(2)}
      </p>
      <p>Contingency: R{contingency.toFixed(2)}</p>
      <p>Before Tax: R{beforeTax.toFixed(2)}</p>
      <p>Tax: R{tax.toFixed(2)}</p>
      <p>Grand Total: R{grandTotal.toFixed(2)}</p> */}
      <div className="row">
        <div className="col-6">
          <table className="table table-dark table-hover table-bordered">
            <thead>
              <tr>
                <th scope="col">Total Type</th>
                <th scope="col">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Before Contingency</td>
                <td>R{Number(beforeContingency)}</td>
              </tr>
              <tr>
                <td>Contingency</td>
                <td>R{Number(contingency.toFixed(2))}</td>
              </tr>
              <tr>
                <td>Before Tax</td>
                <td>R{Number(beforeTax.toFixed(2))}</td>
              </tr>
              <tr>
                <td>Tax</td>
                <td>R{Number(tax.toFixed(2))}</td>
              </tr>
              <tr>
                <td>Grand Total</td>
                <td>R{Number(grandTotal.toFixed(2))}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default GrandTotals;
