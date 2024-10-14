import { Badge, IconButton } from '@mui/material'
import React, { useState } from 'react'

function Counter() {
    const [like,setLike]=useState(0)
    const [disLike,setDisLike]=useState(0)

    const incrementLike=()=>{
    setLike(like+1)
    }
    const incrementDisLike=()=>{
        setDisLike(disLike+1)
    }

  return (
    <div>
        <IconButton color='primary' onClick={incrementLike}>
            <Badge badgeContent={like}>
                👍
            </Badge>
        </IconButton>
        <IconButton color='primary' onClick={incrementDisLike}>
            <Badge badgeContent={disLike}>
                👍
            </Badge>
        </IconButton>
    </div>
  )
}

export default Counter