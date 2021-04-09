import React, { useState } from "react";
import { useFormik } from "formik";

export const Form = () => {
  const [showPassword, setShowPassword] = useState(true);

  const handleShowPassword = () => {
    setShowPassword((showPassword) => !showPassword);
  };

  const initialFormState = {
    ccn: 4441235432665655,
    name: "Annette Murphy",
    expiration: "08/2021",
    cvv: 407,
  };

  const handleSubmit = (values) => {
    //Logic for submitting form
    console.log(JSON.stringify(values, null, 2));
  };

  const formik = useFormik({
    initialValues: initialFormState,
    onSubmit: (values) => handleSubmit(values),
  });

  return (
    <form onSubmit={formik.handleSubmit} className="form">
      <div className="form_field">
        <label htmlFor="ccn">Credit card</label>
        <div className="form_field_wIcon">
          <input
            id="ccn"
            name="ccn"
            type="tel"
            inputMode="numeric"
            pattern="[0-9\s]{13,19}"
            autoComplete="cc-number"
            maxLength="19"
            placeholder="xxxx xxxx xxxx xxxx"
            onChange={formik.handleChange}
            value={formik.values.ccn}
          />
          <span className="field_icon">
            <svg
              version="1.1"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="20"
            >
              <g transform="matrix(.082251 0 0 .091307 -.047904 -1.2734)">
                <path
                  d="m182.3 145.9c0 50.366-40.801 91.176-91.149 91.176s-91.149-40.819-91.149-91.176 40.811-91.176 91.149-91.176 91.149 40.819 91.149 91.176z"
                  fill="#e2574c"
                />
                <path
                  d="m200.62 54.719c-20.442 0-39.261 6.811-54.469 18.181l0.073 9e-3c2.991 2.89 6.291 4.924 8.835 8.251l-18.965 0.301c-2.972 3-5.68 6.264-8.233 9.656h33.443c2.544 3.054 4.896 5.708 7.03 9.081h-46.536c-1.705 2.936-3.282 5.954-4.659 9.09h56.493c1.477 3.127 2.799 5.489 3.921 8.799h-63.76c-1.012 3.146-1.878 6.364-2.535 9.646h68.966c0.675 3.155 1.194 6.072 1.55 9.045h-71.884c-0.301 3-0.456 6.045-0.456 9.118h72.859c0 3.228-0.228 6.218-0.556 9.118h-71.847c0.31 3.091 0.766 6.127 1.368 9.118h68.856c-0.711 2.954-1.532 5.926-2.562 9.008h-63.969c0.966 3.118 2.143 6.145 3.428 9.099h56.621c-1.568 3.319-3.346 5.972-5.306 9.081h-46.691c1.842 3.191 3.875 6.236 6.081 9.154l33.589 0.501c-2.863 3.437-6.537 5.507-9.884 8.516 0.182 0.146-5.352-0.018-16.248-0.191 16.576 17.105 39.744 27.772 65.446 27.772 50.357 0 91.176-40.82 91.176-91.176s-40.81-91.177-91.175-91.177z"
                  fill="#f4b459"
                />
              </g>
            </svg>
          </span>
        </div>
      </div>

      <div className="form_field">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
      </div>

      <div className="form_dual">
        <div className="form_field">
          <label htmlFor="expiration">Expiration date</label>
          <input
            id="expiration"
            name="expiration"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.expiration}
          />
        </div>

        <div className="form_field">
          <label htmlFor="cvv">CVV</label>
          <div className="form_field_wIcon">
            <input
              id="cvv"
              name="cvv"
              type={showPassword ? "number" : "password"}
              onChange={formik.handleChange}
              value={formik.values.cvv}
            />

            <button
              type="button"
              onClick={handleShowPassword}
              className="field_icon"
              aria-labelledby="field_icon"
            >
              <span className="vh" id="field_icon">
                {
                  /*Label for accessibility*/
                  showPassword ? "show password" : "hide password"
                }
              </span>

              <svg
                version="1.1"
                viewBox="0 0 15 15"
                xmlns="http://www.w3.org/2000/svg"
                height="14"
                width="14"
              >
                <g
                  transform="matrix(.029297 0 0 .039064 -.00043689 -2.5004)"
                  fill="#b9b8b8"
                >
                  <g fill="#b9b8b8">
                    <path d="m316.33 195.66c-4.16-4.16-10.923-4.16-15.083 0s-4.16 10.944 0 15.083c12.075 12.075 18.752 28.139 18.752 45.248 0 35.285-28.715 64-64 64-17.109 0-33.173-6.656-45.248-18.752-4.16-4.16-10.923-4.16-15.083 0-4.16 4.139-4.16 10.923 0 15.083 16.085 16.128 37.525 25.003 60.331 25.003 47.061 0 85.333-38.272 85.333-85.333 0-22.807-8.874-44.247-25.002-60.332z" />
                    <path d="m270.87 172.13c-4.843-0.853-9.792-1.472-14.869-1.472-47.061 0-85.333 38.272-85.333 85.333 0 5.077 0.619 10.027 1.493 14.869 0.917 5.163 5.419 8.811 10.475 8.811 0.619 0 1.237-0.043 1.877-0.171 5.781-1.024 9.664-6.571 8.64-12.352-0.661-3.627-1.152-7.317-1.152-11.157 0-35.285 28.715-64 64-64 3.84 0 7.531 0.491 11.157 1.131 5.675 1.152 11.328-2.859 12.352-8.64s-2.858-11.328-8.64-12.352z" />
                    <path d="m509.46 249.1c-2.411-2.859-60.117-70.208-139.71-111.44-5.163-2.709-11.669-0.661-14.379 4.587-2.709 5.227-0.661 11.669 4.587 14.379 61.312 31.744 110.29 81.28 127.04 99.371-25.429 27.541-125.5 128-231 128-35.797 0-71.872-8.64-107.26-25.707-5.248-2.581-11.669-0.341-14.229 4.971-2.581 5.291-0.341 11.669 4.971 14.229 38.293 18.496 77.504 27.84 116.52 27.84 131.44 0 248.56-136.62 253.48-142.44 3.369-3.969 3.348-9.793-0.023-13.782z" />
                    <path d="m326 118.95c-24.277-8.171-47.829-12.288-69.995-12.288-131.44 0-248.56 136.62-253.48 142.44-3.115 3.669-3.371 9.003-0.597 12.992 1.472 2.112 36.736 52.181 97.856 92.779 1.813 1.216 3.84 1.792 5.888 1.792 3.435 0 6.827-1.664 8.875-4.8 3.264-4.885 1.92-11.52-2.987-14.763-44.885-29.845-75.605-65.877-87.104-80.533 24.555-26.667 125.29-128.58 231.55-128.58 19.861 0 41.131 3.755 63.189 11.157 5.589 2.005 11.648-1.088 13.504-6.699 1.878-5.589-1.109-11.626-6.698-13.504z" />
                    <path
                      data-showpassword={showPassword ? false : true}
                      d="m444.86 67.128c-4.16-4.16-10.923-4.16-15.083 0l-362.67 362.67c-4.16 4.16-4.16 10.923 0 15.083 2.091 2.069 4.821 3.115 7.552 3.115s5.461-1.045 7.531-3.115l362.67-362.67c4.16-4.16 4.16-10.923 0-15.083z"
                    />
                  </g>
                </g>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="form_buttons">
        <button type="submit" aria-label="confirm order">
          Confirm order
        </button>

        <button type="button" aria-label="cancel and return">
          Cancel and Return
        </button>
      </div>
    </form>
  );
};
