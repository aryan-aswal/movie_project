import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./style.scss";
import { IoStar } from "react-icons/io5";
import useFetch from "../../../hooks/useFetch";

import Img from "../../../components/lazyLoadImage/Img";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";

const HeroBanner = () => {
    const [ title, setTitle ] = useState('');
    const [ desc, setDesc ] = useState('');
    const [ rating, setRating ] = useState(0);

    const [background, setBackground] = useState("");
    const [query, setQuery] = useState("");
    const navigate = useNavigate();
    const { url } = useSelector((state) => state.home);
    const { data, loading } = useFetch("/movie/upcoming");

    useEffect(() => {
        const randomNumber = Math.floor(Math.random() * 20)
        const bg = "https://image.tmdb.org/t/p/original" + data?.results?.[randomNumber]?.backdrop_path;
        setTitle(data?.results?.[randomNumber].title);
        setDesc(data?.results?.[randomNumber].overview);
        setRating(data?.results?.[randomNumber].vote_average.toFixed(1));
        setBackground(bg);
    }, [data]);

    const searchQueryHandler = (event) => {
        if (event.key === "Enter" && query.length > 0) {
            navigate(`/search/${query}`);
        }
    };

    return (
        <div className="heroBanner">
            <div>
                {!loading && (
                    <div className="backdrop-img">
                        <Img src={background}  className="main-img"/>
                    </div>
                )}
            </div>
            <div className='hero-banner-info'>
                <div className='main-heading'>Rate Movies And TV Series</div>
                <div className='hero-info'>
                    <h1 className='title'>{title}</h1>
                    <p className='rating'><IoStar/> {rating}</p>
                    <p className='description'>{desc}</p>
                </div>
            </div>

            <div className="opacity-layer"></div>
        </div>
    );
};

export default HeroBanner;
