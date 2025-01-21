import React, { useEffect } from "react";
import "./AddQRCode.css";

const REDIRECT_URL = "http://213.230.110.176:6500";

export function AddQRCode() {
  useEffect(() => {
    const handleBeforeOrderClose = async (data, next) => {
      const spotId = Poster?.settings?.spotId;
      const spotTabletId = Poster?.settings?.spotTabletId;
      console.log('settings: ', Poster?.settings);
      console.log('data: ', data);

      await Poster.orders.printReceipt(
        data.order.id,
        `${REDIRECT_URL}/pay?spotId=${spotId}&spotTabletId=${spotTabletId}&userId=${data.order.userId}&total=${data.order.total}&terminal=poster&tableId=${data.order.tableId}`,
        "Payrest"
      );

      next();
    };
    Poster.on("beforeOrderClose", handleBeforeOrderClose);

    return () => {
      Poster.off("beforeOrderClose", handleBeforeOrderClose);
    };
  }, []);

  return <div className="hello-world"></div>;
}
