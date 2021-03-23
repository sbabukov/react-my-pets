
import { Component } from 'react';
import CategoryNavigation from './CategoryNavigation/CategoryNavigation';
import Pet from '../Pet/Pet';
import * as petsService from '../services/petsService';

class Categories extends Component {
    constructor(props) {
        super(props)

        this.state = {
            pets: [],
            currentCategory: 'all',
        }
    }

    componentDidMount() {
        petsService.getAll()

            // когато се зареди, вземи ми този респонс и го закрепи към стейта
            .then(res => this.setState({ pets: res }))
    }

    componentDidUpdate(prevProps) {

        const category = this.props.match.params.category;
        // ако на предните пропс, които преди ъпдейта, мач.парамс... е било равно на текущото категори, ще се върне и няма да продължи надолу(if-а се прави за да не влезем в безкраен цикъл заради непрекъснато ъъпдейтване на компонента)
        if (prevProps.match.params.category == category){
            return ;
        }

        petsService.getAll(category)
            .then(res => {
                this.setState({ pets: res, currentCategory: category })
            })

    }

    render() {
        return (
            <section className="dashboard">
                <h1>Dashboard</h1>

                <CategoryNavigation />

                <ul className="other-pets-list">
                    {/* искам да ми вземеш всеки един от pets и да ми върнеш компонент, който да е pet компонент и да му подаваме нeйм (нейм идва от Pet.js) и другите. Задължително се пише и key=x.id  */}
                    {this.state.pets.map(x =>
                        <Pet
                            key={x.id}
                            id={x.id}
                            name={x.name}
                            category={x.category}
                            description={x.description}
                            imageURL={x.imageURL}
                            likes={x.likes}
                        />
                    )}
                </ul>
            </section>
        );
    };

};

export default Categories;