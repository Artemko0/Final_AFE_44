import Whiteness from '../whiteness/whiteness'
import './whitenessList.css'

  
const WhitenessList = ({whitenessList}) => {
    return <div className="WhitenessList">
    {whitenessList.map(item =>{
      return <Whiteness whiteness={item}/>
    })}
    </div>;
};

export default WhitenessList;