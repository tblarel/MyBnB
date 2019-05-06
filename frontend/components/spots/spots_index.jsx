import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import DarkWelcomeContainer from '../welcome/dark_welcome_container';
import SpotIndexItem from './spot_index_item';
import SpotIndexList from './spot_index_list';
import { filter } from 'lodash';

class SpotsIndex extends React.Component {
    constructor(props) {
        super(props);
        let location;
        if (this.props.location.state === undefined){
            location = ''
        } else {
            location = this.props.location.state.loc
        }
        this.state = {
            searchTerm: '',
            currentlyDisplayed: this.props.spots,
            location: location
        };
        this.renderOptions = this.renderOptions.bind(this);
        this.renderDropdowns = this.renderDropdowns.bind(this);
        this.updateLoc = this.updateLoc.bind(this);
        this.filterSpotsByLocation = this.filterSpotsByLocation.bind(this);
    }

    componentDidMount() {
        this.props.findAllSpots();
        if (_.isEmpty(this.props.locations) ) {
            this.props.findAllLocations();
        }
        this.filterSpotsByLocation();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.spots !== this.props.spots) {
            this.setState({
                currentlyDisplayed: this.props.spots
            });
        }
    }

    filterSpotsByLocation() {
        let newList;
        if (this.state.location === '') {
            newList = this.props.spots;
        } else {
            newList = filter(this.props.spots,
                spot => spot.city.toLowerCase().includes(this.state.location.toLowerCase()));
        }
        this.setState({
            currentlyDisplayed: newList
        });
    }

    renderDropdowns(locations) {
        return( locations.map( location => {
            if(location.name !== this.state.location)
                return (<option value={location.name}> {location.name} </option>)
            else
                return (<option value={location.name} selected="selected"> {location.name} </option>)
        }))
    }

    renderOptions() {
        return(
            <div className="spot-filters">
                <label> Guests: 
                    <select className="top-search-box" onChange={this.updateGuests}>
                        <option value='1' selected="selected"> 1 Guest </option>
                        <option value='2' > 2 Guests </option>
                        <option value='3' > 3 Guests </option>
                        <option value='4' > 4 Guests </option>
                        <option value='5' > 5 Guests </option>
                        <option value='6' > 6 Guests </option>
                    </select>
                </label>
                <label> Check In: 
                    <select className="top-search-box" onChange={this.updateGuests}>
                        <option value='1' selected="selected"> Start </option>
                        <option value='2' > 2 Guests </option>
                        <option value='3' > 3 Guests </option>
                        <option value='4' > 4 Guests </option>
                        <option value='5' > 5 Guests </option>
                        <option value='6' > 6 Guests </option>
                    </select>
                </label>

                <label> Check Out:
                    <select className="top-search-box" onChange={this.updateGuests}>
                        <option value='1' selected="selected"> End </option>
                        <option value='2' > 2 Guests </option>
                        <option value='3' > 3 Guests </option>
                        <option value='4' > 4 Guests </option>
                        <option value='5' > 5 Guests </option>
                        <option value='6' > 6 Guests </option>
                    </select>
                </label>


            </div>
        );
    }

    updateLoc(e) {      
        let newList = filter(this.props.spots,
            spot => spot.city.toLowerCase().includes(e.currentTarget.value.toLowerCase()));
        
        this.setState({
                currentlyDisplayed: newList,
                location: e.currentTarget.value
        });
    }
    
    render() {
        return (
            <div className="content-container">
                <header className="top-nav">
                    <Link to="/" className="header-link">
                        <div className="icon-color"></div>
                    </Link>
                    <div className="search-box-container">
                        <select className="search-box-spots" onChange={this.updateLoc}>
                            {this.renderDropdowns(Object.values(this.props.locations))}
                        </select>
                    </div>
                    <DarkWelcomeContainer />
                </header>
                <div className="locations-page">
                    <div className="spots-page-search">
                        <h1 id="search-spots">Search {this.state.location} </h1>
                    </div>
                    {this.renderOptions()}
                    <div className="spots-container">
                        <SpotIndexList currentLoc={this.state.location} spots={this.props.spots}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(SpotsIndex);