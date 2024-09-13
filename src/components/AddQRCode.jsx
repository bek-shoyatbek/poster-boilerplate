import React, { useEffect } from "react";
import "./AddQRCode.css";

const REDIRECT_URL = "https://5j23pkp4-5173.euw.devtunnels.ms";

export function AddQRCode() {
  useEffect(() => {
    const handleBeforeOrderClose = async (data, next) => {
      const spotId = Poster?.settings?.spotId;

      console.log("spotId", spotId);
      const result = await Poster.orders.printReceipt(
        data.order.id,
        `${REDIRECT_URL}/pay?spotId=${spotId}&orderId=${data.order.id}&userId=${data.order.userId}&total=${data.order.total}`,
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
