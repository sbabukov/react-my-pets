
import { useEffect, useState } from 'react';
import * as petsService from '../services/petsService';

const PetDetails = ({
    match,
}) => {

    // запазваме резпонса, в началото ще е празен обект
    let [pet, setPet] = useState({});

    // ще направим заявка с функционален компонент (хукс)
    // [] означава, че веднъж като се зареди страницата, да се извика това (долното) и повече да не го извикваш (като компонент дидмаунт)
    // сега сме сложили [match], че ако случайно match се промени по някаква причина, да се изпълни наново 
    useEffect(() => {
        petsService.getOne(match.params.petId)
        .then(res => setPet(res))
    }, [match]);

    return (
        <section class="detailsOtherPet">
            <h3>{pet.name}</h3>
            <p>Pet counter: {pet.likes} <a href="#"><button class="button"><i class="fas fa-heart"></i>
                        Pet</button></a>
            </p>
            <p class="img"><img src={pet.imageURL}/></p>
            <p class="description">{pet.description}</p>
        </section>
    );

}

export default PetDetails;