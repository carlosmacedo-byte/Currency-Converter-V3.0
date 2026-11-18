import { ButtonConvert } from "./styles";

function ButtConvert({children, ...props}) {


    return (
              <ButtonConvert {...props}>
                {children}
              </ButtonConvert>
    )
}

export default ButtConvert;