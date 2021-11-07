import React from 'react'
import { KAOMOJIS } from '../../assets/kao'
import { KaoMoji } from '../KaoMoji/KaoMoji'
import './KaoList.css'
import { styled } from '@mui/material/styles';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { CheckOutlined } from '@material-ui/icons';


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const ListItem = styled('li')(({ theme }) => ({
    margin: theme.spacing(0.5),
}));

const KaoMojiCategories = KAOMOJIS.map((item) => item.name)



export const KaoList = () => {
    // Keeps track of which items the user has checked!
    const [checked, setChecked] = React.useState([]);

    const UsedKaomojiItems = KAOMOJIS.filter((item) => checked.includes(item.name))

    const handleCheckboxEvent = (event) => {
        console.log(KaoMojiCategories)
        if (event.target.checked) {
            console.log("Add item...")
            setChecked([...checked, event.target.value])
            return
        }
        setChecked(checked.filter((value) => value !== event.target.value))

    };

    return (
        <div>
            <h2 className="sub-heading"> Select the Kaomojis you would like to display!</h2>
            <div className="container">
                <FormControl component="fieldset">
                    <FormGroup aria-label="position" row>
                        {
                            KaoMojiCategories.map(
                                (category, index) => {
                                    return (
                                        <FormControlLabel
                                            className="checkBoxField"
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
                                <div key={KaoItem.name}>
                                    <h3>{KaoItem.name}</h3>
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

