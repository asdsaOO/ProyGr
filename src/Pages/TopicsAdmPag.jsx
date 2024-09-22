import React from "react";

function TopicsAdmPag() {
  return (
    <div className="row mb-4 w-90">
      <div className="row mb-4">
        <div className="col-10">
          <div className="">
          <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
          </div>
        </div>
      </div>
      <div className="row mb-4">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
    </div>
  )
}
export { TopicsAdmPag }