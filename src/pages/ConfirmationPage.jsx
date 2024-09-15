import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export default function ConfirmationPage() {
  const location = useLocation();
  const { formData, cartItems, totalPrice } = location.state || {};

  const [estimatedTime, setEstimatedTime] = useState("");

  useEffect(() => {
    // Function to generate a random time between 20 and 60 minutes
    const getRandomTime = () => {
      const min = 20;
      const max = 60;
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    // Set the estimated time
    const time = getRandomTime();
    setEstimatedTime(time);
  }, []);

  return (
    <div className="flex justify-center min-h-screen">
      <div className="p-8 text-center">
        <h1 className="text-4xl font-bold mb-8">Purchase Confirmation</h1>
        <div className="text-xl mb-8">
          <p>Thank you, {formData.name}!</p>
          <p>Your purchase has been confirmed.</p>
        </div>

        <h2 className="text-3xl font-bold mb-4">Order Summary</h2>
        <ul className="mb-8">
          {cartItems.map((item, index) => (
            <li key={index}>
              {item.title} - ${item.price.toFixed(2)} x {item.quantity}
            </li>
          ))}
        </ul>
        <div className="text-xl font-bold mb-8">
          Total: ${totalPrice.toFixed(2)}
        </div>
        <div className="text-xl font-bold mb-8">
          Estimated Delivery Time: {estimatedTime} minutes
        </div>
      </div>
    </div>
  );
}
