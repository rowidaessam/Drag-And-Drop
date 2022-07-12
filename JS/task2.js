function handleDragStart(e) {
    e.dataTransfer.setData("text", this.id);
}


function handleDragEnterLeave(e) {
    if (e.type == "dragenter") {
        this.className = "drag-enter"
    } else {
        this.className = ""
    }
}

function handleOverDrop(e) {
    e.preventDefault();
    if (e.type != "drop") {
        return;
    }
    var draggedId = e.dataTransfer.getData("text");
    var draggedEl = document.getElementById(draggedId);

    if (draggedEl.parentNode == this) {
        this.className = "";
        return;
    }
    draggedEl.parentNode.removeChild(draggedEl);
    this.appendChild(draggedEl);
    this.className = "";
}

var draggable = document.querySelectorAll('[draggable]')
var targets = document.querySelectorAll('[data-drop-target]');

for (var i = 0; i < draggable.length; i++) {
    draggable[i].addEventListener("dragstart", handleDragStart);
}

for (var i = 0; i < targets.length; i++) {
    targets[i].addEventListener("dragover", handleOverDrop);
    targets[i].addEventListener("drop", handleOverDrop);
    targets[i].addEventListener("dragenter", handleDragEnterLeave);
    targets[i].addEventListener("dragleave", handleDragEnterLeave);

    if (targets.length === 0) {
        let correct = "complited";
        document.getElementById("side").innerHTML = correct;
    }
    function leavedrag(e) {

        if ((document.getElementById("section").children.length) + 1 == (document.getElementById("side").children.length)) {
            e.target.innerHTML = `<p style="margin: 50px auto; color:red ">you have finish all image</p>`;
        }
        e.preventDefault();
    }
}

