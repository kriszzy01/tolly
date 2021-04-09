import React, { useState } from "react";
import { Form } from "../components/Form";

export const Payments = () => {
  const [activeTab, setActiveTab] = useState("creditcard"); //Logic for clicking on tabs

  const handleChangeTab = (event) => setActiveTab(event.target.id);

  /*To update the tabpanel, we use a useEffect hook with activeTab as dependency*/

  return (
    <div className="payments">
      <div className="payments_header">
        <h2>Payment details</h2>

        <div>
          <span aria-hidden="true">
            <svg
              version="1.1"
              viewBox="0 0 20 20"
              height="13"
              width="13"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g transform="matrix(.045073 0 0 .038507 -2.9658 1.8363)">
                <path d="m410.84 176.24v-74.7c0.2-33.8-13.3-66.3-37.4-90-23.3-23.2-53.8-35.9-86.1-35.9h-1.6c-68.9 0.1-124.9 56.5-124.9 125.9v74.7c-26 3.1-45 24.9-45 51.3v167.8c0 28.5 22.8 52 51.3 52h237.5c28.5 0 51.3-23.5 51.3-52v-167.8c-0.1-26.3-19.1-48.2-45.1-51.3zm-230.1-74.7h0.1c0-58.4 47.1-106.2 105-106.2h0.1c27.5-0.1 53.9 10.8 73.4 30.2 20.3 20.1 31.6 47.5 31.4 76v74.8h-22v-74.8c0.2-22.7-8.8-44.5-24.9-60.5-15.2-15.2-35.8-23.8-57.3-23.8h-0.6c-46 0-83.2 37.8-83.2 84.2v74.9h-22zm168.1 0v74.8h-126v-74.8c0-35.4 28.2-64.2 63.2-64.2h0.6c16.2 0 31.8 6.5 43.3 18 12.2 12.2 19.1 28.9 18.9 46.2zm88 294.1c0 17.5-14.2 31.7-31.7 31.7h-237.6c-17.5 0-31.7-14.2-31.7-31.7v-167.6c0-17.5 14.2-31.7 31.7-31.7h237.6c17.5 0 31.7 14.2 31.7 31.7z" />
              </g>
              <path d="m270.4 330c-4.4-15.5-18.5-26.1-34.6-26.1-19.9 0-36.1 16.1-36.1 36.1 0 16.1 10.6 30.2 26.1 34.6v28c0 5.5 4.5 10 10 10s10-4.5 10-10v-28c19.1-5.5 30.2-25.5 24.6-44.6zm-34.6 26c-8.9 0-16.1-7.2-16.1-16.1s7.2-16.1 16.1-16.1 16.1 7.2 16.1 16.1-7.2 16.1-16.1 16.1z" />
            </svg>
          </span>

          <div>
            <p>Card is secure</p>
            <p>Your data is protected, everything will be private</p>
          </div>
        </div>
      </div>

      <div className="payments_tabs">
        <div role="tablist" aria-label="payment tab">
          <button
            role="tab"
            aria-selected={activeTab === "creditcard"}
            aria-controls="creditcard_tab"
            tab-index={-1}
            id="creditcard"
            onClick={handleChangeTab}
          >
            Credit Card
          </button>

          <button
            role="tab"
            aria-selected={activeTab === "paypal"}
            aria-controls="paypal_tab"
            tab-index={-1}
            id="paypal"
            onClick={handleChangeTab}
          >
            Paypal
          </button>

          <button
            role="tab"
            aria-selected={activeTab === "other"}
            aria-controls="other_tab"
            tab-index={-1}
            id="other"
            onClick={handleChangeTab}
          >
            Other
          </button>
        </div>
        <hr />

        <div
          role="tabpanel"
          id="creditcard_tab"
          className="payments_form"
          aria-labelledby="creditcard"
        >
          <div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div>
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
};
