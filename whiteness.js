import './whiteness.css';
const Whiteness = ({whiteness}) => {
    const {name,price,gallery}= whiteness
    return(<div className="whiteness">
        <img src={gallery[0]} alt={name}/>
        <p>Name:{name}</p>
        <p>Price:{price}</p>
    </div>)
}

export default Whiteness