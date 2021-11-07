import React from 'react'
import { KAOMOJIS } from '../../assets/kao'
import { KaoMoji } from '../KaoMoji/KaoMoji'
import './KaoList.css'


export const KaoList = () => {
    return (
        <div>


            <h2>List of all Kaomojis</h2>
            <div>
                {
                    KAOMOJIS.map(
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

