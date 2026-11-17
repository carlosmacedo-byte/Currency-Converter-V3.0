import { ButtonFeedback } from "./styles.js";

function ButtFBclear({children, ...props}) {


    return (
              <ButtonFeedback {...props}>
                {children}
              </ButtonFeedback>
    )
}

export default ButtFBclear