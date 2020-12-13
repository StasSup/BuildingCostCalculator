import React, {useEffect, useState} from 'react';
import '../Step.css'

const Result = (props) => {
    let activeClass
    props.result.result == 'ok' ? activeClass = 'bodyInputWrapSuccess' : activeClass = 'bodyInputWrapError'
    return (
        <div className="stepWrap">
            <div className="stepHeaderWrap">
                <p className="header">
                    {props.result.result == 'ok' ? 'Успешно' : 'Ошибка' }
                </p>
            </div>
            <div className={activeClass}>
                {props.result.message}
            </div>
        </div>
    )
}

export default Result
