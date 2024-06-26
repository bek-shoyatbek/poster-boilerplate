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

      console.log("result", result); // { success: true }

      next();
    };
    Poster.on("beforeOrderClose", handleBeforeOrderClose);

    // Cleanup function to remove event listeners
    return () => {
      Poster.off("beforeOrderClose", handleBeforeOrderClose);
    };
  }, []);

  return <div className="hello-world"></div>;
}

async function generateQRCode(data) {
  try {
    // Generate QR code as a string
    const qrString = await QRCode.toString(data, { type: "utf8", small: true });

    // Combine QR code string with additional string
    const result = qrString + "\n\n";
    console.log("qrcode", result);
    return result;
  } catch (error) {
    console.error("Error generating QR code:", error);
  }
}
