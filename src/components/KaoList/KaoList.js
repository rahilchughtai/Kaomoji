import React from 'react'
import { KAOMOJIS } from '../../assets/kao'
import { KaoMoji } from '../KaoMoji/KaoMoji'
import './KaoList.css'
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
const KaoMojiCategories = KAOMOJIS.map((item) => item.name)

export const KaoList = () => {

    const [checked, setChecked] = React.useState([]);
    const UsedKaomojiItems = KAOMOJIS.filter((item) => checked.includes(item.name))

    const addToArray = (value) => setChecked([...checked, value])

    const removeFromArray = (eventValue) => {
        setChecked(checked.filter((value) => value !== eventValue))
    }

    const handleCheckboxEvent = (event) => {
        const { checked, value } = event.target
        return checked ? addToArray(value) : removeFromArray(value)
    };



    return (
        <div className="KaoListWrapper">
            <h2 className="sub-heading"> Pick your Kaomji Categories </h2>
            <div className="container">
                <FormControl component="fieldset">
                    <FormGroup className="row justify-content-center mb-3" aria-label="position" row>
                        {
                            KaoMojiCategories.map(
                                (category, index) => {
                                    return (
                                        <FormControlLabel
                                            className="checkBoxField col-2 mb-1"
                                            key={index}
                                            value={category}
                                            control={<Checkbox size="medium" onChange={handleCheckboxEvent} />}
                                            label={category}
                                            labelPlacement="top"
                                        />
                                    )
                                }
                            )
                        }
                    </FormGroup>
                </FormControl>
            </div>
            <div>
                {
                    UsedKaomojiItems.map(
                        (KaoItem) => {
                            return (
                                <div className="mb-4" key={KaoItem.name}>
                                    <h2 className="item-heading" style={{ fontWeight: 'bold' }} >{KaoItem.name}</h2>
                                    <KaoMoji entries={KaoItem.entries} ></KaoMoji>
                                </div>

                            )
                        }

                    )
                }
            </div>
        </div>
    )
}

