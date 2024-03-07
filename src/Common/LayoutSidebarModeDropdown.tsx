import React from 'react';

//constants

import { LAYOUT_SIDEBAR_TYPES } from "../Common/constants/layout";

const LayoutSidebarModeDropdown = ({ leftSidebarType,onChangeleftSidebarType}:any) => {

    const mode = leftSidebarType === LAYOUT_SIDEBAR_TYPES['DARK'] ? LAYOUT_SIDEBAR_TYPES['LIGHT'] : LAYOUT_SIDEBAR_TYPES['DARK'];

    
    return (
        <div className="ms-1 header-item d-none d-sm-flex">
            <button
                onClick={() => onChangeleftSidebarType(mode)}
                type="button" className="btn btn-icon btn-topbar btn-ghost-primary rounded-circle light-dark-mode">
                <i className='las la-moon fs-24'></i>
            </button>
        </div>
    );
};

export default LayoutSidebarModeDropdown;

