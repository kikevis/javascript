let getName = async(id) => {
    if(id === 1){
        return "Max";
    } else {
        throw new Error('Name not exists')
    }
};

getName(1)
    .then(res => console.log(res))
    .catch(err => console.log(err));

//Geovanny E. Villa Sánchez
//KikeViS