export default function PreloadAssets(assets) {
    function loadAsset(src) {
        return new Promise((resolve, reject) => {
            console.log("got to call")
            var asset;
            if (src.endsWith(".mp4")) {
                asset = document.createElement('video');
            }
            else {
                asset = new Image();
            }
            asset.onload = function() {
                console.log("got to resolution")
                resolve(asset);
            };
            asset.onerror = asset.onabort = function() {
                console.log("got to error or abort");
                reject(src);
            };
            asset.src = src;
        });
    }
    return assets.map(src => loadAsset(src));
}