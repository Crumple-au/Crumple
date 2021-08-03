import React from 'react'

function StepsUI(props) {
    console.log(props)
    return (
        <div>
            <div className={props.step1 ? 'active' : ''}>{props.text.signin}</div>
            <div className={props.step2 ? 'active' : ''}>{props.text.shipping}</div>
            <div className={props.step3 ? 'active' : ''}>{props.text.payment}</div>
            <div className={props.step4 ? 'active' : ''}>{props.text.placeOrder}</div>
        </div>
    )
}

export default StepsUI
