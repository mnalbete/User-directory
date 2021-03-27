function Header(props) {
    return (
        <div className="jumbotron" style={{ background: "white", fontFamily: "ariel", fontWeight: "bolder", textAlign: "center" }}>
            <h1 className="display-4">Employee Yellow Pages</h1>
            <p>Search for any emplyee in our company </p>
            <input placeholder="Search by last name"
                onChange={props.handleInputChange}
                value={props.search}
                name="search"
                type="text"
                className="form-control"
                id="search"
            ></input>
            <button className="btn m-3" style={{ background: "yellow" }} onClick={props.handleFormSubmit}>search</button>
        </div>
    )
};

export default Header;
