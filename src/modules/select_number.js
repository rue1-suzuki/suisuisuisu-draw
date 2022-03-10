import React from "react"

export default function SelectNumber(props) {
    return (
        <React.Fragment>
            <h2>{props.title}</h2>
            <input
                type="number"
                className="form-control text-center"
                defaultValue={props.num}
                min={0}
                step={1}
                onChange={(event) => {
                    const number = parseInt(event.target.value)
                    props.setNum(number)
                }}
            />
        </React.Fragment>
    )
}
