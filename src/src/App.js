import React, { useState, useEffect } from 'react'
import './App.css';
import axios from 'axios';
import Header from './Component/Header/Header';
import Posts from './Component/Posts/Posts';
import Pagination from './Component/Pagination';
import Details from './Component/Details/Details';
import { NavLink, Route, Switch } from 'react-router-dom';

const App = () => {

    const [listCharacter, setListCharacter] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);

    // to get the id in the component
    const [charId, setCharId] = useState();

    const getTheData = async () => {
        setLoading(true);
        const res = await axios.get('https://www.breakingbadapi.com/api/characters');
        setListCharacter(res.data);
        // console.log(res.data);
        setLoading(false);
    }


    useEffect(() => {
        getTheData();
    }, [])

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentList = listCharacter.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNo) => {
        setCurrentPage(pageNo)
    }

    // character details
    const characterDetails = (cid) => {
        // console.log(cid);
        setCharId(cid);
    }

    // list character total
    const totalChar = listCharacter.length;

    return (
        <div className="container mt-3">
            <Header />
            <Posts listCharacter={currentList} loading={loading} characterDetails={characterDetails} lastIndex={totalChar} />
            <Pagination currentListLength={currentList.length} totalChar={listCharacter.length} paginate={paginate} />
            <Details charId={charId} currentList={currentList} />
        </div>
    )
}

export default App
