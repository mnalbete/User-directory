function Filters({ handleButtonLastNameSort,handleButtonFirstNameSort }) {
    return (
        <div className="card mb-5" style={{ background: "white", fontWeight: "bolder", textAlign: "center", fontFamily: "ariel" }}>
            <div className="card-body">

                <div className="form-group">
                    <button type="text" className="btn m-3" style={{ background: "yellow" }} onClick={handleButtonLastNameSort}>Sort all Employees by Last Name</button>
                    <br/>
                    <button type="text" className="btn m-3" style={{ background: "yellow" }} onClick={handleButtonFirstNameSort}>Sort all Employees by First Name</button>
                </div>

            </div>
        </div>
    )
};

export default Filters;