const keys = [
    "/dist/",
    "/dist/js/",
    "/index.html",
    "/images/screenshots/ios/ipad/temp/"
];
function keysToObjects(input){
    const rootFolder = {}
    for (let key of input) {
        let currentFolder = rootFolder
        const paths = key.split('/');
        console.log(paths)

        for (let i = 1; i < paths.length; i++) {
            const currentPath = paths[i];
            if (currentPath === "")
            continue

            if (!currentFolder[currentPath]) {
                currentFolder[currentPath] = i === paths.length - 1 ? null : {}
            }
            currentFolder = currentFolder[currentPath]
        }
    }
    return rootFolder;
}
console.log(JSON.stringify(keysToObjects(keys), null, 2));