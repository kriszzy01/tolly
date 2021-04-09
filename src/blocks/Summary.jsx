import React from "react";
import { Accordion } from "../components/Accordion";
import { Stepper } from "../components/Stepper";

export const Summary = () => {
  return (
    <div className="summary">
      <div className="summary_header">
        <h2>Order Summary</h2>
      </div>

      <Stepper currentStep={1} />

      <div>
        <Accordion initialState={true} title="Prada" id="prada">
          <ul>
            <li>
              <span>Leather mini-bag</span>
              <span>$1850.00</span>
            </li>
            <li>
              <span>Estimated Shipping</span>
              <span>$370.00</span>
            </li>
            <li>
              <span>Discount</span>
              <span>$0.00</span>
            </li>
            <li>
              <span>Total</span>
              <span>$2220.00</span>
            </li>
          </ul>
        </Accordion>
        <Accordion title="Dr Martens" id="martens">
          <ul>
            <li>
              <span>Leather mini-bag</span>
              <span>$1850.00</span>
            </li>
            <li>
              <span>Estimated Shipping</span>
              <span>$370.00</span>
            </li>
            <li>
              <span>Discount</span>
              <span>$0.00</span>
            </li>
            <li>
              <span>Total</span>
              <span>$2220.00</span>
            </li>
          </ul>
        </Accordion>
        <Accordion title="Chanel" id="chanel">
          <ul>
            <li>
              <span>Leather mini-bag</span>
              <span>$1850.00</span>
            </li>
            <li>
              <span>Estimated Shipping</span>
              <span>$370.00</span>
            </li>
            <li>
              <span>Discount</span>
              <span>$0.00</span>
            </li>
            <li>
              <span>Total</span>
              <span>$2220.00</span>
            </li>
          </ul>
        </Accordion>
      </div>

      <div className="summary_footer">
        <p>Total Amount:</p>
        <p>$3680.60</p>
      </div>
    </div>
  );
};
