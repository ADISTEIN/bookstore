import React from 'react'
import '../App';
import { useAppContext } from './context/appContext';

function Favourites() {

    const {favourites,addToFavourites,removeFromFavourites} = useAppContext();

    console.log('favourites are', favourites)

    const favouritesChecker =(id) => {
        const boolean = favourites.some((book)=> book.id == id);
        return boolean
    }


  return (
    <div className='favourites'>
        {favourites.length > 0 ? favourites.map((book)=>(
            <div key={book.id} className='book'>
                <div>
                    <h4>{book.title}</h4>
                    </div>
                <div>
                    <img src={book.image_url} alt='#'/>
                    </div>
                <div>
                    {favouritesChecker(book.id) ?(

                    <button onClick={()=> removeFromFavourites(book.id)}>
                    Remove from Fav
                    </button>
                ):( <button onClick={()=> addToFavourites(book)}>
                        Add to Fav
                        </button>
                        )}
                    
                    </div>
            </div>
        )):<h1>You dont have any Fav books yet</h1>}
    </div>
  )
}

export default Favourites