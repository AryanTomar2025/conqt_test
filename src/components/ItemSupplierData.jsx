import { useState } from "react";
import "../App.css";
const ItemSupplierData = () => {
  const [selectedSection, setSelectedSection] = useState("item");
  const [formData, setFormData] = useState({
    itemName: "",
    quantity: "",
    unitPrice: "",
    dateOfSubmission: "",
    supplierName: "",
    state: "",
    city: "",
    email: "",
    phone: "",
  });

  const [submittedData, setSubmittedData] = useState(null);
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
  };
  const isSubmitDisabled = 
    (selectedSection === "item" &&
      (!formData.itemName ||
        !formData.quantity ||
        !formData.unitPrice ||
        !formData.dateOfSubmission)) ||
    (selectedSection === "supplier" &&
      (!formData.supplierName ||
        !formData.state ||
        !formData.city ||
        !formData.email ||
        !formData.email ||
        !formData.phone));  // error handling we need to fill all section then only we can submit data , we can even apply  checking on each fields

  return (
    <>
      <h2>Item and Supplier Input Fields</h2>
      <label>
        <input
          type="radio"
          checked={selectedSection === "item"}
          onChange={() => setSelectedSection("item")}
        />
        Item
      </label>
      <label>
        <input
          type="radio"
          checked={selectedSection === "supplier"}
          onChange={() => setSelectedSection("supplier")}
        />
        supplier
      </label>
      
      {selectedSection === "item" && ( // if selected section is item then we will show item section 
        <div>
          <h3>Item Section</h3>
          <label>
            Item Name
            <input style={{width:"100%"}}
              type="text"
              name="itemName"
              value={formData.itemName}
              onChange={handleChange}
            />
          </label>
          <label>
            Unit Price
            <input style={{width:"100%"}}
              type="text"
              name="unitPrice"
              value={formData.unitPrice}
              onChange={handleChange}
            />
          </label>
          <label>
            Quantity
            <input style={{width:"100%"}}
              type="text"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
            />
          </label>
          <label>
            Date Of Submission
            <input style={{width:"100%"}}
              type="date"
              name="dateOfSubmission"
              value={formData.dateOfSubmission}
              onChange={handleChange}
            />
          </label>
        </div>
      )}
      {selectedSection === "supplier" && ( // if selected section is supplier then we will show supplier section
        <div>
          <h3>Supplier Section</h3>
          <label>
            Supplier Name:
            <input style={{width:"100%"}}
              type="text"
              name="supplierName"
              id=""
              value={formData.supplierName}
              onChange={handleChange}
            />
          </label>
          <label>
            Country:
            <select style={{width:"100%"}}
              name="country"
              id=""
              value={formData.country}
              onChange={handleChange}
            >
              <option value="">Select Country </option>{" "}
              <option value="USA">USA</option>{" "}
              <option value="India">India</option>
            </select>
          </label>
          <label>
            State:
            <select style={{width:"100%"}}
              name="state"
              id=""
              value={formData.state}
              onChange={handleChange}
            >
              <option value="">Select State </option>{" "}
              <option value="USA">New York</option>{" "}
              <option value="India">Uttar Pradesh</option>
            </select>
          </label>
          <label>
            City:
            <select style={{width:"100%"}}
              name="city"
              id=""
              value={formData.city}
              onChange={handleChange}
            >
              <option value="">Select City </option>{" "}
              <option value="USA">Los Angeles</option>{" "}
              <option value="India">Noida</option>
            </select>
          </label>
          <label>
            Email Address:
            <input style={{width:"100%"}}
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          <label>
            Phone Number:
            <input style={{width:"100%"}}
              type="number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </label>
        </div>
      )}
      <button type="submit" onClick={handleSubmit} disabled={isSubmitDisabled}>
        Submit
      </button>

      {submittedData && (
        <div>
          <h3>Submitted Data</h3>
          {selectedSection === "item" && (
            <>
              <p>Item Name: {submittedData.itemName}</p>
              <p>Quantity: {submittedData.quantity}</p>
              <p>Unit Price: {submittedData.price}</p>
              <p>Date Of Submission:{submittedData.dateOfSubmission}</p>
            </>
          )}
          {selectedSection === "supplier" && (
            <>
              <p>Supplier Name: {submittedData.supplierName}</p>
              <p>Country: {submittedData.country}</p>
              <p>State: {submittedData.state}</p>
              <p>Email:{submittedData.email}</p>
              <p>Phone:{submittedData.phone}</p>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default ItemSupplierData;
