import { useState } from "react";

const InvoiceItems = () => {
  let sum = 0;
  const [totalSum, setTotalSum] = useState(0)
  const [details, setDetails] = useState({
    value1: "",
    value2: "",
    value3: ""
  })

  const handleChange = (e) => {
    // console.log(e.target)
    const inputName = e.target.name
    const inputValue = e.target.value
    setDetails((previousValues) => {
      return {...previousValues, [inputName]: inputValue }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    Object.keys(details).map((key) => {
      sum += Number(details[key])
    })
    setTotalSum(sum)
  }

  return (
    <div className="container">
      <div className="">
        <form onSubmit={handleSubmit}>
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
                name="value1"
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
                name="value2"
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
                name="value3"
                onChange={handleChange}
              ></input>
            </div>
          </div>

          <button type="submit" className="btn btn-primary" >Calculate Sum</button>
          <p>
            Sum is : {totalSum}
          </p>
        </form>
      </div>
    </div>
  );
};

export default InvoiceItems;
