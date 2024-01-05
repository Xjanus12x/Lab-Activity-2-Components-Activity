import React, { Component } from 'react';


export default class BookList extends Component {
    favoriteBooks() {
        return <>
            <ul>
                <li>Sword Art Online</li>
                <li>Boku No Pico</li>
                <li>Berserk <Gluttony></Gluttony></li>
            </ul>
            
        </>
    }
}