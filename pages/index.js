import Head from "next/head";
import { useState } from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";
export default function Home() {
  const [amount, setAmount] = useState(0);
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>Pay with PayPal</title>

        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
          integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
          crossorigin="anonymous"
        />

        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css"
          integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp"
          crossorigin="anonymous"
        />

        <script
          src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"
          integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa"
          crossorigin="anonymous"
        ></script>
      </Head>
      <body>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <form className="form-horizontal">
                <fieldset>
                  {/* Form Name */}
                  <legend>Pay with PayPal</legend>
                  {/* Text input*/}
                  <div className="form-group">
                    <label className="col-md-4 control-label" htmlFor="amount">
                      Payment Amount
                    </label>
                    <div className="col-md-4">
                      <input
                        id="amount"
                        name="amount"
                        type="text"
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="amount to pay"
                        className="form-control input-md"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label
                      className="col-md-4 control-label"
                      htmlFor="submit"
                    />
                    <div className="col-md-4">
                      <PayPalButtons
                        style={{ layout: "horizontal" }}
                        createOrder={(data, actions) => {
                          return actions.order.create({
                            purchase_units: [
                              {
                                amount: {
                                  value: "10",
                                },
                              },
                            ],
                          });
                        }}
                        onApprove={(data, actions) => {
                          return actions.order.capture().then((details) => {
                            console.log("d", details);
                            alert(
                              "Transaction completed by " +
                                details.payer.name.given_name
                            );
                          });
                        }}
                      />
                    </div>
                  </div>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </body>
    </>
  );
}
