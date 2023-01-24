import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import "./testimonial.scss"

const Testimonial = () => {
    const [users, setUsers] = useState([]);
    const [state, setState] = useState({
        userName: "",
        fullName: "",
        age: "",
    });
    const [id, setId] = useState(undefined);

    const getData = async () => {
        const res = await axios.get("http://localhost:8080/users");
        setUsers(res.data);
    };

    useEffect(() => {
        getData();
    }, []);

    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value });

    };

    const addData = (e) => {
        e.preventDefault();

        if (!state.userName || !state.fullName || !state.age) return;

        axios.post("http://localhost:8080/users", state);
        getData();
    };

    const deleteData = async (id) => {
        await axios.delete(`http://localhost:8080/users/${id}`);
        console.log(id);
        getData();
    };

    const handleEditClick = (data) => {
        setState({ userName: data.userName, fullName: data.fullName, age: data.age });
        setId(data.id);
    };



    return (
        <>
        <div className="test"><div className="testi">
                <h1>Testimonial</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi unde impedit, necessitatibus, soluta sit quam minima expedita atque corrupti reiciendis.</p>
            </div>
            <form style={{ padding: "20px", display: "flex", justifyContent: "center", gap: 10 }} onSubmit={addData}>
                <input style={{ padding: 10 }}
                    name="userName"
                    type="text"

                    placeholder="userName"
                    onChange={handleChange}
                />
                <input style={{ padding: 10 }}
                    name="fullName"
                    type="text"

                    placeholder="fullName"
                    onChange={handleChange}
                />
                <input style={{ padding: 10 }}
                    name="age"
                    type="text"

                    placeholder="age"
                    onChange={handleChange}
                />
                <button style={{ padding: "10px 20px", backgroundColor: "green", color: "white", border: "none", borderRadius: 10 }}>add</button>
            </form>


            {users &&
                users
                    .sort((a, b) => a.id - b.id)
                    .map((user) => (

                        <div className="card-wrapper" style={{ display: "flex", justifyContent: "center", margin: 10 }} key={user.id}>
                            <div style={{ display: "flex", flexDirection: "column", width: "30%", borderRadius: 10, boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }} >
                                <span style={{ margin: 20 }}>{user.userName}</span>
                                <span style={{ margin: 20 }}>{user.fullName}</span>
                                <span style={{ margin: 20 }}>{user.age}</span>
                                <button style={{ margin: 20 }} onClick={(id) => deleteData(user.id)}>delete</button>
                                <button onClick={(id) => handleEditClick(user.name)}>edit</button>
                            </div>

                        </div>
                    ))}</div>
            
        </>
    );
};

export default Testimonial;
