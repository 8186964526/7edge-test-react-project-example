import React, { Component } from 'react';
import './App.css';
class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            number: '',
            newArray: [],
        }
    }

    HandelChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        this.setState({ [name]: value }, function () {

        })
    }
    SubmitCapitalsInfo = (e) => {
        if (this.state.number !== "") {
            let newArray = this.state.newArray
            newArray.push(this.state.number)
            this.setState({ newArray, number: '' })
        }
    }

    HandleKeyDown = (e) => {
        if (e.keyCode === 69 || e.keyCode === 187 || e.keyCode === 189) {
            e.preventDefault()
        }
    }


    render() {
        let { newArray } = this.state
        let ArrayDetails = ''

        // Submited values Array Grid
        ArrayDetails = newArray && newArray.map((list, idx) => {
            return <li className="list-group-item" key={idx}>{list}</li>
        })

        //  Logic for frequent numbers
        const yourArray = newArray
        let frequentNumArray = []

        const tempArray = [...yourArray].sort()
        for (let i = 0; i < tempArray.length; i++) {
            if (tempArray[i + 1] === tempArray[i]) {
                frequentNumArray.push(tempArray[i])
            } else {
                if (tempArray[i] === frequentNumArray[frequentNumArray.length - 1]) {
                    frequentNumArray.push(tempArray[i])
                }
            }
        }


        let FrequentNumbers = ''
        FrequentNumbers = frequentNumArray && frequentNumArray.map((x, index) => {
            return <li className="list-group-item" key={index}>{x}</li>

        })

        return (
            <React.Fragment>
                <div className='super_div'>
                    <div className='main_div'>
                        <div class="form-group col-md-6">
                            <label for="country" > </label>
                            <input type="number"
                                autoComplete='off'
                                class="form-control"
                                onChange={this.HandelChange}
                                id="country"
                                name='number'
                                value={this.state.number}
                                placeholder="Enter"
                                onKeyDown={(e) => this.HandleKeyDown(e)}
                            />
                        </div>
                        <div class="form-group col-md-6">
                            <button type="button"
                                style={{ 'width': '125px' }}
                                onClick={this.SubmitCapitalsInfo}
                                disabled={this.state.number !== '' ? false : true}
                                class="btn btn-primary">Submit</button>
                        </div>
                    </div>
                    {/* Showing the submitted values grid view */}
                    {ArrayDetails && ArrayDetails.length > 0 ?
                        <React.Fragment>
                            <span>Submited Values Are : </span>
                            <ul className="list-group list-group-horizontal" >
                                {ArrayDetails}
                            </ul>
                        </React.Fragment>

                        : null}

                    <div>
                        {/* Showing the Frequency values grid view */}

                        {
                            FrequentNumbers && FrequentNumbers.length > 0 ?
                                <React.Fragment>
                                    <span>Frequent Numbers are : </span>
                                    <ul className="list-group list-group-horizontal"  >
                                        {FrequentNumbers}
                                    </ul>
                                </React.Fragment>
                                : null
                        }
                    </div>
                </div>

            </React.Fragment>

        )
    }
}

export default Dashboard

