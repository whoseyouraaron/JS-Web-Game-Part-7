function newItem(url: string): HTMLImageElement {
    let item: HTMLImageElement = newImage(url);
    item.addEventListener('click', () => {
        item.remove();
        let inventoryItem: HTMLImageElement = document.createElement('img');
        inventoryItem.src = url;
        inventory.append(inventoryItem);
    });
    return item;
}
