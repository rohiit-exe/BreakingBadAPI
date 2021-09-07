import React from 'react';
const Details = ({ currentList, charId }) => {

    return (
        < div >
    {
        currentList.map((char) => {
            if (charId === char.char_id) {
                return (
            <React.Fragment>
                    
                    <li scope='col'>{char.char_id}</li>
                    <li scope='col'>{char.name}</li>
                    <li scope='col'>{char.occupation.map((res) => `${res}, `)}</li>
                    <li scope='col'>{char.status}</li>
                
            </React.Fragment>
                )
            }
        }
    }
        </div>)
    }
export default Details;