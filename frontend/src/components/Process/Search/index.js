import React, { useState } from 'react';
import api from '../../../services/api';
import { useHistory } from 'react-router-dom';

import './search.css';

function ProcessSearch() {
    const [number, setNumber] = useState('');

    const history = useHistory();

    async function handleSearch(e) {
        e.preventDefault();
        try {
            history.push({
                pathname: '/process',
                state: {number}
            });
        } catch (err) {

        }

    }
    return (
        <div>
            <form onSubmit={handleSearch} className='form-search'>
                <input className="input-search" type="text" placeholder="Buscar processo"
                    value={number}
                    onChange={e => setNumber(e.target.value)}
                />
            </form>
        </div>
    )
}

export default ProcessSearch;