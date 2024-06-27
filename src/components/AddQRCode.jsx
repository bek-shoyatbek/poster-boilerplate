import React, { useEffect } from "react";
import "./AddQRCode.css";
import QRCode from "qrcode";

const REDIRECT_URL = "www.example.com";

export default function HelloWorldApp() {
  useEffect(() => {
    const handleBeforeOrderClose = async (data, next) => {
      console.log("data", data);
      const qrCode = await generateQRCode(REDIRECT_URL);
      const result = await Poster.orders.setPrintText(data.order.id, qrCode);

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

async function generateQRCode(data) {
  try {
    const qrString = await QRCode.toString(data, { type: "utf8", small: true });

    const result = qrString + "\n\n";
    return result;
  } catch (error) {
    console.error("Error generating QR code:", error);
  }
}
