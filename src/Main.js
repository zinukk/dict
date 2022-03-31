import React from 'react';
import './App.css'
import {useHistory} from 'react-router-dom'
import { connect } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { completeDict, copyDict, deleteDict, deleteDictFB } from './redux/modules/dict';



const Main = (props) => {
    
    const dispatch = useDispatch()
    

    const history = useHistory();

    const changeText = (isCompleted, _idx) => {

        dispatch(completeDict(isCompleted, _idx))
        
    }

    const data = useSelector((state)=>state.dict.list)
    console.log(data);

    return (
        <>
        <nav className='logo_box'>
            <h1 className='title'>
                영어 단어장
            </h1>
        </nav>
        <button className='addbt' onClick={()=>{history.push(`/Detail`)}}>+</button>
        <div className='container'>
            {data.map((data, idx) => {
                return  (<div key={idx} >
                            <h1>{data.word} </h1>
                            <p>[{data.sound}]</p>
                            <p>{data.mean}</p>
                            <p>{data.exam}</p>
                            <p>{data.trans}</p>
                            
                            <button className='deletebt' onClick={()=>{
                                dispatch(deleteDictFB(data.id))
                            }}>삭제</button>
                            <button className='fixbt' onClick={()=>{
                                history.push({
                                    pathname: '/Update',
                                    state: {data}
                                })
                                // dispatch(copyDict({id: data.id, data}))

                            }}>수정</button>
                        </div>)
            })}
        </div>
        </>
    )
}

export default Main

// function 함수명(state){
//  return{
//     state : state.reducer,
//     alert : state.reducer2
//  }
// }

// // export default connect(함수명)(Main)
// export default connect(함수명)(Main)

