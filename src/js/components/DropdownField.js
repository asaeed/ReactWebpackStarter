import React from 'react';

class DropdownField extends React.Component {
	render() {
		return (
			<div className="dropdown">
                <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-expanded="true">
                    Dropdown
                    <span className="caret"></span>
                </button>
                <ul className="dropdown-menu" role="menu" aria-labelledby="dropdownMenu1">
                    <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Action</a></li>
                    <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Another action</a></li>
                    <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Something else here</a></li>
                    <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Separated link</a></li>
                </ul>
            </div>
		);
	}
}

export default DropdownField;