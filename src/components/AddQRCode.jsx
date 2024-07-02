import React, { useEffect } from "react";
import "./AddQRCode.css";

const REDIRECT_URL = "https://z73fb93d-5173.euw.devtunnels.ms";

export default function HelloWorldApp() {
  useEffect(() => {
    const handleBeforeOrderClose = async (data, next) => {
      const spotId = Poster?.settings?.spotId;
      console.log("set", settings);

      const result = await Poster.orders.printReceipt(
        data.order.id,
        `${REDIRECT_URL}/billing?spotId=${spotId}&orderId=${data.order.id}&userId=${data.order.userId}&total=${data.order.total}`,
        "Onepay"
      );

      console.log("result", result);

      next();
    };
    Poster.on("beforeOrderClose", handleBeforeOrderClose);

    return () => {
      Poster.off("beforeOrderClose", handleBeforeOrderClose);
    };
  }, []);

  return <div className="hello-world"></div>;
}
