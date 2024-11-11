
import React from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useGlobalContext } from "../../context/global";
import Button from "../button/button";
import { plus } from '../../utils/icons';

function Form() {
    const {addIncome} = useGlobalContext();
    const [inputState, setInputState] = React.useState({
        title: '',
        amount: '',
        date: '',
        type: '',
        category: '',
        description:''
    });

    const {title, amount, date, type, category, description} = inputState;
    const handleInput = name => (e) => {
        setInputState({
            ...inputState,
            [name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addIncome(inputState);
    }
    return (
        <FormStyled onSubmit={handleSubmit}>
            <div className='input-control'>
                <input type='text' value={title} name='title' placeholder='Salary'
                onChange={handleInput('title')}/>
            </div>
            <div className='input-control'>
                <input type='text' value={amount} name='amount' id='amount' placeholder='Salary Amount'
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
                <select required value={type} name='type' id='type' onChange={handleInput('type')}>
                <option value=''>Select Type</option>
                <option value='recurring'>Recurring</option>
                <option value='oneoff'>One Off</option>
                <option value='other'>Other</option>
                </select>
            </div>
            <div className='selects input-control'>
                <select required value={category} name={'category'} id='category' onChange={handleInput('category')}>
                <option value=''>Select Category</option>
                <option value='salary'>Salary</option>
                <option value='business'>Business</option>
                <option value='investment'>Investment</option>
                <option value='extra Income'>Extra Income</option>
                <option value='savings'>Savings</option>
                <option value='others'>Others</option>
                </select>
            </div>
            <div className='input-control'>
                <textarea value={description} name='description' id='description' placeholder='Salary Description' cols='30' rows='5'
                onChange={handleInput('description')}/>
            </div>
            <div className='submit-btn'>
                <Button 
                    name={'Add Income'}
                    icon={plus}
                    bPad={'1rem 5.5rem'}
                    bRad={'35px'}
                    color={'var(--main-text-color)'}
                />
            </div>
        </FormStyled>
    );
}

const FormStyled = styled.form`
    display: grid;
    flex-direction: column;
    gap: 2rem;
    input, textarea, select{
        font-family: inherit;
        font-size: inherit;
        outline: none;
        border: none;
        padding: 1rem;
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
        justify-content: flex-end;
        select{
            color: var(--main-text-color);
            &:focus, &:active{
                color: var(--select-color);
            }
            }
        }
        .submit-btn{
            button{
                width: 100%;
                padding: 1rem;
                border-radius: 5px;
                border: none;
                background-color: var(--button-color);
                color: var(--text-color);
                cursor: pointer;
                transition: all 0.3s ease;
                &:hover{
                    background-color: var(--color-hover);
                }
            }
            
`;
export default Form;