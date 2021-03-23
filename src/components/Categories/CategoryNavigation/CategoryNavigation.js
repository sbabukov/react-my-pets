
// с NavLink се прави навигацията ще бъде и по-фенси отколкото с Link, която е била  с <a href...
import {NavLink} from 'react-router-dom';

const CategoryNavigation = () => {

    return (
        <nav className="navbar">
            <ul>
                <li><NavLink to="/categories/all">All</NavLink></li>
                <li><NavLink to="/categories/Cat">Cats</NavLink></li>
                <li><NavLink to="/categories/Dog">Dogs</NavLink></li>
                <li><NavLink to="/categories/Parrot">Parrots</NavLink></li>
                <li><NavLink to="/categories/Reptile">Reptiles</NavLink></li>
                <li><NavLink to="/categories/Other">Other</NavLink></li>
            </ul>

            {/* NavLink слага автоматично activeClass */}
            <style jsx>{`
                .active {
                    background-color: lightgreen !important; 
                    }
                
            `}</style>

        </nav>
    );
}

export default CategoryNavigation;