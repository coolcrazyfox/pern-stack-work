import React, { Fragment, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const InputDev = () => {
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
        <div style={{background:'#f3f3f3', marginLeft:'20px',marginRight:'20px', borderRadius:'10px'}}>
          <table class="table">
            <thead class="thead-dark">
              <tr>
                
                <th scope="col">Model</th>
                <th scope="col">Country</th>
                <th scope="col">Device</th>
                <th scope="col">OEM</th>
                <th scope="col">Count_ebay</th>
                <th scope="col">Price_ebay $</th>
                <th scope="col">Price_store $</th>
                <th scope="col">Count_store</th>
                <th scope="col">Date</th>
                <th scope="col">Link</th>
                <th scope="col">Image</th>
                <th scope="col"></th>                     
              </tr>
            </thead>
            <tbody>            
              <tr>
                {/* <th scope="row">-</th> */}
                  <td>
                      <input
                      placeholder="Send model"
                      type="text"
                      className="form-control"
                      value={model}
                      onChange={e => setModel(e.target.value)}
                      />
                  </td>
                  <td>
                    <input
                    placeholder="Send country"
                    type="text"
                    className="form-control"
                    value={country}
                    onChange={e => setCountry(e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      placeholder="Send device"
                      type="text"
                      className="form-control"
                      value={device}
                      onChange={e => setDevice(e.target.value)}
                  />
                  </td>
                  <td>
                    <input
                      placeholder="Send OEM"
                      type="text"
                      className="form-control"
                      value={oem}
                      onChange={e => setOem(e.target.value)}
                  />
                  </td>
                  <td>
                    <input
                      placeholder="Send count_ebay"
                      type="text"
                      className="form-control"
                      value={count_ebay}
                      onChange={e => setCountEbay(e.target.value)}
                  />
                  </td>
                  <td>
                    <input
                      placeholder="Send price_ebay"
                      type="text"
                      className="form-control"
                      value={price_ebay}
                      onChange={e => setPriceEbay(e.target.value)}
                  />
                  </td>
                  <td>
                    <input
                      placeholder="Send price_store"
                      type="text"
                      className="form-control"
                      value={price_store}
                      onChange={e => setPriceStore(e.target.value)}
                  />
                  </td>
                  <td>
                    <input
                      placeholder="Send count_store"
                      type="text"
                      className="form-control"
                      value={count_store}
                      onChange={e => setCountStore(e.target.value)}
                  />
                  </td>
                  <td>
                    <input
                      placeholder="Send date"
                      type="text"
                      className="form-control"
                      value={datetime}
                      onChange={e => setDateTime(e.target.value)}
                  />
                  </td>
                  <td>
                    <input
                      placeholder="Send link"
                      type="text"
                      className="form-control"
                      value={link}
                      onChange={e => setLink(e.target.value)}
                  />
                  </td>
                  <td>
                    <input
                      placeholder="Send image"
                      type="text"
                      className="form-control"
                      value={image}
                      onChange={e => setImage(e.target.value)}
                  />
                  </td>
                  <td>
                    <div size="sm">
                      <Button variant="info" onClick={e => onSubmitForm(e)} size="sm">
                        Add
                      </Button>
                    </div>
                  </td>
              </tr>            
            </tbody>
          </table>
        </div>
        
       
    </Fragment>
  );
};

export default InputDev;
