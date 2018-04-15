import React from 'react';

/**
 * The react functional component create the list filter by using the filter configuration and 
 * set the parent component state in case of change of the value from default.
 * 
 * @author Saurabh Singh
 * @version 1.0
*/
export default ({ listFilter, setValue }) => {

    const filterOptionsElem = listFilter.options.map(option => <option key={option}
        className={(listFilter.default == option) ? "active" : ""}>{option}</option>);

    return (
        <div className="col-md-6 col-sm-6">
            <div className="form-group">
                <label htmlFor={listFilter.name}>Select {listFilter.name}:</label>
                <select id={listFilter.name} className="form-control" onChange={(event) => setValue(listFilter.name, event.target.value)}>
                    {filterOptionsElem}
                </select >
            </div>
        </div>
    );

}