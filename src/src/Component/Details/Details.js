import React from 'react'

const Details = ({ charId, currentList }) => {
    return (
        <div>
            {
                currentList.map((charDetail) => {
                    if (charId === charDetail.char_id) {
                        return (
                            <>
                                <li>{charDetail.name}</li>
                                <li>{charDetail.birthday}</li>
                                <li>{charDetail.occupation}</li>
                                <li>{charDetail.status}</li>
                                <li>{charDetail.nickname}</li>
                                <li>{charDetail.portrayed}</li>
                                <li>{charDetail.appearance.map(res => `${res}, `)}</li>
                                <img src={charDetail.img} alt={charDetail.name} width="100" />
                            </>
                        )
                    }
                })
            }
        </div>
    )
}

export default Details
