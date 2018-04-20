import h from "hyperscript";
import hh from 'hyperscript-helpers';

const { div, button } = hh(h);

// model
const initModel = 0;

// view function
function view(dispatchFunc, model) {
    return div([
        div(
            {
                className: "mv2",
            },
            `Count: ${model}`
        ),
        button(
            {
                className: 'mr2 pv1 ph2',
                onclick: () => dispatchFunc('plus')
            },
            '+'
        ),
        button(
            {
                className: 'pv1 ph2',
                onclick: () => dispatchFunc('minus')
            },
            '-'
        )
    ]);
}

// update function
function update(msg, model) {
    switch (msg) {
        case 'plus':
            return model + 1;
        case 'minus':
            return model - 1;
        default:
            return model;
    }
}

// impure code for updating DOM
function app(modelValue, updateFunc, viewFunc, node) {
    let model = modelValue;
    let currentView = viewFunc(dispatch, model);
    node.appendChild(currentView);

    function dispatch(msg) {
        model = updateFunc(msg, model);
        const updatedView = viewFunc(dispatch, model);
        node.replaceChild(updatedView, currentView);
        currentView = updatedView;
    }
}

const rootNode = document.getElementById('app');

app(initModel, update, view, rootNode);