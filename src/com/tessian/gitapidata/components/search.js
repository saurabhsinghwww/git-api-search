import React, { Component } from 'react';
import { render } from 'react-dom';

import SearchFilters from './search-filters';
import SearchResults from './search-results';

import configuration from 'configuration';

import searchService from '../services/search-service';

/**
 * The class component create the search filters by reading the configuration file.
 * Based on the search filter it get the data from the API and display the results.
 * 
 * @author Saurabh Singh
 * @version 1.0
*/
export default class Search extends Component {

	/**
	 * The constructor create the initial state and set the default filters values.
	 * 
	*/
	constructor(props) {
		super(props);

		this.state = {

			showSearchPanel: false,
			filterValues: {},
			filterResults: []

		};

		this.setFiltersIntialState();


	}

	/**
	 * Set the default filters values.
	*/
	setFiltersIntialState() {



		configuration.filters.textFilters.forEach((filter) => this.state.filterValues[filter.name] = filter.default);
		configuration.filters.listFilters.forEach((filter) => this.state.filterValues[filter.name] = filter.default);

	}

	/**
	 * Expand of hide the panel on click of the button.
	*/
	togglePanel() {
		this.setState(
			{

				showSearchPanel: !this.state.showSearchPanel
			}

		);
	}

	/**
	 * Hide the search panel on clicking of search button.
	*/
	hideSearchPanel() {
		this.setState(
			{

				showSearchPanel: false
			});
	}

	/**
	 * The function get called in case of change of the filter value from the default.
	*/
	setValue(type, value) {
		this.state.filterValues[type] = value;
	}

	/**
	 * The function get called when user hit the search button and it get the data from the API and show search result.
	*/
	showResults() {

		this.hideSearchPanel();
		searchService.loadData(this.state.filterValues)
			.then(response => {
				if (response) {
					this.setState({ filterResults: response });
				}
			});

	}

	/**
	 * The render mothod of search filter and search results.
	*/
	render() {

		return (
			<div className="container">
				<p className={!this.state.showSearchPanel ? "show-panel" : "hide-panel"}>
					<button className="btn btn-primary" type="button" onClick={() => this.togglePanel()} data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
						Build Search Query
          </button>
				</p>
				<div className={this.state.showSearchPanel ? "show-panel" : "hide-panel"} >

					<SearchFilters filters={configuration.filters} setValue={(key, value) => this.setValue(key, value)} showResults={() => this.showResults()} />
				</div>
				<SearchResults filterResults={this.state.filterResults} />


			</div>
		);
	}
}