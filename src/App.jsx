import { useState } from "react";
import "./App.css";
import { useForm } from "react-hook-form";

function App() {
  const [customerForm, setCustomerForm] = useState([{ customers: "" }]);
  const { register, handleSubmit } = useForm();

  
  const handleCustomerFormAdd = () => {
    setCustomerForm([...customerForm, { customers: "" }]);
  };

  const handleCustomerFormRemove = () => {
    setCustomerForm([...customerForm].slice(0, -1));
  };

  const onSubmit = (data) => {
    data.customer = data.customer.slice(0,customerForm.length);
    console.log(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <legend>
            <p>Land Information</p>
          </legend>
          <div>
            <label>
              <span>Land Name</span>
            </label>
            <input
              {...register("land_name")}
              type="text"
              placeholder="Land Name"
            />
          </div>
        </fieldset>
        {customerForm.map((customer, i) => (
          <fieldset key={i}>
            <legend>
              <p>Customer Information {i}</p>
            </legend>
            <div>
              <div>
                <div>
                  <div className="form-control w-full max-w-lg">
                    <label className="label">
                      <span className="label-text font-bold text-[#887d7d]">
                        Customers Name
                      </span>
                    </label>
                    <input
                      {...register(`customer[${i}].customer_name`)}
                      type="text"
                      placeholder="Customer's Name"
                      className="input input-bordered input-sm w-full max-w-lg"
                    />
                  </div>
                </div>
                <div>
                  <div>
                    <label>
                      <span>Spouse Name</span>
                    </label>
                    <input
                      {...register(`customer[${i}].customer_spouse_name`)}
                      type="text"
                      placeholder="Spouse Name"
                    />
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div>
                    <label>
                      <span>Father Name</span>
                    </label>
                    <input
                      {...register(`customer[${i}].customer_father_name`)}
                      type="text"
                      placeholder="Father Name"
                    />
                  </div>
                </div>
                <div>
                  <div>
                    <label>
                      <span>Mother Name</span>
                    </label>
                    <input
                      {...register(`customer[${i}].customer_mother_name`)}
                      type="text"
                      placeholder="Mother Name"
                    />
                  </div>
                </div>
              </div>
            </div>
          </fieldset>
        ))}
        {customerForm.length < 2 ? (
          <p onClick={handleCustomerFormAdd}>Add Another Customer</p>
        ) : (
          <div>
            <p onClick={handleCustomerFormAdd}>
              Add Another Customer
            </p>
            <p onClick={handleCustomerFormRemove}>
              Delete Customer Field
            </p>
          </div>
        )}
        <fieldset>
          <legend>
            <p>Land Price Information</p>
          </legend>
          <div>
            <label>
              <span>Land Price</span>
            </label>
            <input
              {...register("land_price")}
              type="text"
              placeholder="Land Price"
            />
          </div>
        </fieldset>
        <fieldset>
          <legend>
            <p>Agent Information</p>
          </legend>
          <div>
            <label>
              <span>Agent Name</span>
            </label>
            <input
              {...register("agent_name")}
              type="text"
              placeholder="Agent Name"
            />
          </div>
        </fieldset>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
}

export default App;
