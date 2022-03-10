import React, { useState } from "react";
import ResultTable from "./modules/result_table";
import SelectNumber from "./modules/select_number";


export default function App() {
    const params = new URL(window.location.href).searchParams
    const [player_num, setPlayerNum] = useState(parseInt(params.get('player') || 32))
    const [round_num, setRoundNum] = useState(parseInt(params.get('round') || 5))

    const url = window.location.href.replace(window.location.search, '') +
        '?player=' + player_num +
        '&round=' + round_num
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
                        <button
                            className="btn btn-primary"
                            onClick={() => {
                                navigator.clipboard.writeText(url)
                                alert('このページへのリンクをコピーしました\n\n' + url)
                            }}
                        > copy link </button>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col">
                        <h2>Adsense</h2>
                        soon
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
