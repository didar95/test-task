// import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

export  default class Main extends React.Component {
    state = {
        users: [],
        form: {
            lastName: '',
            firstName: '',
            ageName: null,
        }
    }

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
          .then(res => {
            const persons = res.data;
            this.setState({ users: persons });
          })
      }

  render () {
    return (
        <div className="App">
        <h1>
            страница1
        </h1>
        <form>
            <input className='inp1' type='text' placeholder='Фамилия'/>
            <input className='inp2' type='text' placeholder='Имя' />
            <input className='inp2' type='text' placeholder='Возраст' />
            <button className='search' type='submit'>Поиск</button>
        </form>
        <Link to="/result" >страница2</Link>
        <h2 className='name'> Список пользователей </h2>
        <ul className='list-youser'>
            { this.state.users.map(person => <li key={person.id}>{person.name}</li>)}
        </ul>
    </div>
    )
  };
}

