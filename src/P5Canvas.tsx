import P5 from "p5"
import { useEffect } from "react"

interface Props {
  title: string,
  id: string,
  sketch: (...args: any[]) => any
}

function LinkedList(props: Props) {


  useEffect(
    () => {
      const s = new P5(props.sketch)

      return () => {
        s.remove()
      }
    }, [])

  return (

    <div id={props.id}>
      <h2>{props.title}</h2>
    </div>
  )
}

export default LinkedList