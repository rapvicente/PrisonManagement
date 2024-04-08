const guards = [  
    {
        'id': 1,
        'name': 'Mich',
        'rank': 'Chief',
        'yearsofService': 40,
        'active': true,
    },
   
    {
        'id': 2,
        'name': 'Dash',
        'rank': 'Seargent',
        'yearsofService': 4,
        'active': false,
    },

    {
        'id': 3,
        'name': 'Atatskie',
        'rank': 'General',
        'yearsofService': 50,
        'active': true,
    }
]

// PRINTING ALL GUARDS

module.exports.guards = (req, res) => {
res.json({'GUARDS': guards});
};


// SPECIFIC GUARD BY ID

module.exports.guard = (req, res) => 
{
    const {id} = req.params

    console.log(id)

    const matchingGuard = guards.filter
    (
        (guard) => guard.id === parseInt(id)
    )

    if  (matchingGuard.length === 0)
    {
        res.status(404).json({'error': `Guard with ${id} not found`})
    }
    else
    {
        const {name, id} = matchingGuard[0];
        res.status(200).json({'name': name, 'id': id});    
    }
}

// FOR SEARCHING GUARDS BY NAME AND ID

module.exports.searchingOfGuard = (req, res) => 
{
    const { id, name } = req.query;
    console.log(id, name);

    const matchingGuard = guards.filter
    (
        (guard) => guard.id === parseInt(id) || guard.name === name
    );

    if (matchingGuard.length === 0) 
    {
        res.status(404).json({'error': `Guard with ${id} and ${name} not found`});
    } 
    else 
    {
        const { id, name, rank, yearsofService } = matchingGuard[0];
        res.status(200).json({ 'id': id, 'name': name, 'rank': rank, 'years of service': yearsofService });
    }
};

//FOR DELETING SPECIFIC GUARD BY ID

module.exports.removalOfGuard = (req, res) => 
{
    const { id } = (req.params);
    console.log(id);

    const index = parseInt(id) - 1; 
    if (index < 0 || index >= guards.length) 
    {
        res.status(404).json({ 'error': `Guard with ID ${id} not found` });
    } 
    else 
    {
        guards.splice(index, 1);
        res.status(200).json({ 'message': `Guard with ID ${id} deleted successfully` });
    }
};