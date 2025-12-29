import type { ComponentProps } from 'react'
import Cheer from '../../public/mascot-images/mascot-cheer.png'
import Happy from '../../public/mascot-images/mascot-happy.png'
import Idle from '../../public/mascot-images/mascot-idle.png'
import Point from '../../public/mascot-images/mascot-point.png'
import Proud from '../../public/mascot-images/mascot-proud.png'
import Sleep from '../../public/mascot-images/mascot-sleep.png'
import Stern from '../../public/mascot-images/mascot-stern.png'
import Think from '../../public/mascot-images/mascot-think.png'
import Thumbsup from '../../public/mascot-images/mascot-thumbsup.png'
import Wave from '../../public/mascot-images/mascot-wave.png'

type MascotVariants =
  | 'cheer'
  | 'happy'
  | 'idle'
  | 'point'
  | 'proud'
  | 'sleep'
  | 'stern'
  | 'think'
  | 'thumbsup'
  | 'wave'

interface MascotImageProps extends Omit<ComponentProps<'img'>, 'source'> {
  type: MascotVariants
}

const mascotMap = {
  cheer: Cheer,
  happy: Happy,
  idle: Idle,
  point: Point,
  proud: Proud,
  sleep: Sleep,
  stern: Stern,
  think: Think,
  thumbsup: Thumbsup,
  wave: Wave,
}

export function Mascot({ type, ...props }: MascotImageProps) {
  return <img src={mascotMap[type]} {...props} />
}
