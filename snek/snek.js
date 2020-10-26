var lastRenderTime = 0;
const snakeSpeed = 2;

function main(currentTime){
    window.requestAnimationFrame(main)
    const secLastRender = (currentTime - lastRenderTime) / 1000
    if (secLastRender < 1 / snakeSpeed) return

    console.log('render')
    lastRenderTime = currentTime;

    update()
    draw()
}

window.requestAnimationFrame(main)