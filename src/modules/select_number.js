import React from "react"

export default function SelectNumber(props) {
    return (
        <React.Fragment>
            <h2>{props.title}</h2>
            <input
                type="number"
                className="form-control"
                defaultValue={props.num}
                onChange={(event) => {
                    props.setNum(parseInt(event.target.value))
                }}
            />
        </React.Fragment>
    )
}
