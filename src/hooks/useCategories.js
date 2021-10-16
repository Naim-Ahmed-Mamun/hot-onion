import { useEffect, useState } from "react";

const useCategories = () => {
    const [items,setItem] = useState([]);

    useEffect(() => {
        fetch('/categoriesData.json')
        .then(res => res.json())
        .then(data => setItem(data))
    },[]);

    return [items]
 
}

export default useCategories;