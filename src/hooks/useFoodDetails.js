import { useState } from "react"
const useFoodDetails = () => {
    const [count,setCount] = useState(0);

    const updateCartCount = () => {
        const newCount = count + 1;
        setCount(newCount);
    }

    // const updateTotalAmount = (id) => {
    //     const amount = document.getElementById(id);
    //     const amountNumber = parseFloat(amount.innerText);

    //     const subTotal = 
    // }

    return {
        count,
        setCount,
        updateCartCount,
    }
}

export default useFoodDetails;