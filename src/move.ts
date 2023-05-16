function move(element: HTMLElement) {
    element.style.position = 'fixed';

    function moveToCoordinates(x: number, y: number) {
        element.style.left = x + 'px';
        element.style.bottom = y + 'px';
    }
    
    function moveWithArrowKeys(x: number, y: number, callback: (direction: string | null) => void) {
        let direction: string | null = null;
        let left = x;
        let bottom = y;
        
        element.style.left = left + 'px';
        element.style.bottom = bottom + 'px';
        
        function moveCharacter() { 
            if (direction === 'west') {
                left -= 1;
            }
            if (direction === 'north') {
                bottom += 1;
            }
            if (direction === 'east') {
                left += 1;
            }
            if (direction === 'south') {
                bottom -= 1;
            }
            element.style.left = left + 'px';
            element.style.bottom = bottom + 'px';
        }
        
        setInterval(moveCharacter, 1);
        
        document.addEventListener('keydown', function(e: KeyboardEvent) {
            if (e.repeat) return;
        
            if (e.key === 'ArrowLeft') {
                direction = 'west';
            }
            if (e.key === 'ArrowUp') {
                direction = 'north';
            }
            if (e.key === 'ArrowRight') {
                direction = 'east';
            }
            if (e.key === 'ArrowDown') {
                direction = 'south';
            }
            callback(direction);
        });
        
        document.addEventListener('keyup', function(e: KeyboardEvent) {
            direction = null;
            callback(direction);
        });
    }
    

    return {
        to: moveToCoordinates,
        withArrowKeys: moveWithArrowKeys
    };
}
