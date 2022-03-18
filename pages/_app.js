import "../styles/globals.css";

import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
function MyApp({ Component, pageProps }) {
  return (
    <PayPalScriptProvider
      options={{
        "client-id": "your-id",
      }}
    >
      <Component {...pageProps} />
    </PayPalScriptProvider>
  );
}

export default MyApp;
