import React from "react";
import styled from "styled-components";
import { bitcoin, book, calender, card, circle, clothing, comment, dollar, extra, food, freelance, medical, money, piggy, stocks, takeaway, trash, tv } from "../../utils/icons";
import Button from "../button/button";


function IncomeItem({
    id,
    title,
    amount,
    date,
    type,
    category,
    description,
    deleteItem,
    indicatorColor,

}) {
    const formattedDate = new Date(date).toLocaleDateString('en-US', {
        month: '2-digit',
        day: '2-digit',
        year: 'numeric'
    });

    const categoryIcon = () => {
        switch (category) {
            case 'salary':
                return money;
            case 'business':
                return freelance
            case 'investment':
                return stocks;
            case 'extraincome':
                return card;
            case 'savings':
                return piggy;
            case 'others':
                return dollar;
            default:
                return extra;
        }
    };



    const expenseCatIcon = () => {
        switch (category) {
            case 'education':
                return book;
            case 'groceries':
                return food;
            case 'health':
                return medical;
            case 'subscriptions':
                return tv;
            case 'takeaways':
                return takeaway;
            case 'clothing':
                return clothing;
            case 'travelling':
                return freelance;
            case 'other':
                return circle;
            default:
                return ''
        }
    }

    return (
        <IncomeItemStyled indicator={indicatorColor}>
            <div className="icon">
                {type === 'expense' ? expenseCatIcon() : categoryIcon()}
            </div>
            <div className="content">
                <h5>{title}</h5>
                <div className="inner-content">
                    <div className="text">
                        <p>{dollar} {amount}</p>
                        <p>{calender} {formattedDate}</p>
                        <p>
                            {comment} {description}
                        </p>
                    </div>
                    <div className="btn-container">
                        <Button
                            icon= {trash}
                            bPad = {'1rem'}
                            bRad = {'50%'}
                            bg = {'var(--color-delete)'}
                            color = {'var(--background-color)'}
                            iColor = {'var(--background-color)'}
                            hColor = {'var(--color-delete)'}
                            onClick={() => deleteItem(id)}
                        />
                    </div>
                </div>
            </div>
        </IncomeItemStyled>
    )}


const IncomeItemStyled = styled.div`
    background: var(--background-color);
    border: 1px solid var(--color-grey);
    box-shadow: 0 1 15px rgba(0,0,0,0.1);
    border-radius: 20px;
    padding: 1rem;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    width: 100%;
    color: var(--main-text-color);
    .icon{
        width: 80px;
        height: 80px;
        border-radius: 20px;
        background: #fec7d7;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid var(--color-grey);
        i{
            font-size: 2.6rem;
        }
    }
    .content{
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 0.2rem;
        h5{
            font-size: 1.3rem;
            padding-left: 2rem;
            position: relative;
            &::before{
                content: '';
                position: absolute;
                left: 0;
                top: 50%;
                transform: translateY(-50%);
                width: 0.8rem;
                height: 0.8rem;
                border-radius: 50%;
                background: ${props => props.indicator};
            }
        }
        .inner-content{
            display: flex;
            justify-content: space-between;
            align-items: center;
            .text{
                display: flex;
                flex-direction: column;
                gap: 1.5rem;
                p{
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    color: var(--color-green);
                    opacity: 0.8;
                }
            }
        }
    }
`;
export default IncomeItem;