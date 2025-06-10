const { OpenAI } = require('openai');

const generaCuentos = async (datos) => {
    const [personajes, localizacion, accion] = datos;

    const client = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY,
    });

    const response = await client.chat.completions.create({
        model: 'chatgpt-4o-latest',
        messages: [
            {
                role: 'system',
                content: 'Eres una profesora de colegio que le encanta contar cuentos a sus alumnos.',
            },{
                role: 'assistant',
                content: 'Debes expresarte de una forma didáctica con tus alumnos. Intentando colar de vez en cuando moralejas para fomentar el aprendizaje. Tienes que añadir emojis de vez en cuando para que sea más ameno.',
            },
            {
                role: 'user',
                content: `Debes generar un cuento de 3 párrafos como máximo que incluya los siguientes personajes: ${personajes}. Estos personajes se encuentran en la siguiente localización: ${localizacion}. La acción principal que deben realizar es la siguiente: ${accion}.`,
            },
        ],
    })

    const historia =  response.choices[0].message.content;

    const responseImage = await client.images.generate({
        model: 'dall-e-3',
        prompt: `Crea una imagen que represente la historia: ${historia}. La imagen debe ser colorida y atractiva para niños, con un estilo de ilustración amigable. No incluyas texto, es solo una ilustración de la historia.`,
        n: 1,
        size: '1024x1024',
    });

    const imagen = responseImage.data[0].url;

    return [historia, imagen];
}

module.exports = {
    generaCuentos
};