//your JS code here. If required.
 const changeButton = document.getElementById("change_button");
    const resetButton = document.getElementById("Reset");

    changeButton.addEventListener("click", () => {
      const blockId = document.getElementById("block_id").value;
      const color = document.getElementById("colour_id").value;
      const allBlocks = document.querySelectorAll(".grid-item");

      // Reset all grid colors to transparent
      allBlocks.forEach(block => {
        block.style.backgroundColor = "transparent";
      });

      // Change the color of the selected block if valid
      const selectedBlock = document.getElementById(blockId);
      if (selectedBlock) {
        selectedBlock.style.backgroundColor = color;
      } else {
        alert("Invalid Block ID! Please enter a number between 1 and 9.");
      }
    });

    resetButton.addEventListener("click", () => {
      document.querySelectorAll(".grid-item").forEach(block => {
        block.style.backgroundColor = "transparent";
      });
      document.getElementById("block_id").value = "";
      document.getElementById("colour_id").value = "";
    });
