Survey
    .StylesManager
    .applyTheme("modern");

var json = {
    title: "Exercise Module",
    showProgressBar: "bottom",
    showTimerPanel: "top",
    maxTimeToFinishPage: 20,
    maxTimeToFinish: 100,
    firstPageIsStarted: true,
    startSurveyText: "Start Quiz",
    pages: [
        {
            questions: [
                {
                    type: "html",
                    html: "You are about to start the exercise module. <br/>You have 20 seconds for every page and 100 seconds for the whole survey of 5 questions.<br/>Please click on <b>'Start Quiz'</b> button when you are ready."
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "A class is a",
                    title: "A class is a",
                    choicesOrder: "random",
                    choices: [
                        "Blueprint", "Specific instance of an object", "Category of user requirement", "None of the above"
                    ],
                    correctAnswer: "Blueprint"
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "In class diagrams, a class is represented with a",
                    title: "In class diagrams, a class is represented with a",
                    choicesOrder: "random",
                    choices: [
                        "Rectangle", "Ellipse", "Diamond", "Circle"
                    ],
                    correctAnswer: "Rectangle"
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "What does a sequence diagram represent?",
                    title: "What does a sequence diagram represent?",
                    choicesOrder: "random",
                    choices: [
                        "Workflow in the system", "How classes are related to each other", "Sequence of events flow to achieve a target", "Sequence of activities to be performed before moving to next state"
                    ],
                    correctAnswer: "Sequence of events flow to achieve a target"
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "An object can send a synchronous message and multiple asynchronous message in parallel",
                    title: "An object can send a synchronous message and multiple asynchronous message in parallel",
                    choicesOrder: "random",
                    choices: [
                        "True", "False"
                    ],
                    correctAnswer: "True"
                }
            ]
        }, {
            maxTimeToFinish: 25,
            questions: [
                {
                    type: "radiogroup",
                    name: "In UML 2.0 a synchronous message is represented with a",
                    title: "In UML 2.0 a synchronous message is represented with a",
                    choicesOrder: "random",
                    choices: [
                        "Solid arrow with filled arrowhead", "Solid arrow with empty arrowhead", "Dotted arrow with filled arrowhead", "Dotted arrow with empty arrowhead"
                    ],
                    correctAnswer: "Solid arrow with filled arrowhead"
                }
            ]
        }
    ],
    completedHtml: "<h4>You have answered correctly <b>{correctedAnswers}</b> questions from <b>{questionCount}</b>.</h4><br><a href = 'exercise.html'>Click here to start again</a>"
};




window.survey = new Survey.Model(json);

survey
    .onComplete
    .add(function (result) {
        document
            .querySelector('#surveyResult')
            .textContent = "Here's where you went wrong:\n" + JSON.stringify(result.data, undefined, 2);
    });

$("#surveyElement").Survey({model:survey});

