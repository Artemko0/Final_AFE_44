
import DB from '../../assets/DB';
import './Filter.css'

const Filter = ({filteredDB,setFilteredDB}) => {

    const onChangeCountry = (e) => {
        const  country = e.target.id;
        if(e.target.checked) {
            const  newFilteredDB = DB.filter(el => el.country === country );
            setFilteredDB(newFilteredDB);
        }
        else {
            setFilteredDB(DB);
        }
    }
    const onSelect = (e) => {
        const  sku = e.target.value;
        console.log (sku);
        if(e.target.value !== "all") {
            const  newFilteredDB = DB.filter(el => el.sku === sku );
            setFilteredDB(newFilteredDB);
        }
        else {
            setFilteredDB(DB);
        }
    }
    return (
        <div className='Filter'>
            <label>
                Туреччина
                <input id="Турция" type="checkbox" onClick={onChangeCountry}/>
            </label>
            <label>
                Україна
                <input id="Украина" type="checkbox" onClick={onChangeCountry}/>
            </label>
            <select onChange={onSelect}>
                <option value="all">Всі товари</option>
                {DB?.map((whiteness) => {
                    return <option key={whiteness.sku} value={whiteness?.sku}>{whiteness?.name}</option>;
                })}
            </select>
        </div>
    );
};

export default Filter;