import { useState, useCallback } from "react";

type Name = {
  firstName: string;
  lastName: string;
};

function App() {
  const [name, setName] = useState<Name>({
    firstName: "",
    lastName: "",
  });
  const [submittedName, setSubmittedName] = useState<Name | null>(null);

  const changeName = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const { name: fieldName, value } = event.target;
    setName((prevName) => ({
      ...prevName,
      [fieldName]: value,
    }));
  }, []);

  const handleSubmit = useCallback((event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmittedName(name);
    // Reset form fields after submission
    setName({
      firstName: "",
      lastName: "",
    });
  }, [name]);

  return (
    <>
      <h1>Full Name Display</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          onChange={changeName}
          value={name.firstName}
          required
        />
        <br />
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          onChange={changeName}
          value={name.lastName}
          required
        />
        <br />
        <button type="submit">Submit</button>
      </form>
      {submittedName && (
        <p>
          Full Name : {submittedName.firstName} {submittedName.lastName}
        </p>
      )}
    </>
  );
}

export default App;
