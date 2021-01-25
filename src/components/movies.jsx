import React, { useState }from 'react';
import NavBar from "./navBar";
import MovieCard from "./movieCard";
const Movies = ({ match ,history}) => {
    const [visible, setVisible] = useState(false);

    const data = [
        {
          _id: '1',
          title: 'BlackList',
          posterUrl: '/blacklist.jpg',
          description:
            'Le fugitif Raymond Reddington se rend aux autorités et offre la liste de ses contacts, á la seule condition de parler á une jeune profiliste inexperimentée, Liz.',
          dailyRentalRate: 2.5,
        },
        {
          _id: '2',
          title: 'Casa de Papel',
          posterUrl: '/casadepapel.jpg',
          description:
            'Huit voleurs font une prise d otages dans la Maison royale de la Monnaie d Espagne, tandis qu un génie du crime manipule la police pour mettre son plan à exécution.',
          dailyRentalRate: 4.5,
        },
        {
          _id: '3',
          title: 'Game of Thrones',
          posterUrl: '/Game-of-Thrones.jpg',
          description:
            'Neuf familles nobles rivalisent pour le contrôle du Trône de Fer dans les sept royaumes de Westeros. Pendant ce temps, des anciennes créatures mythiques oubliées reviennent pour faire des ravages',
          dailyRentalRate: 4.5,
        },
      ];
const movie = data.filter(item => item._id==match.params.id);


if(visible){
    return ( <>
   
        <NavBar></NavBar>
        <div className="container">
            <div className="row">
                <div className="col-4">
                <MovieCard img={movie[0].posterUrl} title={movie[0].title} description={movie[0].description}></MovieCard>
        <button className="btn btn-primary" onClick={()=>{setVisible(true)}}>Watch it</button>
                </div>
                <div >
                <video  src={`/${movie[0].title}.mp4`} width="600" height="300" controls="controls" autoplay="true" />
 
        
                </div>
            </div>
        </div>

            </> );
} else{
    return ( <>
   
        <NavBar></NavBar>
        <div className="container">
            <div className="row">
                <div className="col-4">
                <MovieCard img={movie[0].posterUrl} title={movie[0].title} description={movie[0].description}></MovieCard>
        <button className="btn btn-primary" onClick={()=>{setVisible(true)}}>Watch it</button>
                </div>
                <div >
                    
        
                </div>
            </div>
        </div>
        
        

        
        
            </> );
}
    
}
 
export default Movies;