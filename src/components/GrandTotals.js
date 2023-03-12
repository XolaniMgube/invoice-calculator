import { React, useState } from "react";
import * as XLSX from "xlsx/xlsx";

const GrandTotals = () => {
  let [bC, setBC] = useState(0);
  let [beforeContingency, setBeforeContingency] = useState(0);
  let contingency = beforeContingency * (3 / 100);
  let beforeTax = beforeContingency + contingency;
  let tax = beforeTax * (15 / 100);
  let grandTotal = beforeTax + tax;

  let handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setBC(value);
    console.log(bC);
  };

  let data = [{
    v1: beforeContingency,
    v2: contingency,
    v3: beforeTax,
    v4: tax,
    v5: grandTotal,
  }];

  let handleExport = () => {
    console.log(data);
    var wb = XLSX.utils.book_new(),
    ws = XLSX.utils.json_to_sheet(data);
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
    XLSX.writeFile(wb, "MyExcel.xlsx");
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    setBeforeContingency(Number(bC));
  };

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
          <button onClick={handleExport}>export</button>
        </div>
      </form>

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
