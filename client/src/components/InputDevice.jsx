import React, { Fragment, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const InputDevice = () => {
  const [model, setModel] = useState("");
  const [country, setCountry] = useState("");
  const [device, setDevice] = useState("");
  const [oem, setOem] = useState("");
  const [count_ebay, setCountEbay] = useState("");
  const [price_ebay, setPriceEbay] = useState("");
  const [price_store, setPriceStore] = useState("");
  const [count_store, setCountStore] = useState("");
  const [link, setLink] = useState("");
  const [image, setImage] = useState("");
  const [datetime, setDateTime] = useState("");

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
        <Button variant="primary" onClick={handleShow}>
          Input
        </Button>

        <Modal show={show} onHide={handleClose} onClick={() => setModel(todo.model)}>
          <Modal.Header closeButton>
            <Modal.Title>Input Device From</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <input
                placeholder="Edit model"
                type="text"
                className="form-control"
                value={model}
                onChange={e => setModel(e.target.value)}
            />
            <input
                placeholder="Edit country"
                type="text"
                className="form-control"
                value={country}
                onChange={e => setCountry(e.target.value)}
            />
            <input
                placeholder="Edit device"
                type="text"
                className="form-control"
                value={device}
                onChange={e => setDevice(e.target.value)}
            />
            <input
                placeholder="Edit OEM"
                type="text"
                className="form-control"
                value={oem}
                onChange={e => setOem(e.target.value)}
            />
            <input
                placeholder="Edit count_ebay"
                type="text"
                className="form-control"
                value={count_ebay}
                onChange={e => setCountEbay(e.target.value)}
            />
            <input
                placeholder="Edit price_ebay"
                type="text"
                className="form-control"
                value={price_ebay}
                onChange={e => setPriceEbay(e.target.value)}
            />
            <input
                placeholder="Edit price_store"
                type="text"
                className="form-control"
                value={price_store}
                onChange={e => setPriceStore(e.target.value)}
            />
            <input
                placeholder="Edit count_store"
                type="text"
                className="form-control"
                value={count_store}
                onChange={e => setCountStore(e.target.value)}
            />
            <input
                placeholder="Edit date"
                type="text"
                className="form-control"
                value={datetime}
                onChange={e => setDateTime(e.target.value)}
            />
            <input
                placeholder="Edit link"
                type="text"
                className="form-control"
                value={link}
                onChange={e => setLink(e.target.value)}
            />
            <input
                placeholder="Edit image"
                type="text"
                className="form-control"
                value={image}
                onChange={e => setImage(e.target.value)}
            />

          </Modal.Body>
          <Modal.Footer>
            {/*<Button variant="warning" onClick={() => setModel(todo.model)}>*/}
            {/*    Close*/}
            {/*</Button>*/}
            <div size="sm">
              <Button variant="primary" onClick={e => onSubmitForm(e)} size="sm">
                Add
              </Button>
            </div>


          </Modal.Footer>
        </Modal>

    {/*<Fragment>*/}
    {/*  <h3 className="text-center mt-5">Input Device From</h3>*/}
    {/*  <form className="d-flex mt-5" onSubmit={onSubmitForm}>*/}
    {/*    <p>*/}
    {/*    <input*/}
    {/*      type="text"*/}
    {/*      placeholder="Model"*/}
    {/*      className="form-control"*/}
    {/*      value={model}*/}
    {/*      onChange={e => setModel(e.target.value)}*/}
    {/*    />*/}
    {/*    <input*/}
    {/*      type="text"*/}
    {/*      placeholder="Country"*/}
    {/*      className="form-control"*/}
    {/*      value={country}*/}
    {/*      onChange={e => setCountry(e.target.value)}*/}
    {/*    />*/}
    {/*    <input*/}
    {/*      type="text"*/}
    {/*      placeholder="Device"*/}
    {/*      className="form-control"*/}
    {/*      value={device}*/}
    {/*      onChange={e => setDevice(e.target.value)}*/}
    {/*    />*/}
    {/*      <input*/}
    {/*          type="text"*/}
    {/*          placeholder="OEM"*/}
    {/*          className="form-control"*/}
    {/*          value={oem}*/}
    {/*          onChange={e => setOem(e.target.value)}*/}
    {/*      />*/}
    {/*      <input*/}
    {/*          type="text"*/}
    {/*          placeholder="Count Ebay"*/}
    {/*          className="form-control"*/}
    {/*          value={count_ebay}*/}
    {/*          onChange={e => setCountEbay(e.target.value)}*/}
    {/*      />*/}
    {/*      <input*/}
    {/*          type="text"*/}
    {/*          placeholder="Price Ebay"*/}
    {/*          className="form-control"*/}
    {/*          value={price_ebay}*/}
    {/*          onChange={e => setPriceEbay(e.target.value)}*/}
    {/*      />*/}
    {/*    </p>*/}
    {/*    <p>*/}
    {/*    <input*/}
    {/*      type="text"*/}
    {/*      placeholder="Price Store"*/}
    {/*      className="form-control"*/}
    {/*      value={price_store}*/}
    {/*      onChange={e => setPriceStore(e.target.value)}*/}
    {/*    />*/}
    {/*    <input*/}
    {/*      type="text"*/}
    {/*      placeholder="Count Store"*/}
    {/*      className="form-control"*/}
    {/*      value={count_store}*/}
    {/*      onChange={e => setCountStore(e.target.value)}*/}
    {/*    />*/}
    {/*    <input*/}
    {/*      type="text"*/}
    {/*      placeholder="Date"*/}
    {/*      className="form-control"*/}
    {/*      value={datetime}*/}
    {/*      onChange={e => setDateTime(e.target.value)}*/}
    {/*    />*/}
    {/*      <input*/}
    {/*          type="text"*/}
    {/*          placeholder="Link"*/}
    {/*          className="form-control"*/}
    {/*          value={link}*/}
    {/*          onChange={e => setLink(e.target.value)}*/}
    {/*      />*/}
    {/*      <input*/}
    {/*          type="text"*/}
    {/*          placeholder="Image"*/}
    {/*          className="form-control"*/}
    {/*          value={image}*/}
    {/*          onChange={e => setImage(e.target.value)}*/}
    {/*      />*/}
    {/*      <button className="btn btn-success">Add</button>*/}
    {/*    </p>*/}

    {/*  </form>*/}
    </Fragment>
  );
};

export default InputDevice;
