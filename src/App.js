// function Potato({foo}){
//   return <h1>I like {foo}</h1>
// }
import PropTypes from 'prop-types';

function Foo({fav}) {return <h1>I like {fav}</h1>}

function Food({name, picture, rating}){
  return (
  <div>
  <h2>I like {name}</h2>
  <h4>{rating}/5.0</h4>
  <img src={picture} alt={name} />
  </div> )
}

const foodLike = [
  {
    id : 1,
    name:'kimchi',
    image:'https://www.seriouseats.com/thmb/mANmBYm-pJfwrwHksChVWur6w9w=/1500x1125/filters:fill(auto,1)/20210527-baechu-kimchi-vicky-wasik-seriouseats-seriouseats-3-18a2d6d7d1d74a7a82cb13ed350218be.jpg',
    rating: 5,
  },
  {
    id : 2, 
    name:'cake',
    image:'https://i.ytimg.com/vi/CkkaCdEV5nY/maxresdefault.jpg',
    rating:4.5
  },
];

// function renderFood(dish){
//   return <Food name={dish.name} picture={dish.image} />;
// }

// const renderFood = dish => <Food name={dish.name} picture={dish.image} />

function App() {
  // console.log(foodLike.map(renderFood))
  return (
  <div>
    {/* { {foodLike.map(dish => (<Food name={dish.name} picture={dish.image} />))}
    foodLike.map(renderFood)}  */ 
    foodLike.map(dish =>(
      <Food key={dish.id} name={dish.name} picture={dish.image} 
      rating={dish.rating} />
    ))}
    <Foo fav="kimchi" />
    <Foo fav="ramen" />
    
    
   </div>
   )
}

Food.propTypes={
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number,
};




export default App
