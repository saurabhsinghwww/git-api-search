import React from 'react';

/**
 * The react functional component create the text filter by using the filter configuration and 
 * set the parent component state in case of change of the value from default.
 * 
 * @author Saurabh Singh
 * @version 1.0
*/
export default ({ textFilter, setValue }) => {

    return (

        <div className="col-md-6 col-sm-6">
            <div className="form-group">
                <label htmlFor={textFilter.name}>Select {textFilter.name}:</label>
                <input type="text" className="form-control" id={textFilter.name}
                    onBlur={(event) => setValue(textFilter.name, event.target.value)} placeholder={textFilter.placeholder} />
            </div>
        </div>
    );

}