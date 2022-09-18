import React, {Fragment, useState} from "react";

const EditDevice = ({todo}) => {
    const [model, setModel] = useState(todo.model);
    const [country, setCountry] = useState(todo.country);
    const [device, setDevice] = useState(todo.device);
    const [oem, setOem] = useState(todo.oem);
    const [count_ebay, setCountEbay] = useState(todo.count_ebay);
    const [price_ebay, setPriceEbay] = useState(todo.price_ebay);
    const [price_store, setPriceStore] = useState(todo.price_store);
    const [count_store, setCountStore] = useState(todo.count_store);
    const [link_adr, setLinkAdr] = useState(todo.link_adr);
    const [image, setImage] = useState(todo.image);
    const [datetime, setDateTime] = useState(todo.datetime);

    const updateDevice = async e => {
        e.preventDefault();
        try {
            const body = {
                model,
                country,
                device,
                oem,
                count_ebay,
                price_ebay,
                price_store,
                count_store,
                link_adr,
                image,
                datetime
            };
            const response = await fetch(`http://localhost:7000/device/${todo.id}`, {
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });

            window.location = "/";
        } catch (err) {
            console.error(err.message);
        }
    };

    return (
        <Fragment>
            <button
                type="button"
                class="btn btn-warning"
                data-toggle="modal"
                data-target={`#id${todo.id}`}
            >
                Edit
            </button>

            {/*
        id = id10
      */}
            <div
                class="modal"
                id={`id${todo.id}`}
                onClick={() => setModel(todo.model)}
            >
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title">Edit Device</h4>
                            <button
                                type="button"
                                class="close"
                                data-dismiss="modal"
                                onClick={() => setModel(todo.model)}
                            >
                                &times;
                            </button>
                        </div>

                        <div class="modal-body">
                            <input
                                type="text"
                                className="form-control"
                                value={model}
                                onChange={e => setModel(e.target.value)}
                            />
                        </div>

                        <div class="modal-footer">
                            <button
                                type="button"
                                class="btn btn-warning"
                                data-dismiss="modal"
                                onClick={e => updateDevice(e)}
                            >
                                Edit
                            </button>
                            <button
                                type="button"
                                class="btn btn-danger"
                                data-dismiss="modal"
                                onClick={() => setModel(todo.model)}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        {/*</Fragment>*/}
        {/*// <Fragment>*/}

            {/*// <h3 className="text-center mt-5">Edit Device From</h3>*/}
            {/*<form className="d-flex mt-5" onSubmit={onSubmitForm}>*/}
            {/*    <p>*/}
            {/*        <input*/}
            {/*            type="text"*/}
            {/*            placeholder="Model"*/}
            {/*            className="form-control"*/}
            {/*            value={model}*/}
            {/*            onChange={e => setModel(e.target.value)}*/}
            {/*        />*/}
            {/*        <input*/}
            {/*            type="text"*/}
            {/*            placeholder="Country"*/}
            {/*            className="form-control"*/}
            {/*            value={country}*/}
            {/*            onChange={e => setCountry(e.target.value)}*/}
            {/*        />*/}
            {/*        <input*/}
            {/*            type="text"*/}
            {/*            placeholder="Device"*/}
            {/*            className="form-control"*/}
            {/*            value={device}*/}
            {/*            onChange={e => setDevice(e.target.value)}*/}
            {/*        />*/}
            {/*        <input*/}
            {/*            type="text"*/}
            {/*            placeholder="OEM"*/}
            {/*            className="form-control"*/}
            {/*            value={oem}*/}
            {/*            onChange={e => setOem(e.target.value)}*/}
            {/*        />*/}
            {/*        <input*/}
            {/*            type="text"*/}
            {/*            placeholder="Count Ebay"*/}
            {/*            className="form-control"*/}
            {/*            value={count_ebay}*/}
            {/*            onChange={e => setCountEbay(e.target.value)}*/}
            {/*        />*/}
            {/*        <input*/}
            {/*            type="text"*/}
            {/*            placeholder="Price Ebay"*/}
            {/*            className="form-control"*/}
            {/*            value={price_ebay}*/}
            {/*            onChange={e => setPriceEbay(e.target.value)}*/}
            {/*        />*/}
            {/*    </p>*/}
            {/*    <p>*/}
            {/*        <input*/}
            {/*            type="text"*/}
            {/*            placeholder="Price Store"*/}
            {/*            className="form-control"*/}
            {/*            value={price_store}*/}
            {/*            onChange={e => setPriceStore(e.target.value)}*/}
            {/*        />*/}
            {/*        <input*/}
            {/*            type="text"*/}
            {/*            placeholder="Count Store"*/}
            {/*            className="form-control"*/}
            {/*            value={count_store}*/}
            {/*            onChange={e => setCountStore(e.target.value)}*/}
            {/*        />*/}
            {/*        <input*/}
            {/*            type="text"*/}
            {/*            placeholder="Date"*/}
            {/*            className="form-control"*/}
            {/*            value={datetime}*/}
            {/*            onChange={e => setDateTime(e.target.value)}*/}
            {/*        />*/}
            {/*        <input*/}
            {/*            type="text"*/}
            {/*            placeholder="Link"*/}
            {/*            className="form-control"*/}
            {/*            value={link_adr}*/}
            {/*            onChange={e => setLinkAdr(e.target.value)}*/}
            {/*        />*/}
            {/*        <input*/}
            {/*            type="text"*/}
            {/*            placeholder="Image"*/}
            {/*            className="form-control"*/}
            {/*            value={image}*/}
            {/*            onChange={e => setImage(e.target.value)}*/}
            {/*        />*/}
            {/*        <button className="btn btn-success">Edit</button>*/}
            {/*    </p>*/}

            {/*</form>*/}
        </Fragment>
    );
};

export default EditDevice;
