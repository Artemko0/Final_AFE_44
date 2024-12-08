import Filter from "../filter/Filter";
import WhitenessList from "../whitenessList/WhitenessList";
const MainPage = ({filteredDB, setFilteredDB }) => {
    return(
        <>
            <Filter filteredDB={filteredDB} setFilteredDB={setFilteredDB}/>
            <WhitenessList whitenessList={filteredDB}/>
        </>
    )

}

export default MainPage;