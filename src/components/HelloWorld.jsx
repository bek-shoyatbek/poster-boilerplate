import React, { useState, useEffect } from "react";
import "./HelloWorld.css";

export default function HelloWorldApp() {
  const [emoji, setEmoji] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Show application buttons in settings and order windows
    Poster.interface.showApplicationIconAt({
      functions: "Кнопка платформы",
      order: "Кнопка платформы",
      payment: "My Button",
    });

    // Subscribe to button click
    const handleIconClick = (data) => {
      if (data.place === "order") {
        setEmoji("👩‍🍳");
        setMessage("Вы открыли окно заказа!");
      } else {
        setEmoji("💵");
        setMessage("Checkout modal!");
      }
      // Show interface
      Poster.interface.popup({ width: 500, height: 400, title: "My app" });
    };

    // Subscribe to order close event
    const handleOrderClose = async () => {
      setEmoji("🍾");
      setMessage("Hello world!");
      // Show interface
      Poster.interface.popup({
        width: 500,
        height: 400,
        title: "My app",
      });
    };

    Poster.on("applicationIconClicked", handleIconClick);
    Poster.on("afterOrderClose", handleOrderClose);
    Poster.on("beforeOrderClose", async (data, next) => {
      console.log("data", data);
      var result = await Poster.orders.setPrintText(
        data.order_id,
        "Hello guys\nI am a Lorem Ipsum"
      );

      console.log(result); // { success: true }

      next();
    });

    // Cleanup function to remove event listeners
    return () => {
      Poster.off("applicationIconClicked", handleIconClick);
      Poster.off("afterOrderClose", handleOrderClose);
    };
  }, []);

  return (
    <div className="hello-world">
      <h1>{emoji}</h1>
      <p>{message}</p>
    </div>
  );
}
