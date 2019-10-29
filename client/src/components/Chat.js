import React from 'react'
import { useQuery } from '@apollo/react-hooks';

import { CircularProgress } from '@material-ui/core'

import Message from './Message'

import chats from '../Queries/Chats'

const Chat = () => {
    const { loading, data} = useQuery(chats)

    if(loading){
        return (
            <CircularProgress />
        )
    } else {
        return (
            <div>
                <Message chatId={data.fetchAllChats[0].id} />
            </div>
        )
    }
}
 
export default Chat;