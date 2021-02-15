import React,{useState} from 'react'

const elements =[
    {id:1, mainClass: 'nav-elements-elem', indywidualClass:'github'},
    {id:2, mainClass: 'nav-elements-elem', indywidualClass:'cv'},
    {id:3, mainClass: 'nav-elements-elem', indywidualClass:'mailing'},
    {id:4, mainClass: 'nav-elements-elem', indywidualClass:'linkedIn'},
    {id:5, mainClass: 'nav-elements-elem', indywidualClass:'about'},
    {id:6, mainClass: 'nav-elements-elem', indywidualClass:'projects'}
]

const NavElements = (props) => {
    // const show = 'nav-elements-container'
    // const hide = 'nav-elements-container nav-elements-hide'
    // const[elemHide, setElemHide]= useState(hide)
    // const toggle = () => elemHide === hide ? setElemHide(show) : setElemHide(hide)
    return (
        <>
        <div className={props.props}>
        {elements.map((elem)=>(
            <div key={elem.id} className={elem.mainClass +' '+ elem.indywidualClass}></div>
        ))}
        </div>
        </>
    )
}

export default NavElements
