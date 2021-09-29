import React, { useState } from "react";
import Filter from "../cards/filter/filter";

import './tab.css'

const Tab = () => {
    const [ button, setButton ] = useState(0)
    const [ press0, setPress0 ] = useState('tab-active')
    const [ press1, setPress1 ] = useState('tab')
    const [ press2, setPress2 ] = useState('tab') 
    const buttonHandler0 = () => {
        setButton(0)
        setPress0('tab-active')
        setPress1('tab')
        setPress2('tab')
    }
    const buttonHandler1 = () => {
        setButton(1)
        setPress0('tab')
        setPress1('tab-active')
        setPress2('tab')
    }
    const buttonHandler2 = () => {
        setButton(2)
        setPress0('tab')
        setPress1('tab')
        setPress2('tab-active')
    }
    
    return (
        <>
            <nav className="tabs">
                <button className={press0} onClick={buttonHandler0}>{`🦸 Filmes Favoritos`}</button>
                <button className={press1} onClick={buttonHandler1}>{`📚 Mangás Predilétos`}</button>
                <button className={press2} onClick={buttonHandler2}>{`📺 Melhores Animes`}</button>
            </nav>
            <Filter number={button}/>
        </>
        
    )
}

export default Tab
