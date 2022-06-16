import React from 'react';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../heroes/HeroCard';
import { getHeroesByName } from '../../selectors/getHeroesByName';

export const SearchScreen = ({ history }) => {
  
  const location = useLocation();
  const { q = '' } = queryString.parse ( location.search );

  const [ formValues, handledInputChange ] = useForm ({
      searchText: q
    });
    
    const { searchText } = formValues;

    const heroesFiltered = getHeroesByName( searchText ) ;
    
  const handleSearch = (e) => {
    e.preventDefault();
    history.push(`?q=${ searchText }`);
  }
  
  return (
    <div>
    <h1>SearchScreen</h1>
    <hr/>

    <div className='row'>
        <div className='col-5'>
            <h4> Search Form </h4>
            <hr/>

            <form onSubmit={ handleSearch }>
                <input
                    type='text'
                    className='form-control'
                    placeholder='Find your hero'
                    name='searchText'
                    value= { searchText }
                    onChange= { handledInputChange }
                    autoComplete='off'
                />

                <button
                    type='submit'
                    className='btn m-2 btn-block btn-outline-primary mt-3'
                >
                    Search...
                </button>
            </form>


        </div>
    
        <div className='col-7'>

            <h4> Result </h4>
            <hr/>
           
            { 
                (q ==='' && heroesFiltered.length === 0) 
                    && 
                    <div className="alert alert-info">
                        Search a hero
                    </div>
            }

           


            {
                heroesFiltered.map( hero => (
                    <HeroCard
                        key={ hero.id }
                        { ...hero }
                    />
                ))
            }
            
        </div>
    </div>
    </div>
  )
}
