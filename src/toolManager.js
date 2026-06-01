import { TextTool } from "./tools/textTool.js";

export class ToolManager {
  constructor(canvas) {
    this.canvas = canvas;
    this.currentToolName = null;

    this.tools = {
      text: new TextTool(canvas),
    };

    this.toolDefinitions = [{ id: "text", name: "Text", icon: "T" }];

    this.selectTool("text");
    this.createToolbar();
  }

  createToolbar() {
    const container = document.getElementById("tools-container");

    this.toolDefinitions.forEach((toolDef) => {
      const button = document.createElement("button");
      button.className = "tool-button";
      button.id = `tool-${toolDef.id}`;
      button.innerHTML = `
        <span class="tool-icon">${toolDef.icon}</span>
        <span>${toolDef.name}</span>
      `;

      button.addEventListener("click", () => {
        this.selectTool(toolDef.id);
      });

      container.appendChild(button);
    });
  }

  selectTool(toolId) {
    if (this.currentToolName) {
      const oldButton = document.getElementById(`tool-${this.currentToolName}`);
      if (oldButton) {
        oldButton.classList.remove("active");
      }
    }

    this.currentToolName = toolId;
    const newButton = document.getElementById(`tool-${toolId}`);
    if (newButton) {
      newButton.classList.add("active");
    }
  }

  getCurrentTool() {
    return this.tools[this.currentToolName];
  }
}
