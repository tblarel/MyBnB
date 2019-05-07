import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';

class SplashSearch extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state={

        };
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.history.push('/locations')
    }

    render() {
        return (
            <div className="splash-search-container">
                <form className="search-form-box" onSubmit={this.handleSubmit}>
                    <h1>Book unique homes and experiences.</h1>
                    {/* <div id="logo-header"></div> */}
                    <div className="search-form">
                        <label><p>WHERE</p>
                            <input type="text"
                                value="Where to?"
                                // onChange={this.update('email')}
                                className="login-input"
                            />
                        </label>
                        <label><p>GUESTS</p>
                            <select name="guests"
                                // onChange={this.update('password')}
                                className="dropdown-input"
                            >
                                <option value="">How Many Guests?</option>
                            </select>
                        </label>
                        <label> Dates:
                            <DateRangePicker
                                        startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                                        startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                                        endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                                        endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                                        onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
                                        focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                                        onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
                                    />
                        </label>

                        <input className="session-submit"
                            type="submit"
                            value="Search"
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SplashSearch;


