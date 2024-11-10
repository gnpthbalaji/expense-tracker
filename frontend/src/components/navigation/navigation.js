import React from "react";
import avatar from "../../img/avatar.png";
import styled from "styled-components";
import { navItems } from "../../utils/navitems";

function Navigation ({active, setActive}){
    return (
        <NavStyled>
            <div className="user-con">
                <img src={avatar} alt="avatar"/>
                <div className="text">
                    <h3>John Doe</h3>
                    <p>Your Money</p>
                </div>
            </div>
            <ul className="nav-items">
                {navItems.map((item) => {
                    return <li key={item.id} onClick={() => setActive(item.id)} className={active === item.id ? 'active': ' '}>
                        {item.icon}
                        <span>{item.title}</span>
                        </li>
                })}
            </ul>
        </NavStyled>

    )
}

const NavStyled = styled.nav`
    padding: 2rem 1.5rem;
    width: 350px;
    height: 100%;
    background-color: var(--secondary-color);
    border: 1px solid var(--color-grey);
    backdrop-filter: blur(5px);
    border-radius: 10px;
    flex-direction: column;
    justify-content: space-between;
    gap: 2rem;
    .user-con{
        height: 70px;
        display: flex;
        align-items: center;
        gap: 1rem;
        img{
            width: 50px;
            height: 50px;
            border-radius: 50%;
            object-fit: cover;
        }
    }
    p{
        font-size: 1rem;
        color: var(--color-accent);
    }
    .nav-items{
    flex: 1;
    display: flex;
    flex-direction: column;
    li{
        display: grid;
        grid-template-columns:40px auto;
        align-items: center;
        margin: 1rem 0;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
        &:hover{
            background-color: var(--color-hover);
            border-radius: 5px;
            color: var(--primary-color);
        }
        i{
            color: var(--color-accent);
            font-size: 1.2rem;
        }
    }
    .active{
        background-color: var(--color-hover);
        border-radius: 5px;
        color: var(--primary-color);
    }
    }
`;

export default Navigation;