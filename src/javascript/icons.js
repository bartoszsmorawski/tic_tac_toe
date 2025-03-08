import { Circle, X } from "lucide-react";

const size = '50px';

export const renderIcons = () => createIcons({
    attrs: {
        'stroke-width': 3,
        stroke: '#fff',
        width: size,
        height: size
    },
    icons: {
        X, 
        Circle
    } 
});

renderIcons();