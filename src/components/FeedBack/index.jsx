import { ButtonFeedback } from "./styles.js";

function ButtFeedBack({children, ...props}) {


    return (
              <ButtonFeedback {...props}>
                {children}
              </ButtonFeedback>
    )
}

export default ButtFeedBack;