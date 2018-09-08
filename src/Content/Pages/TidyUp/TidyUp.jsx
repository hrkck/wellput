import React from 'react';
import Page from '../../../Components/Page/Page';
import {DropDownRoutes} from '../../../Components/Routes/DropDownRoutes';
import {tidyUpDropDown} from "../../Navigation/TidyUp/tidyUpDropDown";


const TidyUp = () => {
    return (
        <Page>
            <DropDownRoutes baseUrl="/TidyUp" pagesList={tidyUpDropDown} render={() => {
                return(
                    <div>
                        <h2>
                            In the dropdown you can access to more content.
                        </h2>
                    </div>
                )
            }}/>
        </Page>
    );
};

export default TidyUp;