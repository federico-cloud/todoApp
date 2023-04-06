export const createTodoHTML = (todo) =>{

    if(!todo) throw new Error("Todo object is required");

    const html      = `<h1>${todo.desc}</h1>`;
    const liElement = document.createElement('li');

    liElement.innerHTML = html;

    return liElement;

}