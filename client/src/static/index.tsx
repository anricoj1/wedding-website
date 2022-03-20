// images
let stables = require('./images/stables.jpg');

// interface
import { Image } from 'interfaces';

export const useImageGallery: string[] = [
    "https://drive.google.com/uc?export=view&id=1I3ef81eD7Bx52dYH6UzqYJijckGe9jsO",
    "https://drive.google.com/uc?export=view&id=12DlAE8hJCGuijOJAYTfW9IrC8EAy81xM",
    "https://drive.google.com/uc?export=view&id=1-HMTTJfbOHma3JZEvfcxFAxoadJ5lyZo",
    "https://drive.google.com/uc?export=view&id=1CsZHBK7c2vFJ_5wZRVnzNdAl_lLlIA5N",

] 

const useImages: Record<string, Image> = {
    stables: {
        name: "stables",
        src: stables
    }
}

export default useImages;