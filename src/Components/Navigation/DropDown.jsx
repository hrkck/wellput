import React, {Component} from 'react';

import SingleLink from './SingleLink';

class DropDown extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isOpen: false
      };
      this.toggleDropDown.bind(this)
      this.generateDropDown.bind(this)
    };

    toggleDropDown = () => this.setState({isOpen: !this.state.isOpen})

    generateDropDown = (dropDownList, baseUrl, link_url) => {
        let l = []

        for(let dropDownItem in dropDownList){
            if(dropDownItem.dropDownHeader){
                l.push(<h6 class="dropdown-header">{dropDownItem.dropDownHeader}</h6>)
            }else{
                l.push( <SingleLink 
                        link_url={dropDownItem.url} 
                        to={`${baseUrl}/${link_url}/${dropDownItem.url}`} 
                        title={dropDownItem.title} 
                        isDropDown={true}
                        key={`${baseUrl}/${link_url}/${dropDownItem.url}`}
                    />)
            }
        }
        
        return l
    }
    
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
                <button 
                    className={` ${this.state.isOpen ? "bg-success" : ""} dropdown-toggle dropdown-toggle-split`}
                    type="button"
                    id={link_url}
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    onClick={this.toggleDropDown}
                />
                <div className={menuClass} aria-labelledby={link_url} onClick={this.toggleDropDown}>
                    {this.generateDropDown(dropDownList, baseUrl, link_url)}
                </div>
            </div>
        );
    }
}

export default DropDown;