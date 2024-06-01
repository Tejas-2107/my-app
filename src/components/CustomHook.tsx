import React, { useEffect, useState } from 'react'

const CustomHook = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://api.github.com/users");
            const result = await response.json();
            setData(result);
        };

        fetchData();
    }, [])
    return data;
}

export default CustomHook
