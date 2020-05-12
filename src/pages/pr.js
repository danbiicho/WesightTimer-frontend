import React from 'react'

const pr = () => {

    const mappingArr = ["재현님 1", "재현님 2", "재현님 3"];


    const mappedJh = mappingArr.map(btnTitle => {
    return (<button>{btnTitle}</button>);
    });

    const mappedDivs = (<button>"재현님 1"</button>);

    return (
        <div>
            {mappedJh}
        </div>
    )
}

export default pr;
