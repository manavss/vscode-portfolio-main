function SimpleForm() {
  return (
    <form>
      <div>
        <label>Name</label>
        <input type="text" />
      </div>
      <div>
        <label>Email</label>
        <input type="email" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default SimpleForm;
