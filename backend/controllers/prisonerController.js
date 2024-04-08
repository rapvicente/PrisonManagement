const prisoners = [  
 {
      'name': 'Given',
      'age': 25,
     'crime': 'Frustrated murder',
    'sentence': '25 years',
    
    },
 

{
'name': 'Irish Vicente',
'age': 20,
'crime': 'Drug LORD',
'sentence': '30 years',
},

{
    'name': 'Ralph Vicente',
    'age': 20,
    'crime': 'Adultery',
    'sentence': '10 years',
    },
]

module.exports.prisoners = (req, res) => {
res.json({'PRISONERS': prisoners});
};