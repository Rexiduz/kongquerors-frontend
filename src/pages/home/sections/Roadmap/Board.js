import { useContext, useEffect, useRef, useState } from 'react'
import { HomePageContext } from 'pages/home/Home'

import { BoardContainer } from './Roadmap.styled'
import BorderedGem from './BorderedGem'

import { Box } from 'components'

const Board = ({ children, bloods = [] }) => {
  const elRef = useRef()
  const [visible, setVisible] = useState(false)
  const [{ scroll }] = useContext(HomePageContext)

  useEffect(() => {
    const bounding = elRef.current?.getBoundingClientRect?.() || {}
    setVisible(bounding.y < window.innerHeight / 2)
  }, [scroll])

  return (
    <BoardContainer className='board-container'>
      <div>{children}</div>
      {bloods.map((blood) => {
        return (
          <Box style={{ ...blood.style, position: 'absolute' }}>
            <img src={blood.img} alt='blood' width={blood.style.width} />
          </Box>
        )
      })}
      <BorderedGem
        ref={elRef}
        width={10}
        height={36}
        filledColor={visible ? '#FFF500' : 'black'}
      />
    </BoardContainer>
  )
}

export default Board
