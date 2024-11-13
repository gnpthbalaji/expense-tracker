
import React from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useGlobalContext } from "../../context/global";
import Button from "../button/button";
import { plus } from '../../utils/icons';

function ExpenseForm() {
    const {addExpense, getExpense, error, setError} = useGlobalContext();
    const [inputState, setInputState] = React.useState({
        title: '',
        amount: '',
        date: '',
        type: 'expense',
        category: '',
        description:''
    });

    const {title, amount, date, category, description} = inputState;
    const handleInput = name => (e) => {
        setInputState({
            ...inputState,
            [name]: e.target.value
        })
        setError('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addExpense(inputState);
        getExpense();
        setInputState({
            title: '',
            amount: '',
            date: '',
            type: 'expense',
            category: '',
            description:''
        });
    }
    return (
        <ExpenseFormStyled onSubmit={handleSubmit}>
             {error && <p style={{color: '#e53170'}}>{error}</p>}
            <div className='input-control'>
                <input type='text' value={title} name='title' placeholder='Expense Title'
                onChange={handleInput('title')}/>
            </div>
            <div className='input-control'>
                <input type='text' value={amount} name='amount' id='amount' placeholder='Expense Amount'
                onChange={handleInput('amount')}/>
            </div>
            <div className='input-control'>
               <DatePicker id='date' placeholderText='Select Date'
               selected={date} dateFormat={'MM/dd/yyyy'}
               onChange={(date) => {
                     setInputState({
                          ...inputState,
                          date:date
                     });
               }}/>
            </div>
            <div className='selects input-control'>
                <select required value={category} name={'category'} id='category' onChange={handleInput('category')}>
                <option value=''>Select Category</option>
                <option value="education">Education</option>
                <option value="groceries">Groceries</option>
                <option value="health">Health</option>
                <option value="subscriptions">Subscriptions</option>
                <option value="takeaways">Takeaways</option>
                <option value="clothing">Clothing</option>  
                <option value="travelling">Travelling</option>  
                <option value="other">Other</option> 
                </select>
            </div>
            <div className='input-control'>
                <textarea value={description} name='description' id='description' placeholder='Expense Description' cols='30' rows='5'
                onChange={handleInput('description')}/>
            </div>
            <div className='submit-btn'>
                <Button 
                    name={'Add Expense'}
                    icon={plus}
                    bRad={'50px'}
                    color={'#f2f7f5'}
                />
            </div>
        </ExpenseFormStyled>
    );
}

const ExpenseFormStyled = styled.form`
    display: grid;
    flex-direction: column;
    gap: 2rem;
    input, textarea, select{
        font-family: inherit;
        font-size: inherit;
        outline: none;
        border: none;
        padding: 0.5 rem 1rem;
        border-radius: 5px;
        border: 1px solid var(--primary-color);
        background: transparent;
        resize: none;
        box-shadow: 0 0 5px rgba(0,0,0,0.1);
        color: var(--primary-color);
        &::placeholder{
            color: var(--main-text-color);
        }
        .input-control{
            input{
                width: 100%;
            }
        }
    }
        .selects{
        display: flex;
        justify-content: space-between;
        select{
            color: var(--main-text-color);
            &:focus, &:active{
                color: var(--select-color);
            }
            }
        }
        .submit-btn{
            button{
                width: 40%;
                padding: 1rem;
                border-radius: 5px;
                border: none;
                background-color: var(--button-color);
                color: var(--text-color);
                cursor: pointer;
                transition: all 0.3s ease;
                &:hover{
                    background-color: #00473e;
                }
            }
            
`;
export default ExpenseForm;