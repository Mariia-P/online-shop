import { Component } from './core/Component';
import { Header, Toolbar, Sidebar, Main, Footer } from './components';
import './App.scss';

export class App extends Component {
    constructor({ gs, perPage, title, categories }) {
        super({
            className: 'app',
            html: '<div class="app__content content-wrapper"></div>'
        });

        this.findNode('.app__content')
            .append([
                //
                new Sidebar(),
                new Main({ gs, perPage })
            ])
            .before([
                new Header({ title }),
                //
                new Toolbar({ gs, categories })
            ])
            .after(new Footer());
    }
}
