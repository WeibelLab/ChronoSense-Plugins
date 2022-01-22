import { Plugin } from "../JS_Files/plugin.js";

class MediaPipeCamera extends Plugin {
    createUI() {
        this.pluginDeviceList.forEach(async device => {
			let pluginDiv = await device.getPluginDiv();
            if(pluginDiv != null && !this.checkIfActiveDevice(device)){
                let pluginContainer = document.createElement("div");
                pluginContainer.classList.add("plugin-container");
                let textExample = document.createTextNode("This is a mediapipe plugin for Camera devices");
                pluginContainer.appendChild(textExample);
                pluginDiv.appendChild(pluginContainer);
                this.addToActiveDeviceList(device);
            }
		});
    }
    loadMediaPipe() {
        loadExternalJS(url="https://cdn.jsdelivr.net/npm/@mediapipe/drawing_utils@0.1/drawing_utils.js")
        loadExternalJS(url="https://cdn.jsdelivr.net/npm/@mediapipe/holistic@0.1/holistic.js")
    }
    initMediaPipe() {
        
    }
}

export async function init(){
    let example = new MediaPipeCamera("MediaPipe Camera", "Video", "Camera");
    await example.init();
    example.loadMediaPipe();
    example.createUI();

}