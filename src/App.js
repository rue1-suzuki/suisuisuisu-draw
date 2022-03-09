import React, { useState } from "react"
import ResultTable from "./modules/result_table"
import SelectNumber from "./modules/select_number"


export default function App() {
    const [player_num, setPlayerNum] = useState(32)
    const [round_num, setRoundNum] = useState(5)
    return (
        <React.Fragment>
            <div className="container text-center">
                <div className="row mb-3">
                    <div className="col">
                        <SelectNumber
                            title="Player"
                            num={player_num}
                            setNum={setPlayerNum}
                        />
                    </div>
                    <div className="col">
                        <SelectNumber
                            title="Round"
                            num={round_num}
                            setNum={setRoundNum}
                        />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col">
                        <ResultTable
                            player_num={player_num}
                            round_num={round_num}
                        />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
