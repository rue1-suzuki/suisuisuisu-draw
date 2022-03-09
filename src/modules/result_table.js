import React from "react"

export default function ResultTable(props) {
    const trs = Array(1 + props.round_num).fill(true).map((_, index) => (
        <tr key={index}>
            <th>{props.round_num - index} - {index}</th>
            <td>{props.player_num}</td>
        </tr>
    ))
    return (
        <React.Fragment>
            <h2>Result</h2>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>score</th>
                        <th>num</th>
                    </tr>
                </thead>
                <tbody>
                    {trs}
                </tbody>
            </table>
        </React.Fragment>
    )
}
