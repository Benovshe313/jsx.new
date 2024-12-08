import { useState } from "react"
import { products } from "../assets/data"

import styled from "styled-components"
import AddForm from "../Products/AddForm"
import ProductList from "../Products/ProductList"
import BasketItems from "../Products/BasketItems"

function MainComponent() {
    const [array, setArray] = useState([...products])
    const [basket, setBasket] = useState([])
   
    return (
        <PageMain>
            <AddForm array = {array} setArray = {setArray} /> 
            <ProductList
                array={array}
                setArray={setArray}
                basket={basket}
                setBasket={setBasket} />
            <BasketItems basket={basket} />
        </PageMain>
    )
}

export default MainComponent

const PageMain = styled.main`
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

