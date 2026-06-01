import { Canvas } from "./canvas.js";
import { ToolManager } from "./toolManager.js";

const canvas = new Canvas("app-canvas");
const toolManager = new ToolManager(canvas);

const canvasElement = canvas.element;

canvasElement.addEventListener("mousedown", (e) => {
  toolManager.getCurrentTool().startStroke(e);
});
