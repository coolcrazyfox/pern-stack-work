import React, { Fragment, useState } from "react";

const InputDevice = () => {
  const [model, setModel] = useState("");
  const [country, setCountry] = useState("");
  const [device, setDevice] = useState("");
  const [oem, setOem] = useState("");
  const [count_ebay, setCountEbay] = useState("");
  const [price_ebay, setPriceEbay] = useState("");
  const [price_store, setPriceStore] = useState("");
  const [count_store, setCountStore] = useState("");
  const [link, setLinkAdr] = useState("");
  const [image, setImage] = useState("");
  const [datetime, setDateTime] = useState("");

  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const body = { model, country, device, oem, count_ebay, price_ebay, price_store, count_store, link, image, datetime};
      const response = await fetch("http://localhost:7000/device", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });

      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <h3 className="text-center mt-5">Input Device From</h3>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <p>
        <input
          type="text"
          placeholder="Model"
          className="form-control"
          value={model}
          onChange={e => setModel(e.target.value)}
        />
        <input
          type="text"
          placeholder="Country"
          className="form-control"
          value={country}
          onChange={e => setCountry(e.target.value)}
        />
        <input
          type="text"
          placeholder="Device"
          className="form-control"
          value={device}
          onChange={e => setDevice(e.target.value)}
        />
          <input
              type="text"
              placeholder="OEM"
              className="form-control"
              value={oem}
              onChange={e => setOem(e.target.value)}
          />
          <input
              type="text"
              placeholder="Count Ebay"
              className="form-control"
              value={count_ebay}
              onChange={e => setCountEbay(e.target.value)}
          />
          <input
              type="text"
              placeholder="Price Ebay"
              className="form-control"
              value={price_ebay}
              onChange={e => setPriceEbay(e.target.value)}
          />
        </p>
        <p>
        <input
          type="text"
          placeholder="Price Store"
          className="form-control"
          value={price_store}
          onChange={e => setPriceStore(e.target.value)}
        />
        <input
          type="text"
          placeholder="Count Store"
          className="form-control"
          value={count_store}
          onChange={e => setCountStore(e.target.value)}
        />
        <input
          type="text"
          placeholder="Date"
          className="form-control"
          value={datetime}
          onChange={e => setDateTime(e.target.value)}
        />
          <input
              type="text"
              placeholder="Link"
              className="form-control"
              value={link}
              onChange={e => setLinkAdr(e.target.value)}
          />
          <input
              type="text"
              placeholder="Image"
              className="form-control"
              value={image}
              onChange={e => setImage(e.target.value)}
          />
          <button className="btn btn-success">Add</button>
        </p>

      </form>
    </Fragment>
  );
};

export default InputDevice;
