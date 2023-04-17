export default function PreloadAssets(assets) {
    function loadAsset(src) {
        return new Promise((resolve, reject) => {
            var asset;
            if (src.endsWith(".mp4")) {
                asset = document.createElement('video');
                asset.oncanplay = function() {
                    console.log("Loaded " + src);
                    resolve(asset);
                };
            }
            else {
                asset = new Image();
                asset.onload = function() {
                    console.log("Loaded " + src);
                    resolve(asset);
                };
            }
            asset.onerror = asset.onabort = function() {
                console.log("Error loading " + src)
                reject(src);
            };
            asset.src = src;
            if (src.endsWith(".mp4")) {
                asset.load();
            }

            // If src has already loaded before this point (e.g. it was cached)
            // the relevant event may not be fired, so we resolve immediately.
            if(asset.readyState > 3) {
                resolve(asset);
            }
        });
    }
    return assets.map(src => loadAsset(src));
}