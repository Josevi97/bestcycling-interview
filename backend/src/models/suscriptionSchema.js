const suscription = {
    type: 'object',
    properties: {
        mins: {
            type: 'number',
            required: true
        },
        auto_suscribe: {
            type: 'boolean',
            required: true
        },
    },
    additionalProperties: false
}

module.exports = suscription;
