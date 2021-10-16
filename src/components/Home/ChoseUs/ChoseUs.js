import React from 'react';
import './ChoseUs.css';
import chose_1 from '../../../img/Image/chose_1.png';
import chose_2 from '../../../img/Image/chose_2.png';
import chose_3 from '../../../img/Image/chose_3.png';
import choseIcon_1 from '../../../img/ICON/chose_icon_1.png';
import choseIcon_2 from '../../../img/ICON/chose_icon_2.png';
import choseIcon_3 from '../../../img/ICON/chose_icon_3.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const ChoseUs = () => {
    const choseUsData = [
        {
            id: 1,
            img: chose_1,
            icon: choseIcon_1,
            title: 'Fast Delivery',
            desc: "Keep your system in sync with automated web hook based notification each time link is paid and how we dream about your future",
            link: 'see more',
            arrowIcon: <FontAwesomeIcon icon={faArrowRight} />
        },
        {
            id: 2,
            img: chose_2,
            icon: choseIcon_2,
            title: 'A Good Auto Responder',
            desc: "Keep your system in sync with automated web hook based notification each time link is paid and how we dream about your future",
            link: 'see more',
            arrowIcon: <FontAwesomeIcon icon={faArrowRight} />
        },
        {
            id: 3,
            img: chose_3,
            icon: choseIcon_3,
            title: 'Home Delivery',
            desc: "Keep your system in sync with automated web hook based notification each time link is paid and how we dream about your future",
            link: 'see more',
            arrowIcon: <FontAwesomeIcon icon={faArrowRight} />
        }
    ]
    return (
        <>
            <section className="choseUs_section">
                <div className="container">
                    <div className="section_title text-center">
                        <h2>Why You Chose Us</h2>
                        <p>Barton waited twenty always repair in within we do. An delighted Offending curiosity
                            my is dashwoods at. Boy Prosperous increasing surrounded</p>
                    </div>
                    <div className="row mt-5">
                        {
                            choseUsData.map(choseItem => {
                               
                                return (
                                    <div className="col-lg-4">
                                        <div className="choseItem_box">
                                            <img className="img" src={choseItem.img} alt="" />
                                            <div className="d-flex mt-3">
                                                <div className="icon">
                                                   <img src={choseItem.icon} alt="" />
                                                </div>
                                                <div className="chose_text">
                                                    <h3>{choseItem.title}</h3>
                                                    <p>{choseItem.desc}</p>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    );
};

export default ChoseUs;