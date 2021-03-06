import React from 'react';
import Collapsibles from './Collapsibles';

const Design = props => {

    const handlePaletteChange = event => {
        let checkedOption = event.target.value;
        props.handlePaletteChange(checkedOption);
    }

    return(
        <Collapsibles
            collapseSection={props.collapseSection}
            open={props.open}
            category="design"
            lowerSection="palette__container"
            sectionTitle="diseña"
            icon="far fa-object-ungroup"
        >
            <p>colores</p>
            <div className="color_selected">

                <div className="palette">
                    <label htmlFor="colorpalette1"></label>
                    <input className="form-item" id="colorpalette1" type="radio" value="1" name="palette" onClick={handlePaletteChange} defaultChecked={props.paletteValue === '1' ? true : false}/>
                    <div className="palette__color--general">
                        <div className="palette__color blue1"></div>
                        <div className="palette__color blue2"></div>
                        <div className="palette__color blue3"></div>
                    </div>
                </div>

                <div className="palette">
                    <label htmlFor="colorpalette2"></label>
                    <input className="form-item" id="colorpalette2" type="radio" value="2" name="palette" onClick={handlePaletteChange} defaultChecked={props.paletteValue === '2' ? true : false}/>
                    <div className="palette__color--general">
                        <div className="palette__color red1"></div>
                        <div className="palette__color red2"></div>
                        <div className="palette__color red3"></div>
                    </div>
                </div>

                <div className="palette">
                    <label htmlFor="colorpalette3"></label>
                    <input className="form-item" id="colorpalette3" type="radio" value="3" name="palette" onClick={handlePaletteChange} defaultChecked={props.paletteValue === '3' ? true : false}/>
                    <div className="palette__color--general">
                        <div className="palette__color yellow1"></div>
                        <div className="palette__color yellow2"></div>
                        <div className="palette__color yellow3"></div>
                    </div>
                </div>
            </div>
        </Collapsibles>
    );
}

export default Design;