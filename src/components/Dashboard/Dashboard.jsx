import React, {useEffect} from "react";

export default function Dashboard({ title }) {
    useEffect(() => {
        document.title = title || "React App";
    }, [title]);
    return(
        <h2>Dashboard</h2>
    );
}