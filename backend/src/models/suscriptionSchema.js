const suscription = {
    type: 'object',
    properties: {
        mins: {
            type: 'string',
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
