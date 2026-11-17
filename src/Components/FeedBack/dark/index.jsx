import { ButtonFeedback } from "./styles.js";

function ButtFBdark({children, ...props}) {


    return (
              <ButtonFeedback {...props}>
                {children}
              </ButtonFeedback>
    )
}

export default ButtFBdark