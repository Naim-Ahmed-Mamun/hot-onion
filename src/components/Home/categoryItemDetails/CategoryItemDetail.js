import React, { useContext, useEffect, useState } from 'react';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useParams } from 'react-router';
import useCategories from '../../../hooks/useCategories';
import './categoryItemDetails.css';
import { Link } from 'react-router-dom';
// import useFoodDetails from '../../../hooks/useFoodDetails';
import { AuthContext } from '../../../Context/AuthProvider';

const CategoryItemDetail = () => {
    const [select, setSelect] = useState({});
    const {foodContext} = useContext(AuthContext);
    const {updateCartCount} =  foodContext;
    // console.log(count,setCount);
    const { id } = useParams();

    const [items] = useCategories();
    // console.log(items);

    useEffect(() => {
        const matched = items.find(item => item.id === id);
        setSelect(matched);
        console.log(select);
    }, [id, items, select])

    // handle Increasing
    const handleIncreasing = () => {
        const count = document.getElementById('countValue');
        const countNumber = parseInt(count.innerText);
        // console.log(countNumber);
        const countNewNumber = countNumber + 1
        count.innerText = countNewNumber; 
        // updatePrice(countNewNumber) 
        if (select?.price) {
            const amount = document.getElementById('price');
            const amountNumber = parseFloat(amount.innerText)
            console.log(amountNumber);
            const newAmount = countNewNumber * select?.price;
            console.log(newAmount);
            amount.innerText = newAmount.toFixed(2);
        }
    }
    // handle Decreeing
    const handleDecrease = () => {
        const count = document.getElementById('countValue');
        const countNumber = parseInt(count.innerText);
        const countNewNumber = countNumber - 1
        if (countNumber <= 0) {
            console.log('invalid value');
            return;
        }
        count.innerText = countNewNumber;
        if (select?.price) {
            const amount = document.getElementById('price');
            const amountNumber = parseFloat(amount.innerText)
            console.log(amountNumber);
            const newAmount = countNewNumber * select?.price;
            console.log(newAmount);
            amount.innerText = newAmount.toFixed(2);
        }
    }


    return (
        <>
            <div className="item_detail_wrapper">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-7">
                            <div className="item_detail">
                                <h2>{select?.title}</h2>
                                <p>{select?.detailsDesc}</p>
                                <div className="d-flex align-items-center mb-4">
                                    <h1> $<span id="price">{select?.price}</span></h1>
                                    <div className="count">
                                        <FontAwesomeIcon onClick={handleDecrease} className="minusBtn" icon={faMinus} />
                                        <span id="countValue">1</span>
                                        <FontAwesomeIcon onClick={handleIncreasing} className="plusBtn" icon={faPlus} />
                                    </div>
                                </div>
                                <Link to="/placeOrder">
                                    <button onClick={updateCartCount} className="addCart_btn">Add Cart</button>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="item_img">
                                <img src={select?.imgUrl} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CategoryItemDetail;