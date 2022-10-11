export const fadeIn = {
    hidden : {
        opacity : 0,
    },
    show :{
        opacity : 1,
        transition:{
            duration:0.75,
        },
        exit :{
            opacity : 0,
            transition : {
                duration : 0.75,
            },
        },
    },
};

export const popUp = {
    hidden : {
        opacity : 0,
        scale: 0.5,
    },
    show :{
        opacity : 1,
        scale : 1,
        transition:{
            duration:0.2,
        },
        exit :{
            opacity : 0,
            transition : {
                duration : 0.2,
            },
        },
    },
};


export const popUp2 = {
    hidden : {
        opacity : 0,
        scale: 0.2,
    },
    show :{
        opacity : 1,
        scale : 1,
        transition:{
            duration:0.5,
        },
        exit :{
            opacity : 0,
            transition : {
                duration : 0.5,
            },
        },
    },
};