import React, {Component} from 'react';

import SingleLink from './SingleLink';

class DropDown extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isOpen: false
      };
      this.toggleDropDown.bind(this);
    };

    toggleDropDown = () => this.setState({isOpen: !this.state.isOpen})
    
    render() {
        const menuClass = `dropdown-menu ${this.state.isOpen ? "show" : ""}`;
        const {link_url, baseUrl, title, dropDownList} = this.props;

        return (
            <div className="btn-group border-dark border-bottom">
                <SingleLink
                    link_url={link_url}
                    to={`${baseUrl}/${link_url}`}
                    title={title}
                />
                <span 
                    className={` ${this.state.isOpen ? "bg-success" : ""} dropdown-toggle dropdown-toggle-split`}
                    type="button"
                    id={link_url}
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    onClick={this.toggleDropDown}
                />
                <div className={menuClass} aria-labelledby={link_url} onClick={this.toggleDropDown}>
                    {
                        dropDownList.map(dropDownItem => {
                            if(dropDownItem.dropDownHeader){
                                return(
                                    <h6 class="dropdown-header">{dropDownItem.dropDownHeader}</h6>
                                )
                            }else{
                                return(
                                    <SingleLink 
                                        link_url={dropDownItem.url} 
                                        to={`${baseUrl}/${link_url}/${dropDownItem.url}`} 
                                        title={dropDownItem.title} 
                                        isDropDown={true}
                                        key={`${baseUrl}/${link_url}/${dropDownItem.url}`}
                                    />
                                )
                            }
                        }
                            
                            
                        )
                    }
                </div>
            </div>
        );
    }
}

export default DropDown;