function newNonPlayableCharacter(x: number, y: number): {
    element: HTMLImageElement;
    walkWest: () => void;
    walkNorth: () => void;
    walkEast: () => void;
    walkSouth: () => void;
    
} {
    let element: HTMLImageElement = newImage('assets/red-character/static.gif');
    element.style.zIndex = '1';

    let direction: string | null = null;

    function moveCharacter(): void {
        if (direction === 'west') {
            x -= 1;
        }
        if (direction === 'north') {
            y += 1;
        }
        if (direction === 'east') {
            x += 1;
        }
        if (direction === 'south') {
            y -= 1;
        }
        element.style.left = x + 'px';
        element.style.bottom = y + 'px';
    }

    setInterval(moveCharacter, 1);

    function walkEast(): void {
        direction = 'east';
        element.src = './assets/red-character/east.gif';
    }

    function walkNorth(): void {
        direction = 'north';
        element.src = './assets/red-character/north.gif';
    }

    function walkWest(): void {
        direction = 'west';
        element.src = './assets/red-character/west.gif';
    }

    function walkSouth(): void {
        direction = 'south';
        element.src = './assets/red-character/south.gif';
    }

    function stop(): void {
        direction = null;
        element.src = './assets/red-character/static.gif';
    }

    return {
        element: element,
        walkWest: walkWest,
        walkNorth: walkNorth,
        walkEast: walkEast,
        walkSouth: walkSouth,
        
    };
}
