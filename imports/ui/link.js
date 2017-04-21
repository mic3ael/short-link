import React from 'react';
import LinksList from './linkslist';
import PrivateHeader from './privateHeader';
import AddLink from './addLink';
import LinksListFilters from './linksListFilters';

export default() => {
    return (
        <div>
            <PrivateHeader title="Your Links"/>
            <div className="page-content">
                <LinksListFilters/>
                <AddLink/>
                <LinksList/>
            </div>
        </div>
    );
};
