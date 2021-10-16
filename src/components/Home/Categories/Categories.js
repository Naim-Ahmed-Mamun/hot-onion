import React, { useEffect } from 'react';
// import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import useCategories from '../../../hooks/useCategories';
import './Categories.css';

const Categories = () => {
    const [items] = useCategories();

    const [menuItem, setMenuItem] = useState(items);
    useEffect(() => {
        setMenuItem(items);
    }, [items])
    console.log(menuItem);

    const handleCategoryItem = (category) => {
        if (category === 'all') {
            setMenuItem(items);
            return
        }

        const filterItems = items.filter(selectedItem => selectedItem.category === category);
        setMenuItem(filterItems);

    }
    // active class
    // const filterBtn = document.querySelector('.categories_btns');
    document.addEventListener('click',(e) => {
        if(e.target.classList.contains('filter_btn')){
            document?.querySelector('.active')?.classList.remove('active')
            e.target?.classList.add('active');
        }
    })
    return (
        <>
            <section className="categories">
                <div className="container">
                    <div className="categories_btns">
                        <div>
                            <button className="filter_btn active" onClick={() => handleCategoryItem('all')}>All</button>
                        </div>
                        <div>
                            <button className="filter_btn" onClick={() => handleCategoryItem('breakfast')}>Breakfast</button>
                        </div>
                        <div>
                            <button className="filter_btn" onClick={() => handleCategoryItem('lunch')}>Lunch</button>
                        </div>
                        <div>
                            <button className="filter_btn" onClick={() => handleCategoryItem('dinner')}>Dinner</button>
                        </div>
                    </div>
                    <div className="row mt-5">
                        {
                            menuItem.map(item => {
                                return (

                                    <div key={item.id} className="col-lg-4">
                                        <div className="categoryItem shadow text-center p-4 radius mb-3">
                                            <img src={item.imgUrl} alt="" />
                                            <div className="item_content mt-3">
                                                <h3>{item.title}</h3>
                                                <p>{item.desc}</p>
                                                <h5>Price: {item.price}</h5>
                                            </div>
                                            <Link to={`/categoryItemDetails/${item.id}`}>
                                                <button className="btn btn-info">Details</button>
                                            </Link>
                                        </div>
                                    </div>

                                )
                            })
                        }
                    </div>
                    <div className="text-center">
                        <button className="checkout mt-5 text-center btn btn-dark">Checkout your food</button>
                    </div>
                </div>

            </section>
        </>
    );
};

export default Categories;