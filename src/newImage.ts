function newImage(url: string): HTMLImageElement {
    let image: HTMLImageElement = document.createElement('img');
    image.src = url;
    image.style.position = 'absolute';
    document.body.append(image);
    return image;
}
