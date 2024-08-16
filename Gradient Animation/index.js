anime({
    targets:".container .inner .items1",
    easing: "linear",
    loop: true,
    duration: 3000,
    keyframes: [
        { boxShadow: '0px 10px 5px red' },
        { boxShadow: '10px 0px 5px green' },
        { boxShadow: '10px 10px 5px blue' },
        { boxShadow: '0px 0px 5px red' },
    ],
})
anime({
    targets:".container .inner .items2",
    easing: "linear",
    loop: true,
    duration: 3000,
    keyframes: [
        { boxShadow: '10px 0px 5px green' },
        { boxShadow: '0px 10px 5px red' },
        { boxShadow: '10px 10px 5px blue' },
        { boxShadow: '0px 0px 5px green' },
    ],
})