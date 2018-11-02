import React, {Fragment} from 'react';
import { Button } from 'react-native-elements';
import {colors, inputStyle} from "../styles";

const QuizQuestionButtons = ({showAnswer, toggleAnswer, validateAnswer}) => {

    if (showAnswer) {
        return <Fragment>
            <Button title="I got it right!"
                    buttonStyle={inputStyle.button}
                    backgroundColor={colors.okColor}
                    onPress={() => validateAnswer(true)}
            />
            <Button title="Mmm.. I need to study this one a bit more"
                    buttonStyle={inputStyle.button}
                    backgroundColor={colors.dangerColor}
                    onPress={() => validateAnswer(false)}
            />
        </Fragment>
    } else {
       return <Button title="Show Answer"
                      buttonStyle={inputStyle.button}
                      backgroundColor={colors.primaryColor}
                      onPress={() => toggleAnswer()}
       />
    }
}

export default QuizQuestionButtons;