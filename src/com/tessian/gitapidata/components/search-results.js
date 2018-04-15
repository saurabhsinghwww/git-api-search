import React from 'react';

/**
 * The function component get the API results and then display the avatar, title and body information as form of grid.
 * 
 * @author Saurabh Singh
 * @version 1.0
*/
export default ({ filterResults }) => {

    const filterResultsElem = filterResults.map((filterResult) => {
        return (<div className="row" key={filterResult.title}>
            <img className="col-sm-4 img equal border border-primary" src={filterResult.user.avatar_url}
                alt={filterResult.user.login} />
            <textarea className="col-sm-4 equal" rows="5" defaultValue={filterResult.title}></textarea>
            <textarea className="col-sm-4 equal" rows="5" defaultValue={filterResult.body}></textarea>
        </div>)
    });

    if (filterResultsElem.length == 0) {
        return <div />;
    }

    return (
        <div className="container">
            <div className="row">
                <label className="col-sm-4 equal-header">Avatar</label>
                <label className="col-sm-4 equal-header">Title</label>
                <label className="col-sm-4 equal-header">Body</label>
            </div>
            {filterResultsElem}
        </div>
    );

}