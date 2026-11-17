import { Fundo } from './styles.js'
import ImageOne from '../../../assets/fundocurrency.png'

function FundoPagina({children, ...props}) {


    return (
              <Fundo $bgImage={ImageOne}>
                {children}
              </Fundo>
    )
}

export default FundoPagina