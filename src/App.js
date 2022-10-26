import React, { useEffect } from "react";
import "./App.css";
import "bulma/css/bulma.min.css";
import Bulma from "@vizuaalog/bulmajs";

function App() {
  useEffect(() => {
    const scriptTag = document.createElement("script");
    scriptTag.src = "https://js.bepaid.by/widget/be_gateway.js";
    scriptTag.async = true;

    scriptTag.onload = () => {
      Object.defineProperty(window, "showWidget", {
        writable: true,
        value: () => {
          console.debug("close widget callback");
          var params = {
            checkout_url: "https://checkout.bepaid.by",
            checkout: {
              iframe: true,
              test: true,
              transaction_type: "payment",
              public_key:
                "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAxMS2arTU9LY/CzxIZOS5+0sWzkMWjFfok31BlHT5Mw0BnQ28to7qFJebeemJjClCzSDwix8eZsXzpclO1yRt8jkmxqAbn8UFfDw+CGdmT3uBMC2+8BfE0aVKhztG5RtTJBBUcGsgJ4hfd4LYeUJMTHdBtF8pmhTfuZJrZj9xVgnarWmhRX568yRTq92VBrYKt0hxUabvmm5Z5weIrWLbtg0FEMRRGjtjx02ePDNAvDxfu08xXwax8wUrNjEuJcKC42iJAPM3oCOky9lBTnaiQpcRCBthScAN8lZmEaJg31l0eLCsUHYysYz5ILurCYHWjLPr7qjWWRVcitLdhJZDCQIDAQAB",
              order: {
                amount: 100,
                currency: "BYN",
                description: "Payment description",
                tracking_id: "my_transaction_id",
              },
            },
            closeWidget: function (status) {
              console.debug("close widget callback");
            },
          };

          new window.BeGateway(params).createWidget();
        },
      });
    };

    document.body.appendChild(scriptTag);
  }, []);

  return (
    <>
      <button
        onClick={() => {
          window.showWidget();
        }}
      >
        Click me
      </button>
    </>
  );
}

export default App;
