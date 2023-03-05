import { useState } from "react";

const InvoiceItems = () => {
  const sum = 0;
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [value3, setValue3] = useState(0);
  const handleChange = (e) => {
    setValue1(e.target.value);
    setValue2(e.target.vaule);
    setValue3(e.target.vaule);
  };

  return (
    <div className="container">
      <div className="">
        <form action="">
          <div className="m-1 row g-3">
            <div className="col-auto">
              <label className="form-label" htmlFor="item-one">
                Item 1
              </label>
            </div>
            <div className="col-auto">
              <input
                className="form-control"
                id="item-one"
                type="text"
                onChange={handleChange}
              ></input>
            </div>
          </div>
          <div className="m-1 row g-3">
            <div className="col-auto">
              <label className="form-label" htmlFor="item-two">
                Item 2
              </label>
            </div>
            <div className="col-auto">
              <input
                className="form-control"
                id="item-two"
                type="text"
                onChange={handleChange}
              ></input>
            </div>
          </div>
          <div className="m-1 row g-3">
            <div className="col-auto">
              <label className="form-label" htmlFor="item-three">
                Item 3
              </label>
            </div>
            <div className="col-auto">
              <input
                className="form-control"
                id="item-three"
                type="text"
                onChange={handleChange}
              ></input>
            </div>
          </div>

          <button className="btn btn-primary">Calculate Sum</button>
          <p>
            Sum is{" "}
            {sum + parseInt(value1) + parseInt(value2) + parseInt(value3)}
          </p>
        </form>
      </div>
    </div>
  );
};

export default InvoiceItems;
