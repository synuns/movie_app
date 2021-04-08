import PropTypes from "prop-types";

const foodILike = [
  {
      id : 1,
      name : "Chicken",
      image : "https://images.unsplash.com/photo-1585039261108-ec658b915e37?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=728&q=80",
      rating : 5.0
  },
  {
      id : 2,
      name : "Pizza",
      image : "https://images.unsplash.com/photo-1574126154517-d1e0d89ef734?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80",
      rating : 4.6
  },
  {
      id : 3,
      name : "Hamburger",
      image : "https://images.unsplash.com/photo-1561758033-d89a9ad46330?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      rating : 4.8
  },
  {
      id : 4,
      name : "spaghetti",
      image : "https://images.unsplash.com/photo-1608334481162-bba440193a20?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      rating : 4.5
  },
  {
      id : 5,
      name : "yogurt",
      image : "https://images.unsplash.com/reserve/YFdIoUsRJCAehcoUnQaS_Straw.jpg?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1047&q=80",
      rating : 4.8
  },
];

function Food({name, picture, rating}) {
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  )
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
}

function App() {
  return (
    <div className="App">
      {foodILike.map(dish => (
        <Food 
          key={dish.id} 
          name={dish.name} 
          picture={dish.image} 
          rating={dish.rating}
        />
      ))}
    </div>
  );
}

export default App;