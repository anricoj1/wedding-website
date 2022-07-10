// creates array of gallery index's
const imageList: string[] = Array.from(
    Array(46), (_: any, index: number) => {
        return `https://ik.imagekit.io/anricoj1/Photoshoot/tr:w-500,h-500/gallery_${index}.jpeg`
    }
)


export default imageList;