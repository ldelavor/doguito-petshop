import { clientService } from "../service/client-service.js";

const form = document.querySelector('[data-form]');

form.addEventListener('submit', async (evento) => {
    evento.preventDefault();

    const name = evento.target.querySelector('[data-name]').value;
    const email = evento.target.querySelector('[data-email]').value;
    try {
        await clientService.newClient(name, email);
        window.location.href = '../screens/registrer_done.html';
    }
    catch (error){
        console.log(error);
        window.location.href = '../screens/error.html'
    }
})