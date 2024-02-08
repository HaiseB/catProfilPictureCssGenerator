const MAX_SHAPE_INDEX = 6;
const MAX_COLOR_INDEX = 1;

function extractShapeIndex(className) {
    const classArray = className.split(' ');
    for (let i = 0; i < classArray.length; i++) {
        const classItem = classArray[i];
        if (classItem.startsWith('shape-')) {
            return parseInt(classItem.substring(6));
        }
    }
    return 1;
}

function extractColorIndex(className) {
    const classArray = className.split(' ');
    for (let i = 0; i < classArray.length; i++) {
        const classItem = classArray[i];
        if (classItem.startsWith('color-')) {
            return parseInt(classItem.substring(6));
        }
    }
    return 1;
}

document.addEventListener("DOMContentLoaded", function() {
    const visualizer = document.getElementById('visualizer');
    const shapeVisualizer = document.getElementById('shape-visualizer');
    const shapeRightButton = document.getElementById('shape-right-button');
    const shapeLeftButton = document.getElementById('shape-left-button');

    let currentShapeIndex = extractShapeIndex(shapeVisualizer.className);
    let currentColorIndex = extractColorIndex(shapeVisualizer.className);

    shapeRightButton.addEventListener('click', function() {
        currentShapeIndex++;
        if (currentShapeIndex > MAX_SHAPE_INDEX) {
            currentShapeIndex = 1;
        }

        shapeVisualizer.className = 'shape-' + currentShapeIndex + ' color-' + currentColorIndex;

        visualizer.classList.add('horizontal-shake');

        setTimeout(function() {
            visualizer.classList.remove('horizontal-shake');
        }, 350);
    });

    shapeLeftButton.addEventListener('click', function() {
        currentShapeIndex--;
        if (currentShapeIndex < 1) {
            currentShapeIndex = MAX_SHAPE_INDEX;
        }

        shapeVisualizer.className = 'shape-' + currentShapeIndex + ' color-' + currentColorIndex;

        visualizer.classList.add('horizontal-shake');

        setTimeout(function() {
            visualizer.classList.remove('horizontal-shake');
        }, 350);
    });
});