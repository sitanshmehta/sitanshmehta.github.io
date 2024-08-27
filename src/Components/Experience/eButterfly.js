import React, { Component } from 'react';
import { useEffect } from 'react';

const EButterfly = () => {
    useEffect(() => {
        document.title = "eButterfly - Sitansh Mehta";
    }, []);

    return (
        <div>
            Coming soon!
        </div>
    );
};

export default EButterfly;