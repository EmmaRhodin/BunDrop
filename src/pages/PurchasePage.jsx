import { useLocation } from "react-router-dom";
import { useState } from "react";

export default function PurchasePage() {
  const location = useLocation();
  const { cartItems, totalPrice } = location.state || {
    cartItems: [],
    totalPrice: 0,
  };

  // State to store the form data and errors
  const [formData, setFormData] = useState({
    name: "",
    city: "",
    streetName: "",
    houseNumber: "",
    apartmentFloor: "",
    cardNumber: "",
    cardCVV: "",
    cardDate: "",
    swishPhoneNumber: "",
  });

  const [errors, setErrors] = useState({});
  const [paymentMethod, setPaymentMethod] = useState(""); // State to track payment method

  // Regular expressions
  const lettersAndSpaces = /^[a-zA-Z\s]*$/;
  const numbersOnly = /^[0-9]*$/;
  const creditCardRegex = /^(\d{4}[- ]?){3}\d{4}$/;
  const cvvRegex = /^[0-9]{0,3}$/; // Regex to ensure only 3 digits are allowed
  const expiryDateRegex = /^\d{2}\/\d{2}$/; // Regex to ensure format 00/00
  const phoneNumberRegex = /^(\+\d{1,3}[-\s]?)?\d{7,15}$/;

  // Validate the form inputs
  const validateForm = () => {
    const newErrors = {};

    // Validate delivery information
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (!lettersAndSpaces.test(formData.name)) {
      newErrors.name = "Name can only contain letters and spaces";
    }

    if (!formData.city.trim()) {
      newErrors.city = "City is required";
    } else if (!lettersAndSpaces.test(formData.city)) {
      newErrors.city = "City can only contain letters and spaces";
    }

    if (!formData.streetName.trim()) {
      newErrors.streetName = "Street name is required";
    } else if (!lettersAndSpaces.test(formData.streetName)) {
      newErrors.streetName = "Street name can only contain letters and spaces";
    }

    if (!formData.houseNumber.trim()) {
      newErrors.houseNumber = "House number is required";
    } else if (!numbersOnly.test(formData.houseNumber)) {
      newErrors.houseNumber = "House number can only contain numbers";
    }

    // Validate payment information based on selected payment method
    if (paymentMethod === "Credit Card") {
      if (!formData.cardNumber.trim()) {
        newErrors.cardNumber = "Card number is required";
      } else if (!creditCardRegex.test(formData.cardNumber)) {
        newErrors.cardNumber = "Invalid card number format";
      }

      if (!formData.cardCVV.trim()) {
        newErrors.cardCVV = "CVV is required";
      } else if (
        !cvvRegex.test(formData.cardCVV) ||
        formData.cardCVV.length !== 3
      ) {
        newErrors.cardCVV = "CVV must be exactly 3 digits";
      }

      if (!formData.cardDate.trim()) {
        newErrors.cardDate = "Expiry date is required";
      } else if (!expiryDateRegex.test(formData.cardDate)) {
        newErrors.cardDate = "Expiry date must be in the format MM/YY";
      }
    } else if (paymentMethod === "Swish") {
      if (!formData.swishPhoneNumber.trim()) {
        newErrors.swishPhoneNumber = "Phone number is required";
      } else if (!phoneNumberRegex.test(formData.swishPhoneNumber)) {
        newErrors.swishPhoneNumber = "Invalid phone number format";
      }
    } else {
      // If no payment method is selected
      newErrors.paymentMethod = "Please select a payment method";
    }

    // Validate apartment floor only if it's filled
    if (formData.apartmentFloor && !numbersOnly.test(formData.apartmentFloor)) {
      newErrors.apartmentFloor = "Apartment floor can only contain numbers";
    }

    return newErrors;
  };

  // Handle input changes and enforce validation on each input
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Check for alphabetic inputs for name, city, and streetName
    if (
      (name === "name" || name === "city" || name === "streetName") &&
      !lettersAndSpaces.test(value)
    ) {
      return; // Ignore invalid characters for alphabetic fields
    }

    // Special handling for phone number
    if (name === "swishPhoneNumber") {
      // Allow only digits, spaces, and "+"
      const newValue = value.replace(/[^+\d\s]/g, "");
      setFormData((prevData) => ({
        ...prevData,
        [name]: newValue,
      }));
      return;
    }

    // Check for numeric inputs only for houseNumber and apartmentFloor
    if (
      (name === "houseNumber" || name === "apartmentFloor") &&
      !numbersOnly.test(value)
    ) {
      return; // Ignore invalid characters for numeric fields
    }

    // Handle CVV field to accept only up to 3 digits
    if (name === "cardCVV" && !cvvRegex.test(value)) {
      return; // Ignore invalid characters for CVV field
    }

    // Allow digits and "/" for Expiry Date field
    if (name === "cardDate") {
      // Allow only digits and "/"
      const newValue = value.replace(/[^0-9\/]/g, "");
      setFormData((prevData) => ({
        ...prevData,
        [name]: newValue,
      }));
      return;
    }

    // Allow any characters for credit card number
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      // No errors, proceed to next step (e.g., confirm purchase)
      console.log("Form data:", formData);
      // You can add further logic to proceed with the checkout or payment
    } else {
      // Set errors to show the user
      setErrors(newErrors);
    }
  };

  return (
    <div className="flex justify-center min-h-screen">
      <div className="p-8 text-center">
        <h1 className="text-4xl font-bold mb-8">Checkout</h1>
        <ul className="mb-8">
          {cartItems.length > 0 ? (
            cartItems.map((item, index) => (
              <li key={index} className="mb-2">
                {item.title} - ${item.price.toFixed(2)} x {item.quantity}
              </li>
            ))
          ) : (
            <li>Your cart is empty</li>
          )}
        </ul>
        <div className="text-xl font-bold">Total: ${totalPrice.toFixed(2)}</div>

        <div className="text-3xl mt-4 font-bold">Delivery Information</div>
        {/* Form for delivery information */}
        <form className="mt-4" onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="border p-2 w-full"
              placeholder="Name"
            />
            {errors.name && <div className="text-red-500">{errors.name}</div>}
          </div>

          <div className="mb-4">
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              className="border p-2 w-full"
              placeholder="City"
            />
            {errors.city && <div className="text-red-500">{errors.city}</div>}
          </div>

          <div className="mb-4">
            <input
              type="text"
              name="streetName"
              value={formData.streetName}
              onChange={handleInputChange}
              className="border p-2 w-full"
              placeholder="Street Name"
            />
            {errors.streetName && (
              <div className="text-red-500">{errors.streetName}</div>
            )}
          </div>

          <div className="mb-4">
            <input
              type="text"
              name="houseNumber"
              value={formData.houseNumber}
              onChange={handleInputChange}
              className="border p-2 w-full"
              placeholder="House Number"
            />
            {errors.houseNumber && (
              <div className="text-red-500">{errors.houseNumber}</div>
            )}
          </div>

          <div className="mb-4">
            <input
              type="text"
              name="apartmentFloor"
              value={formData.apartmentFloor}
              onChange={handleInputChange}
              className="border p-2 w-full"
              placeholder="Apartment Floor (Optional)"
            />
            {errors.apartmentFloor && (
              <div className="text-red-500">{errors.apartmentFloor}</div>
            )}
          </div>

          <div className="text-3xl mt-10 font-bold">Payment Options</div>
          <div className="mb-4">
            <button
              type="button"
              onClick={() => setPaymentMethod("Credit Card")}
              className={`bg-blue-500 text-white p-3 w-28 mr-2 mt-4 rounded ${
                paymentMethod === "Credit Card" ? "bg-blue-700" : ""
              }`}
            >
              Credit Card
            </button>
            <button
              type="button"
              onClick={() => setPaymentMethod("Swish")}
              className={`bg-blue-500 text-white p-3 w-28 ml-2 mt-4 rounded ${
                paymentMethod === "Swish" ? "bg-blue-700" : ""
              }`}
            >
              Swish
            </button>
          </div>

          {paymentMethod === "Credit Card" && (
            <div className="mt-4">
              <div className="mb-4">
                <input
                  type="text"
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleInputChange}
                  className="border p-2 w-full"
                  placeholder="Card Number"
                />
                {errors.cardNumber && (
                  <div className="text-red-500">{errors.cardNumber}</div>
                )}
              </div>

              <div className="mb-4">
                <input
                  type="text"
                  name="cardCVV"
                  value={formData.cardCVV}
                  onChange={handleInputChange}
                  className="border p-2 w-full"
                  placeholder="CVV"
                />
                {errors.cardCVV && (
                  <div className="text-red-500">{errors.cardCVV}</div>
                )}
              </div>

              <div className="mb-4">
                <input
                  type="text"
                  name="cardDate"
                  value={formData.cardDate}
                  onChange={handleInputChange}
                  className="border p-2 w-full"
                  placeholder="Expiry Date (MM/YY)"
                />
                {errors.cardDate && (
                  <div className="text-red-500">{errors.cardDate}</div>
                )}
              </div>
            </div>
          )}

          {paymentMethod === "Swish" && (
            <div className="mt-4">
              <div className="mb-4">
                <input
                  type="text"
                  name="swishPhoneNumber"
                  value={formData.swishPhoneNumber}
                  onChange={handleInputChange}
                  className="border p-2 w-full"
                  placeholder="Phone Number"
                />
                {errors.swishPhoneNumber && (
                  <div className="text-red-500">{errors.swishPhoneNumber}</div>
                )}
              </div>
            </div>
          )}

          {errors.paymentMethod && (
            <div className="text-red-500 mb-4">{errors.paymentMethod}</div>
          )}

          <button
            type="submit"
            className="bg-indigo-600 text-white p-3 w-full mt-10 rounded"
          >
            Confirm Purchase
          </button>
        </form>
      </div>
    </div>
  );
}
