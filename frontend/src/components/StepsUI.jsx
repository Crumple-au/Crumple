import React from 'react'

function StepsUI(props) {
    return (
        <div className="steps-ui">
            <div className={props.step1 ? 'active' : ''}>{props.text.text1}</div>
            <div className={props.step2 ? 'active' : ''}>{props.text.text2}</div>
            <div className={props.step3 ? 'active' : ''}>{props.text.text3}</div>
            <div className={props.step4 ? 'active' : ''}>{props.text.text4}</div>
        </div>
    )
}

export default StepsUI
