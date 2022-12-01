let data = [
    {
        name: 'Tim',
        age: '22'
    },
    {
        name: 'Beatrix',
        age: '26'
    },
    {
        name: 'Alan',
        age: '31'
    },
    {
        name: 'Evan',
        age: '47'
    },
    {
        name: 'Fiona',
        age: '19'
    },
    {
        name: 'Matt',
        age: '40'
    },
    {
        name: 'Yanis',
        age: '29'
    },
];

const info = document.querySelector('#info')

let details = data.map(function(item) {
    return '<div>' + item.name + ' ' + 'is ' + item.age '</div>';
});

info.innerHTML = details.join('\n');