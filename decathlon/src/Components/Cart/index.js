import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default function Cart() {

    const myItems = useSelector(state => state.addItems);
    const dispatch = useDispatch();

    return (
        <div className=''>
            {myItems.map(item =>
                <>
                    <div> {item.item} </div>
                </>)}
        </div>
    )
}