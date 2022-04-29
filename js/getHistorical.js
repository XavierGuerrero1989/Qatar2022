const getData = async () => {
    try {
        const response = await fetch("../js/baseDeDatos.json");
        const data = await response.json();

        return data;
    } catch (error) {
        console.log('Hubo un error', error)
    }
}

export { getData }

