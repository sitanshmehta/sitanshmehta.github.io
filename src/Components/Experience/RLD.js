import React, { Component } from 'react';
import { useEffect } from 'react';


const RLD = () => {
    useEffect(() => {
        document.title = "RLDatix - Sitansh Mehta";
    }, []);

    return (
        <div>
            Coming soon!
        </div>
    )
}

export default RLD;