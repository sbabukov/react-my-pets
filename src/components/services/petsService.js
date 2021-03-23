
const url = 'http://localhost:5000/pets';

export const getAll = (category = '') => {

    // само ако я има категорията подадена през раутера, на която е кликнато, я залепя като куери стринг към URL-то
    let petsUrl = url + ((category && category != 'all')
        ? `?category=${category}`
        // ако я няма, дава всичките категории
        : '');

    return fetch(petsUrl)
        .then(res => res.json())
        .catch(err => console.log(err));
};

export const getOne = (petId) => {
    return fetch(`${url}/${petId}`)
        .then(res => res.json())
        .catch(err => console.log(err));

};