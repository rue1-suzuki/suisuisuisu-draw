import React from "react";
import "./App.css";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "players": { "max": 256, "current": 32 },
            "rounds": { "max": 8, "current": 5 }
        };
    }

    render() {
        return (
            <React.Fragment>
                <h1>すいすいスイスドロー</h1>

                <h2>対戦設定</h2>
                {this.round_select(this.state.rounds["max"])}
                {this.players_select(this.state.players["max"])}

                <h2>対戦結果</h2>
                {this.calc(this.state.rounds["current"], this.state.players["current"])}

                <p>作者：<a href="https://twitter.com/Rue1DM">@Rue1DM</a></p>
            </React.Fragment >
        );
    }

    round_select(rounds_max) {
        return (
            <select id="select_rounds" defaultValue={this.state.rounds["current"]} onChange={this.selected}>{
                Array(rounds_max).fill().map((dummy, i) => {
                    return (<option key={i + 1} value={i + 1}>{i + 1}回戦</option>);
                })
            }</select>
        );
    }

    players_select(players_max) {
        return (
            <select id="select_players" defaultValue={this.state.players["current"]} onChange={this.selected}>{
                Array(players_max).fill().map((dummy, i) => {
                    return (<option key={i + 1} value={i + 1}>{i + 1}人</option>);
                })
            }</select>
        );
    }

    selected = () => {
        this.setState({
            "rounds": {
                "current": document.getElementById("select_rounds").value,
                "max": this.state.rounds["max"]
            },
            "players": {
                "current": document.getElementById("select_players").value,
                "max": this.state.players["max"]
            }
        });
    }

    calc(rounds_num, players_num) {
        let rounds = [];

        // 初期化
        for (let i = 0; i <= rounds_num; i++) {
            let round = [];
            for (let j = 0; j <= rounds_num; j++) {
                round.push(0);
            }
            rounds.push(round);
        }

        // 計算
        rounds[0][0] = players_num;
        for (let i = 0; i < rounds.length - 1; i++) {
            for (let j = 0; j < rounds[i].length - 1; j++) {
                rounds[i + 1][j] += Math.ceil(rounds[i][j] / 2);        // 勝ち
                rounds[i + 1][j + 1] += Math.floor(rounds[i][j] / 2);   // 負け
            }
        }

        // 描画
        let p_key = 1;
        let nobr_key = 1;
        return (
            <div>{
                rounds.map((round) => {
                    return (
                        <p key={p_key++}> {
                            round.map((cell) => {
                                if (cell !== 0) {
                                    return (<nobr key={nobr_key++}>&nbsp;{cell}&nbsp;</nobr>);
                                }
                                else {
                                    return null;
                                }
                            })
                        }</p>
                    );
                })
            }</div>
        )
    }
}
