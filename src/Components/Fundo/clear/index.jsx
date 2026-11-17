import { Fundo } from './styles.js'
import ImageTwo from '../../../assets/fundoclear.jpg'

function FundoClear({children, ...props}) {


    return (
              <Fundo $bgImage={ImageTwo}>
                {children}
              </Fundo>
    )
}

export default FundoClear