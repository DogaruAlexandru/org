function Form() {
  return (
    <div
      className="bg-bg shadow-lg px-4 py-8 mx-12 rounded-lg border border-text
      font-dancing-script text-center text-text font-bold text-3xl"
    >
      <form className="" action="#" method="POST">
        <div className="flex">
          <label htmlFor="name" className="">
            Name
          </label>
          <div className="ms-2">
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              required
              className=""
            />
          </div>
        </div>

        <div className="flex">
          <label htmlFor="comming" className="">
            Comming
          </label>
          <div className="ms-2">
            <input id="comming" name="comming" type="checkbox" className="" />
          </div>
        </div>

        <div className="flex">
          <label htmlFor="accompanied" className="">
            Accompanied
          </label>
          <div className="ms-2">
            <input
              id="accompanied"
              name="accompanied"
              type="checkbox"
              className=""
            />
          </div>
        </div>

        <div className="flex">
          <label htmlFor="menu" className="">
            Vegan menu
          </label>
          <div className="ms-2">
            <input id="menu" name="menu" type="checkbox" className="" />
          </div>
        </div>

        <div>
          <button type="submit" className="">
            Send
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
