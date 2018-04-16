import h from 'hyperscript';
import hh from 'hyperscript-helpers';

const { div, button } = hh(h);

const initModel = 0;


// view functions

function view(dispatch, model) {
    
    return div([
        div({ className: 'mv2' },`Count: ${ model }`),
        button(
            { 
                className: 'pv1 ph2 mr2',
                onclick: () => dispatch('plus', model)
            },
            '+'
        ),
        button(
            {
                className:
                'pv1 ph2',
                onclick: () => dispatch('minus', model)
            },
            '-'
        )
    ]);
}


// update functions

function update(msg, model) {
    switch (msg) {
        case 'plus':
            return model + 1;
        case 'minus':
            return model -1;
        default:
            return model;
    }
}


// impure stuff below

const appNode = document.getElementById('app');

// app.appendChild(view(initCount));

function app(initModel, update, view, node) {
    let model = initModel;
    let currentView = view(dispatch, model);
    node.appendChild(currentView);
    
    function dispatch(msg) {
        model = update(msg, model);
        let updatedView = view(dispatch, model)
        node.replaceChild(updatedView, currentView);
        currentView = updatedView;
    }
}

app(initModel, update, view, appNode);