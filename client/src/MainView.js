import React, {Component} from 'react';
import {inject, observer} from "mobx-react";
import Mortgage from './Mortgage';
import ViewProperties from './ViewProperties';

class MainView extends Component {
    render() {
        return (
            <div className="main-view">
                {this.props.store.mousedOverTileInfo ?
                    <div className="d-flex flex-column">
                        <div>Owner: {this.props.store.mousedOverTileIDInfo.owned ? this.props.store.players[this.props.store.mousedOverTileIDInfo.player].username : "No Owner"}</div>
                        <div>Company Name: {this.props.store.mousedOverTileInfo.name}</div>
                        <div>{this.props.store.mousedOverTileInfo.cost ?
                            <div>Company Cost: ${this.props.store.mousedOverTileInfo.cost}</div> : null}
                        </div>
                        <div>{this.props.store.mousedOverTileInfo.upgrade ?
                            (
                                <div>
                                    <div>Funding Rounds Cost: ${this.props.store.mousedOverTileInfo.upgrade}</div>
                                    <div>Rent Fee: ${this.props.store.mousedOverTileInfo.rent[0]}</div>
                                    <div>1st Round: ${this.props.store.mousedOverTileInfo.rent[1]}</div>
                                    <div>2nd Round: ${this.props.store.mousedOverTileInfo.rent[2]}</div>
                                    <div>3rd Round: ${this.props.store.mousedOverTileInfo.rent[3]}</div>
                                    <div>4th Round: ${this.props.store.mousedOverTileInfo.rent[4]}</div>
                                    <div>IPO: ${this.props.store.mousedOverTileInfo.rent[5]}</div>
                                </div>
                            )
                            :
                            null}
                        </div>
                    </div>
                    :
                    <div>
                        {this.props.store.mainView === "properties" &&
                        <ViewProperties/>
                        }
                        {this.props.store.thisPlayersTurn &&
                        (this.props.store.turnState !== "BUY" ?
                            <button type="button" onClick={this.props.store.rollAndMove}
                                    className="btn btn-primary">roll</button> : null)
                        }
                        {this.props.store.thisPlayersTurn && this.props.store.buyProcessStarted &&
                        <div>
                            <div>Buy Tile</div>
                            <button onClick={() => this.props.store.buyPrompt(true)}>yes</button>
                            <button onClick={() => this.props.store.buyPrompt(false)}>no</button>
                        </div>
                        }
                        {/*<div>*/}
                            {/*{this.props.store.gameTilesID.map((el, i) => {*/}
                                {/*return {...el, id: i}*/}
                            {/*}).filter(el => el.player === this.props.store.player).map(el => {*/}
                                {/*return <div key={el.name}>*/}
                                    {/*{el.name}*/}
                                    {/*{!el.mortaged &&*/}
                                    {/*<button onClick={() => this.props.store.mortgageProp(el.id)}>mortgage</button>*/}
                                    {/*}*/}

                                {/*</div>*/}
                            {/*})}*/}
                        {/*</div>*/}
                    </div>
                }
            </div>
        );
    }
}

export default inject("store")(observer(MainView));
