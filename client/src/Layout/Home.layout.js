import React from "react";
import FoodTab from "../Components/FoodTab";
import Navbar from "../Components/Navbar/navbar";

const HomeLayout = (props) =>{
    return(
        <>
            <div className="">
                <Navbar/>
                {/* {props.children} */}
            </div>
        </>
    )
};

export default HomeLayout;

