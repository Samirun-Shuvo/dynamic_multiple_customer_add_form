

const CustomerForm = ({ onRemove }) => {
    return (
        <div className="customer-form">
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" required />
  
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" required />
  
        {/* Optional: Add a "Remove" button to remove the customer form */}
        <button onClick={onRemove}>Remove</button>
      </div>
    );
};

export default CustomerForm;