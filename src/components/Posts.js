import React from 'react';

const Posts = ({loading, listCharacter, charDetail}) => {
    if (loading) {
        return (
            <header> Loading...</header>
        )
    }
    return (

        <table className="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Occupation</th>
                    <th scope="col">Status</th>
                </tr>
            </thead>
            <tbody>
               
                    {
                        listCharacter.map((char)=>{
                            return(
                            <tr key={char.char_id} onClick={()=>charDetail(char.char_id)}>
                                <th scope='col'>{char.char_id}</th>
                                <td scope='col'>{char.name}</td>
                                <th scope='col'>{char.occupation.map((res)=>`${res}, `)}</th>
                                <td scope='col'>{char.status}</td>
                                </tr>
                            )
                        })}
                
            </tbody>
        </table>
    )
}
export default Posts;