import React from 'react';
import TextFilter from './text-filter';
import ListFilter from './list-filter';

/**
 * The function component responsible for creating the text filters and list filters by reading the filters configuration of the config.json.
 * 
 * @author Saurabh Singh
 * @version 1.0
*/
export default ({ filters, setValue, showResults }) => {

    //Creating the text filter.
    const textFiltersElem = filters.textFilters.map((textFilter) => <TextFilter key={textFilter.name} textFilter={textFilter} setValue={setValue} />);
    //Creating the list filter.
    const listFiltersElem = filters.listFilters.map((listFilter) => <ListFilter key={listFilter.name} listFilter={listFilter} setValue={setValue} />);

    return (
        <div className="container border">

            <div className="panel panel-default">
                <div className="container">
                    <h4>Query Builder</h4>
                    <form action="" role="form">
                        <div className="row">


                            {listFiltersElem}
                            {textFiltersElem}

                        </div>
                        <div className="row">
                            <div className="col-md-12 text-right">
                                <div className="form-group button-padding-top">
                                    <button type="button" className="btn btn-primary" onClick={() => showResults()}>Search</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );

}