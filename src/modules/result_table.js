import React from "react"

export default function ResultTable(props) {
    const result_list = [[props.player_num,],]
    for (let index = 0; index < props.round_num; index++) {
        const result = Array(index + 2).fill(0)
        result_list[index].forEach((num, jndex) => {
            result[jndex + 0] += Math.ceil(num / 2)
            result[jndex + 1] += Math.floor(num / 2)
        })
        result_list.push(result)
    }

    const trs = Array(1 + props.round_num).fill(true).map((_, index) => (
        <tr key={index}>
            <td>{props.round_num - index} - {index}</td>
            <td>{result_list[props.round_num][index]}</td>
        </tr>
    ))

    return (
        <React.Fragment>
            <h2>Result</h2>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Score</th>
                        <th>Num</th>
                    </tr>
                </thead>
                <tbody>
                    {trs}
                </tbody>
            </table>
        </React.Fragment>
    )
}
