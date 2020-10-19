import React, {Component} from "react";
import { FaRegCalendar, FaRegClock } from "react-icons/fa";

import "./LastThreeItemsSlider.css";
import img1 from "./image1.jpg";
import img2 from "./image2.jpg";
import img3 from "./image3.jpg";


export default class LastThreeItemsSlider extends Component {
    render() {
        return (
            <div className="last-articles-bar">
                <div className="main-article">
                    <div className="main-article-preview">
                        <div className="article-details-container">
                            <img className="article-background-image" src={img1} alt="article-background"/>
                            <div className="article-title">
                                <a href="" className="article-title-link">
                                    <h1>
                                        Django Rest very strong framework.
                                    </h1>
                                </a>
                            </div>
                            <div className="article-details-content">
                                <div className="datetime-created">
                                    <FaRegCalendar />18.10.20<FaRegClock />14:52
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="minor-articles">
                    <div className="minor-article-preview">
                        <div className="article-details-container">
                            <img className="article-background-image" src={img2} alt="article-background"/>
                            <div className="article-title">
                                <a href="" className="article-title-link">
                                    <h2>
                                        React is the best js library.
                                    </h2>
                                </a>
                            </div>
                            <div className="article-details-content">
                                <div className="datetime-created">
                                    <FaRegCalendar />05.10.20<FaRegClock />00:52
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="minor-article-preview">
                        <div className="article-details-container">
                            <img className="article-background-image" src={img3} alt="article-background"/>
                            <div className="article-title">
                                <a href="" className="article-title-link">
                                    <h2>
                                        Third article content.
                                    </h2>
                                </a>
                            </div>
                            <div className="article-details-content">
                                <div className="datetime-created">
                                    <FaRegCalendar />01.09.20<FaRegClock />11:23
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}